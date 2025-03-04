import { PrismaClient } from "@prisma/client";
import { DocsRegistrationInfo } from "../../controllers/docs/getDocsWriteV2Service";
import type { FernRegistry } from "../../generated";
import { writeBuffer } from "../../util/serde";

export interface DatabaseService {
    readonly prisma: PrismaClient;

    getApiDefinition(id: string): Promise<FernRegistry.api.v1.db.DbApiDefinition | null>;

    markIndexForDeletion(indexId: string): Promise<void>;

    updateDocsDefinition({
        algoliaIndex,
        docsRegistrationInfo,
        dbDocsDefinition,
    }: {
        algoliaIndex: string;
        docsRegistrationInfo: DocsRegistrationInfo;
        dbDocsDefinition: FernRegistry.docs.v1.db.DocsDefinitionDb.V2;
    }): Promise<void>;
}

export class DatabaseServiceImpl implements DatabaseService {
    public readonly prisma: PrismaClient;

    public constructor() {
        this.prisma = new PrismaClient({
            log: ["info", "warn", "error"],
        });
    }

    public async getApiDefinition(id: string) {
        const record = await this.prisma.apiDefinitionsV2.findFirst({
            where: {
                apiDefinitionId: id,
            },
        });
        if (!record) return null;
        try {
            return JSON.parse(record.definition.toString()) as FernRegistry.api.v1.db.DbApiDefinition;
        } catch {
            return null;
        }
    }

    public async markIndexForDeletion(indexId: string) {
        await this.prisma.overwrittenAlgoliaIndex.create({
            data: { indexId },
        });
    }

    public async updateDocsDefinition({
        algoliaIndex,
        docsRegistrationInfo,
        dbDocsDefinition,
    }: {
        algoliaIndex: string;
        docsRegistrationInfo: DocsRegistrationInfo;
        dbDocsDefinition: FernRegistry.docs.v1.db.DocsDefinitionDb.V2;
    }): Promise<void> {
        const prevAlgoliaIndex = await this.prisma.$transaction(async (tx) => {
            const bufferDocsDefinition = writeBuffer(dbDocsDefinition);

            // Step 1: Load Previous Docs
            const previousDocs = await tx.docsV2.findFirst({
                where: {
                    domain: docsRegistrationInfo.fernDomain,
                    path: "",
                },
            });

            // Step 2: Upsert the fern docs domain url with the docs definition + algolia index
            await tx.docsV2.upsert({
                where: {
                    domain_path: {
                        domain: docsRegistrationInfo.fernDomain,
                        path: "",
                    },
                },
                update: {
                    docsDefinition: bufferDocsDefinition,
                    apiName: docsRegistrationInfo.apiId,
                    orgID: docsRegistrationInfo.orgId,
                    algoliaIndex,
                },
                create: {
                    docsDefinition: bufferDocsDefinition,
                    domain: docsRegistrationInfo.fernDomain,
                    path: "",
                    apiName: docsRegistrationInfo.apiId,
                    orgID: docsRegistrationInfo.orgId,
                    algoliaIndex,
                },
            });

            // Step 2: Upsert custom domains with the docs definition + algolia index
            for (const customDomain of docsRegistrationInfo.customDomains) {
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
            }

            return previousDocs?.algoliaIndex;
        });

        if (prevAlgoliaIndex != null) {
            await this.markIndexForDeletion(prevAlgoliaIndex);
        }
    }
}
