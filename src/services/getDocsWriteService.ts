import { PrismaClient } from "@prisma/client";
import { AuthUtils } from "src/AuthUtils";
import { WriteService } from "src/generated/api/resources/docs/resources/v1/resources/write/service/WriteService";
import { writeBuffer } from "src/serdeUtils";
import * as FernSerializers from "../generated/serialization";
import { transformDocsDefinitionForReading } from "./transformDocsDefinitionForReading";

export function getDocsWriteService(prisma: PrismaClient, authUtils: AuthUtils): WriteService {
    return new WriteService({
        registerDocs: async (req, res) => {
            await authUtils.checkUserBelongsToOrg({ authHeader: req.headers.authorization, orgId: req.body.orgId });
            const readDocsDefinition = transformDocsDefinitionForReading(req.body.docsDefinition);
            const jsonDocsDefinition = await FernSerializers.docs.v1.read.DocsDefinition.jsonOrThrow(
                readDocsDefinition
            );
            await prisma.docs.upsert({
                create: {
                    url: req.body.domain,
                    docsDefinition: writeBuffer(jsonDocsDefinition),
                },
                update: {
                    docsDefinition: writeBuffer(jsonDocsDefinition),
                },
                where: {
                    url: req.body.domain,
                },
            });
            return res.send();
        },
    });
}
