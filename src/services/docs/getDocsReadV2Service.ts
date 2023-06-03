import { PrismaClient } from "@prisma/client";
import { S3Utils } from "../../S3Utils";
import { DomainNotRegisteredError } from "../../generated/api/resources/docs/resources/v1/resources/read/errors/DomainNotRegisteredError";
import { ReadService as ReadV2Service } from "../../generated/api/resources/docs/resources/v2/resources/read/service/ReadService";
import { readBuffer } from "../../serdeUtils";
import { getDocsDefinition, getDocsForDomain, parseDocsDbDefinition } from "./getDocsReadService";

const DOCS_DOMAIN_REGX = /^([^.\s]+)/;

export function getDocsReadV2Service(prisma: PrismaClient, s3Utils: S3Utils): ReadV2Service {
    return new ReadV2Service({
        getDocsForUrl: async (req, res) => {
            const parsedUrl = new URL(req.body.url);
            const possibleDocs = await prisma.docsV2.findMany({
                where: {
                    domain: parsedUrl.hostname,
                },
            });
            const docsDomain = possibleDocs.find((registeredDocs) => {
                return parsedUrl.pathname.startsWith(registeredDocs.path);
            });
            if (docsDomain != null) {
                const docsDefinitionJson = readBuffer(docsDomain.docsDefinition);
                const parsedDocsDbDefinition = await parseDocsDbDefinition(docsDefinitionJson);
                return res.send({
                    baseUrl: `https://${docsDomain.domain}${docsDomain.path}`,
                    definition: await getDocsDefinition({ parsedDocsDbDefinition, prisma, s3Utils }),
                });
            } else {
                // delegate to V1
                const v1Domain = parsedUrl.hostname.match(DOCS_DOMAIN_REGX)?.[1];
                if (v1Domain == null) {
                    throw new DomainNotRegisteredError();
                }
                return res.send({
                    baseUrl: `https://${parsedUrl}`,
                    definition: await getDocsForDomain({ domain: v1Domain, prisma, s3Utils }),
                });
            }
        },
    });
}
