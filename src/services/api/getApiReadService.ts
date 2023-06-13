import { PrismaClient } from "@prisma/client";
import * as FernRegistryApiRead from "../../generated/api/resources/api/resources/v1/resources/read";
import { ApiDoesNotExistError } from "../../generated/api/resources/api/resources/v1/resources/read/errors/ApiDoesNotExistError";
import { ReadService } from "../../generated/api/resources/api/resources/v1/resources/read/service/ReadService";
import * as FernSerializers from "../../generated/serialization";
import { readBuffer } from "../../serdeUtils";
import { transformApiDefinitionForReading } from "./dbToReadConversion/transformDbApiDefinitionToRead";

export function getReadApiService(prisma: PrismaClient): ReadService {
    return new ReadService({
        getApi: async (req, res) => {
            const apiDefinition = await prisma.apiDefinitionsV2.findFirst({
                where: {
                    apiDefinitionId: req.params.apiDefinitionId,
                },
            });
            if (apiDefinition == null) {
                throw new ApiDoesNotExistError();
            }
            const readApiDefinition = await convertDbApiDefinitionToRead(apiDefinition.definition);
            return res.send(readApiDefinition);
        },
    });
}

export async function convertDbApiDefinitionToRead(buffer: Buffer): Promise<FernRegistryApiRead.ApiDefinition> {
    console.debug(__filename, "Reading buffer to convert db api definition to read");
    const apiDefinitionJson = readBuffer(buffer);
    console.debug(__filename, "Read buffer to convert db api definition to read");
    console.debug(__filename, "Parsing db api definition");
    const dbApiDefinition = await FernSerializers.api.v1.db.DbApiDefinition.parseOrThrow(apiDefinitionJson);
    console.debug(__filename, "Parsed db api definition");
    return transformApiDefinitionForReading(dbApiDefinition);
}
