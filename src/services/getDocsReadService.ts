import { PrismaClient } from "@prisma/client";
import { DomainNotRegisteredError } from "src/generated/api/resources/docs/resources/v1/resources/read";
import { ReadService } from "../generated/api/resources/docs/resources/v1/resources/read/service/ReadService";
import * as FernSerializers from "../generated/serialization";
import { readBuffer } from "../serdeUtils";

export function getDocsReadService(prisma: PrismaClient): ReadService {
    return new ReadService({
        getDocsForDomain: async (req, res) => {
            const docs = await prisma.docs.findFirst({
                where: {
                    url: req.params.domain,
                },
            });
            if (docs == null) {
                throw new DomainNotRegisteredError();
            }
            const docsDefinitionJson = readBuffer(docs.docsDefinition);
            const parsedDocsDefinition = await FernSerializers.docs.v1.read.DocsDefinition.parseOrThrow(
                docsDefinitionJson
            );
            return res.send(parsedDocsDefinition);
        },
    });
}
