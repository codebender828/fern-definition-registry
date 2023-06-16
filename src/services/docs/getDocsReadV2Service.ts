import { PrismaClient } from "@prisma/client";
import { Response } from "express";
import { DomainNotRegisteredError } from "../../generated/api/resources/docs/resources/v1/resources/read/errors/DomainNotRegisteredError";
import { getParsedUrl } from "../../getParsedUrl";
import { S3Utils } from "../../S3Utils";
import { readBuffer } from "../../serdeUtils";
import { getDocsDefinition, getDocsForDomain, migrateDocsDbDefinition } from "./getDocsReadService";

const DOCS_DOMAIN_REGX = /^([^.\s]+)/;

export class DocsReadV2Service {
    constructor(private readonly prisma: PrismaClient, private readonly s3Utils: S3Utils) {}

    public async getDocsForUrl(url: string, res: Response) {
        const parsedUrl = getParsedUrl(url);
        const possibleDocs = await this.prisma.docsV2.findMany({
            where: {
                domain: parsedUrl.hostname,
            },
            orderBy: {
                updatedTime: "desc",
            },
        });
        const docsDomain = possibleDocs.find((registeredDocs) => {
            return parsedUrl.pathname.startsWith(registeredDocs.path);
        });
        if (docsDomain != null) {
            const docsDbDefinition = migrateDocsDbDefinition(readBuffer(docsDomain.docsDefinition));
            res.send({
                baseUrl: {
                    domain: docsDomain.domain,
                    basePath: docsDomain.path === "" ? undefined : docsDomain.path,
                },
                definition: await getDocsDefinition({
                    docsDbDefinition,
                    prisma: this.prisma,
                    s3Utils: this.s3Utils,
                }),
            });
        } else {
            // delegate to V1
            const v1Domain = parsedUrl.hostname.match(DOCS_DOMAIN_REGX)?.[1];
            if (v1Domain == null) {
                new DomainNotRegisteredError().send(res);
            } else {
                res.send({
                    baseUrl: {
                        domain: parsedUrl.hostname,
                        basePath: undefined,
                    },
                    definition: await getDocsForDomain({
                        domain: v1Domain,
                        prisma: this.prisma,
                        s3Utils: this.s3Utils,
                    }),
                });
            }
        }
    }
}
