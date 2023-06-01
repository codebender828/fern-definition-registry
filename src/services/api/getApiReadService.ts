import { PrismaClient } from "@prisma/client";
import * as FernRegistryApiDb from "../../generated/api/resources/api/resources/v1/resources/db";
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
            const parsedApiDefinition = await convertDbApiDefinitionToRead(apiDefinition.definition);
            return res.send(transformApiDefinitionForReading(parsedApiDefinition));
        },
    });
}

export async function convertDbApiDefinitionToRead(buffer: Buffer): Promise<FernRegistryApiDb.DbApiDefinition> {
    const apiDefinitionJson = readBuffer(buffer);
    return await FernSerializers.api.v1.db.DbApiDefinition.parseOrThrow(apiDefinitionJson);
}
