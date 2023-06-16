import { PrismaClient } from "@prisma/client";
import { FernRegistry } from "../../generated";
import { DomainNotRegisteredError } from "../../generated/api/resources/docs/resources/v1/resources/read";
import { ReadService } from "../../generated/api/resources/docs/resources/v1/resources/read/service/ReadService";
import * as FernSerializers from "../../generated/serialization";
import { S3Utils } from "../../S3Utils";
import { readBuffer } from "../../serdeUtils";
import { convertDbApiDefinitionToRead } from "../api/getApiReadService";

export function getDocsReadService(prisma: PrismaClient, s3Utils: S3Utils): ReadService {
    return new ReadService({
        getDocsForDomainLegacy: async (req, res) => {
            return res.send(await getDocsForDomain({ domain: req.params.domain, prisma, s3Utils }));
        },
        getDocsForDomain: async (req, res) => {
            return res.send(await getDocsForDomain({ domain: req.body.domain, prisma, s3Utils }));
        },
    });
}

export async function getDocsForDomain({
    domain,
    prisma,
    s3Utils,
}: {
    domain: string;
    prisma: PrismaClient;
    s3Utils: S3Utils;
}): Promise<FernSerializers.docs.v1.read.DocsDefinition.Raw> {
    console.debug(__filename, "Finding first docs for domain", domain);
    const docs = await prisma.docs.findFirst({
        where: {
            url: domain,
        },
    });
    console.debug(__filename, "Found first docs for domain", domain);
    if (docs == null) {
        throw new DomainNotRegisteredError();
    }
    console.debug(__filename, "Reading buffer for domain", domain);
    const docsDbDefinition = readBuffer(docs.docsDefinition) as FernSerializers.docs.v1.db.DocsDefinitionDb.Raw;
    console.debug(__filename, "Read buffer for domain", domain);

    return getDocsDefinition({ docsDbDefinition, prisma, s3Utils });
}

export async function getDocsDefinition({
    docsDbDefinition,
    prisma,
    s3Utils,
}: {
    docsDbDefinition: FernSerializers.docs.v1.db.DocsDefinitionDb.Raw;
    prisma: PrismaClient;
    s3Utils: S3Utils;
}): Promise<FernSerializers.docs.v1.read.DocsDefinition.Raw> {
    console.debug(__filename, "Finding api definitions");
    const apiDefinitions = await prisma.apiDefinitionsV2.findMany({
        where: {
            apiDefinitionId: {
                in: Array.from(docsDbDefinition.referencedApis),
            },
        },
    });
    console.debug(__filename, "Found api definitions");
    return {
        config: {
            navigation: docsDbDefinition.config.navigation,
            logo: docsDbDefinition.config.logo,
            colors: docsDbDefinition.config.colors,
            navbarLinks: docsDbDefinition.config.navbarLinks ?? [],
            title: docsDbDefinition.config.title,
            favicon: docsDbDefinition.config.favicon,
        },
        apis: Object.fromEntries(
            await Promise.all(
                apiDefinitions.map(async (apiDefinition) => {
                    console.debug(__filename, "Converting API Definition to 'read'", apiDefinition.apiDefinitionId);
                    const parsedApiDefinition = await convertDbApiDefinitionToRead(apiDefinition.definition);
                    console.debug(__filename, "Converted API Definition to 'read'", apiDefinition.apiDefinitionId);
                    return [apiDefinition.apiDefinitionId, parsedApiDefinition];
                })
            )
        ),
        files: Object.fromEntries(
            await Promise.all(
                Object.entries(docsDbDefinition.files).map(async ([fileId, fileDbInfo]) => {
                    console.debug(__filename, "Gettings S3 download URL", fileId);
                    const s3DownloadUrl = await s3Utils.getPresignedDownloadUrl({ key: fileDbInfo.s3Key });
                    console.debug(__filename, "Gettings S3 download URL", fileId);
                    return [fileId, s3DownloadUrl];
                })
            )
        ),
        pages: docsDbDefinition.pages,
    };
}

export function parseDocsDbDefinition(dbValue: unknown): Promise<FernRegistry.docs.v1.db.DocsDefinitionDb> {
    if (dbValue != null && typeof dbValue === "object" && !("type" in dbValue)) {
        return FernSerializers.docs.v1.db.DocsDefinitionDb.parseOrThrow({
            ...dbValue,
            type: "v1",
        });
    }
    return FernSerializers.docs.v1.db.DocsDefinitionDb.parseOrThrow(dbValue);
}
