import { PrismaClient } from "@prisma/client";
import { DomainNotRegisteredError } from "../../generated/api/resources/docs/resources/v1/resources/read/errors/DomainNotRegisteredError";
import { ReadService as ReadV2Service } from "../../generated/api/resources/docs/resources/v2/resources/read/service/ReadService";
import { getParsedUrl } from "../../getParsedUrl";
import { S3Utils } from "../../S3Utils";
import { readBuffer } from "../../serdeUtils";
import { getDocsDefinition, getDocsForDomain, parseDocsDbDefinition } from "./getDocsReadService";

const DOCS_DOMAIN_REGX = /^([^.\s]+)/;

export class DocsReadV2Service {
    constructor(private readonly prisma: PrismaClient, private readonly s3Utils: S3Utils) {}

    public async getDocsForUrl(url: string) {
        const parsedUrl = getParsedUrl(url);
        console.debug(__filename, "Loading possible docs");
        const possibleDocs = await this.prisma.docsV2.findMany({
            where: {
                domain: parsedUrl.hostname,
            },
            orderBy: {
                updatedTime: "desc",
            },
        });
        console.debug(__filename, "Loaded possible docs");
        const docsDomain = possibleDocs.find((registeredDocs) => {
            return parsedUrl.pathname.startsWith(registeredDocs.path);
        });
        if (docsDomain != null) {
            console.debug(__filename, "Reading buffer for docsDomain.docsDefinition");
            const docsDefinitionJson = readBuffer(docsDomain.docsDefinition);
            console.debug(__filename, "Read buffer for docsDomain.docsDefinition");
            console.debug(__filename, "Parsing docsDefinitionJson");
            const parsedDocsDbDefinition = await parseDocsDbDefinition(docsDefinitionJson);
            console.debug(__filename, "Parsed docsDefinitionJson");
            return res.send({
                baseUrl: {
                    domain: docsDomain.domain,
                    basePath: docsDomain.path === "" ? undefined : docsDomain.path,
                },
                definition: await getDocsDefinition({ parsedDocsDbDefinition,
                     prisma: this.prisma, s3Utils: this.s3Utils }),
            });
        } else {
            // delegate to V1
            const v1Domain = parsedUrl.hostname.match(DOCS_DOMAIN_REGX)?.[1];
            if (v1Domain == null) {
                throw new DomainNotRegisteredError();
            }
            return res.send({
                baseUrl: {
                    domain: parsedUrl.hostname,
                    basePath: undefined,
                },
                definition: await getDocsForDomain({ domain: v1Domain, prisma: this.prisma, s3Utils: this.s3Utils }),
            });
        }
    },
}


export function getDocsReadV2Service(prisma: PrismaClient, s3Utils: S3Utils): ReadV2Service {
    return new ReadV2Service({
        getDocsForUrl: async (req, res) => {
            const parsedUrl = getParsedUrl(req.body.url);
            console.debug(__filename, "Loading possible docs");
            const possibleDocs = await prisma.docsV2.findMany({
                where: {
                    domain: parsedUrl.hostname,
                },
                orderBy: {
                    updatedTime: "desc",
                },
            });
            console.debug(__filename, "Loaded possible docs");
            const docsDomain = possibleDocs.find((registeredDocs) => {
                return parsedUrl.pathname.startsWith(registeredDocs.path);
            });
            if (docsDomain != null) {
                console.debug(__filename, "Reading buffer for docsDomain.docsDefinition");
                const docsDefinitionJson = readBuffer(docsDomain.docsDefinition);
                console.debug(__filename, "Read buffer for docsDomain.docsDefinition");
                console.debug(__filename, "Parsing docsDefinitionJson");
                const parsedDocsDbDefinition = await parseDocsDbDefinition(docsDefinitionJson);
                console.debug(__filename, "Parsed docsDefinitionJson");
                return res.send({
                    baseUrl: {
                        domain: docsDomain.domain,
                        basePath: docsDomain.path === "" ? undefined : docsDomain.path,
                    },
                    definition: await getDocsDefinition({ parsedDocsDbDefinition, prisma, s3Utils }),
                });
            } else {
                // delegate to V1
                const v1Domain = parsedUrl.hostname.match(DOCS_DOMAIN_REGX)?.[1];
                if (v1Domain == null) {
                    throw new DomainNotRegisteredError();
                }
                return res.send({
                    baseUrl: {
                        domain: parsedUrl.hostname,
                        basePath: undefined,
                    },
                    definition: await getDocsForDomain({ domain: v1Domain, prisma, s3Utils }),
                });
            }
        },
    });
}
