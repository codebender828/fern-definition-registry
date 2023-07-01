import { type PrismaClient } from "@prisma/client";
import { type FdrServerApplication } from "src/FdrServerApplication";
import { v4 as uuidv4 } from "uuid";
import { AuthUtils } from "../../AuthUtils";
import { FdrConfig } from "../../config";
import { ApiId, OrgId } from "../../generated/api";
import { DocsRegistrationId, FilePath } from "../../generated/api/resources/docs/resources/v1/resources/write";
import { DocsRegistrationIdNotFound } from "../../generated/api/resources/docs/resources/v1/resources/write/errors/DocsRegistrationIdNotFound";
import { InvalidCustomDomainError } from "../../generated/api/resources/docs/resources/v2/resources/write/errors/InvalidCustomDomainError";
import { InvalidDomainError } from "../../generated/api/resources/docs/resources/v2/resources/write/errors/InvalidDomainError";
import { WriteService } from "../../generated/api/resources/docs/resources/v2/resources/write/service/WriteService";
import { getParsedUrl } from "../../getParsedUrl";
import { S3FileInfo, S3Utils } from "../../S3Utils";
import { writeBuffer } from "../../serdeUtils";
import { transformWriteDocsDefinitionToDb } from "./transformDocsDefinitionToDb";

const DOCS_REGISTRATIONS: Record<DocsRegistrationId, DocsRegistrationInfo> = {};

interface DocsRegistrationInfo {
    fernDomain: string;
    customDomains: ParsedCustomDomain[];
    apiId: ApiId;
    orgId: OrgId;
    s3FileInfos: Record<FilePath, S3FileInfo>;
}

function validateDocsDomain({ domain, config }: { domain: string; config: FdrConfig }): string {
    const parsedUrl = getParsedUrl(domain);
    if (parsedUrl.hostname.endsWith(config.domainSuffix)) {
        return parsedUrl.hostname;
    }
    throw new InvalidDomainError();
}

interface ParsedCustomDomain {
    hostname: string;
    path: string;
}

function validateCustomDomains({ customDomains }: { customDomains: string[] }): ParsedCustomDomain[] {
    for (let i = 0; i < customDomains.length; ++i) {
        const one = customDomains[i];
        for (let j = i + 1; j < customDomains.length; ++j) {
            const two = customDomains[j];
            if (one == null || two == null) {
                continue;
            }
            if (one.includes(two) || two.includes(one)) {
                throw new InvalidCustomDomainError();
            }
        }
    }

    const parsedDomains: ParsedCustomDomain[] = [];
    for (const customDomain of customDomains) {
        const parsedDomain = getParsedUrl(customDomain);
        parsedDomains.push({
            hostname: parsedDomain.hostname,
            path: parsedDomain.pathname,
        });
    }
    return parsedDomains;
}

export function getDocsWriteV2Service(
    app: FdrServerApplication,
    prisma: PrismaClient,
    authUtils: AuthUtils,
    s3Utils: S3Utils,
    config: FdrConfig
): WriteService {
    return new WriteService({
        startDocsRegister: async (req, res) => {
            await authUtils.checkUserBelongsToOrg({ authHeader: req.headers.authorization, orgId: req.body.orgId });
            const domain = validateDocsDomain({ domain: req.body.domain, config });
            const customDomains = validateCustomDomains({ customDomains: req.body.customDomains });
            const docsRegistrationId = uuidv4();
            const s3FileInfos = await s3Utils.getPresignedUploadUrls({
                domain: req.body.domain,
                filepaths: req.body.filepaths,
            });
            DOCS_REGISTRATIONS[docsRegistrationId] = {
                fernDomain: domain,
                customDomains,
                orgId: req.body.orgId,
                apiId: req.body.apiId,
                s3FileInfos,
            };
            return res.send({
                docsRegistrationId,
                uploadUrls: Object.fromEntries(
                    Object.entries(s3FileInfos).map(([filepath, fileInfo]) => {
                        return [filepath, fileInfo.presignedUrl];
                    })
                ),
            });
        },
        finishDocsRegister: async (req, res) => {
            const docsRegistrationInfo = DOCS_REGISTRATIONS[req.params.docsRegistrationId];
            if (docsRegistrationInfo == null) {
                throw new DocsRegistrationIdNotFound();
            }
            await authUtils.checkUserBelongsToOrg({
                authHeader: req.headers.authorization,
                orgId: docsRegistrationInfo.orgId,
            });
            const dbDocsDefinition = transformWriteDocsDefinitionToDb({
                writeShape: req.body.docsDefinition,
                files: docsRegistrationInfo.s3FileInfos,
            });
            console.log(
                `Docs for ${docsRegistrationInfo.orgId} has references to apis ${Array.from(
                    dbDocsDefinition.referencedApis
                ).join(", ")}`
            );
            const bufferDocsDefinition = writeBuffer(dbDocsDefinition);

            const { algoliaIndex } = await prisma.$transaction(async (tx) => {
                const writeOriginalDocs = async () => {
                    const docs = await tx.docsV2.findFirst({
                        where: {
                            domain: docsRegistrationInfo.fernDomain,
                            path: "",
                        },
                    });
                    const algoliaIndexCandidate = uuidv4();
                    if (docs) {
                        await tx.docsV2.updateMany({
                            where: {
                                domain: docsRegistrationInfo.fernDomain,
                                path: "",
                            },
                            data: {
                                docsDefinition: bufferDocsDefinition,
                                apiName: docsRegistrationInfo.apiId,
                                orgID: docsRegistrationInfo.orgId,
                                algoliaIndex: docs.algoliaIndex == null ? algoliaIndexCandidate : docs.algoliaIndex,
                            },
                        });
                        return { algoliaIndex: docs.algoliaIndex ?? algoliaIndexCandidate };
                    } else {
                        await tx.docsV2.create({
                            data: {
                                docsDefinition: bufferDocsDefinition,
                                domain: docsRegistrationInfo.fernDomain,
                                path: "",
                                apiName: docsRegistrationInfo.apiId,
                                orgID: docsRegistrationInfo.orgId,
                                algoliaIndex: algoliaIndexCandidate,
                            },
                        });
                        return { algoliaIndex: algoliaIndexCandidate };
                    }
                };

                const writeCustomDomainDocs = async (algoliaIndex: string) => {
                    await Promise.all(
                        docsRegistrationInfo.customDomains.map(async (customDomain) => {
                            await tx.docsV2.upsert({
                                where: {
                                    domain_path: {
                                        domain: customDomain.hostname,
                                        path: customDomain.path,
                                    },
                                },
                                create: {
                                    docsDefinition: bufferDocsDefinition,
                                    domain: customDomain.hostname,
                                    path: customDomain.path,
                                    apiName: docsRegistrationInfo.apiId,
                                    orgID: docsRegistrationInfo.orgId,
                                    algoliaIndex,
                                },
                                update: {
                                    docsDefinition: bufferDocsDefinition,
                                    apiName: docsRegistrationInfo.apiId,
                                    orgID: docsRegistrationInfo.orgId,
                                    algoliaIndex,
                                },
                            });
                        })
                    );
                };

                const { algoliaIndex } = await writeOriginalDocs();
                await writeCustomDomainDocs(algoliaIndex);

                return { algoliaIndex };
            });

            const [records] = await Promise.all([
                app.services.algolia.buildRecordsForDocs(dbDocsDefinition),
                app.services.algolia.deleteIndex(algoliaIndex),
            ]);
            await app.services.algolia.indexRecords(algoliaIndex, records);

            // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
            delete DOCS_REGISTRATIONS[req.params.docsRegistrationId];
            return res.send();
        },
    });
}
