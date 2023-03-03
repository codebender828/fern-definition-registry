import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";
import { AuthUtils } from "../AuthUtils";
import { ApiDoesNotExistError, DeploymentInfo, EnvironmentDoesNotExistError, EnvironmentId } from "../generated/api";
import { RegistryService } from "../generated/api/resources/registry/service/RegistryService";
import * as FernSerializers from "../generated/serialization";

export function getRegistryService(prisma: PrismaClient, authUtils: AuthUtils): RegistryService {
    return new RegistryService({
        async getApiMetadata(req, res) {
            await authUtils.checkUserBelongsToOrg({
                authHeader: req.headers.authorization,
                orgId: req.params.organizationId,
            });
            const api = await prisma.apis.findUnique({
                where: {
                    orgId_apiId: {
                        apiId: req.params.apiId,
                        orgId: req.params.organizationId,
                    },
                },
                select: {
                    ApiDefinitions: {
                        distinct: "environmentId",
                        orderBy: {
                            createdAt: "desc",
                        },
                        select: {
                            environmentId: true,
                            createdAt: true,
                        },
                    },
                    apiId: true,
                    description: true,
                    image_info: true,
                    orgId: true,
                    name: true,
                },
            });
            if (api == null) {
                throw new ApiDoesNotExistError();
            }

            const environments: Record<EnvironmentId, DeploymentInfo> = {};
            api.ApiDefinitions.forEach((apiDefinitionForEnvironment) => {
                if (apiDefinitionForEnvironment.environmentId == null) {
                    return;
                }
                environments[apiDefinitionForEnvironment.environmentId] = {
                    registrationTime: apiDefinitionForEnvironment.createdAt,
                };
            });

            await res.send({
                id: api.apiId,
                name: api.name,
                description: api.description ?? undefined,
                image:
                    api.image_info != null
                        ? await FernSerializers.ApiImage.parseOrThrow(JSON.parse(api.image_info.toString()))
                        : undefined,
                environments,
            });
        },
        async getAllApiMetadata(req, res) {
            await authUtils.checkUserBelongsToOrg({
                authHeader: req.headers.authorization,
                orgId: req.params.organizationId,
            });
            const apis = await prisma.apis.findMany({
                where: {
                    orgId: req.params.organizationId,
                },
                distinct: "apiId",
                select: {
                    ApiDefinitions: {
                        distinct: "environmentId",
                        orderBy: {
                            createdAt: "desc",
                        },
                        select: {
                            environmentId: true,
                            createdAt: true,
                        },
                    },
                    apiId: true,
                    description: true,
                    image_info: true,
                    orgId: true,
                    name: true,
                },
            });
            const apiMetadatas = await Promise.all(
                apis.map(async (api) => {
                    const environments: Record<EnvironmentId, DeploymentInfo> = {};
                    api.ApiDefinitions.forEach((apiDefinitionForEnvironment) => {
                        if (apiDefinitionForEnvironment.environmentId == null) {
                            return;
                        }
                        environments[apiDefinitionForEnvironment.environmentId] = {
                            registrationTime: apiDefinitionForEnvironment.createdAt,
                        };
                    });
                    return {
                        id: api.apiId,
                        name: api.name,
                        description: api.description ?? undefined,
                        image:
                            api.image_info != null
                                ? await FernSerializers.ApiImage.parseOrThrow(JSON.parse(api.image_info.toString()))
                                : undefined,
                        environments,
                    };
                })
            );
            await res.send({
                apis: apiMetadatas,
            });
        },
        async getApiDefinitionForEnvironment(req, res) {
            await authUtils.checkUserBelongsToOrg({
                authHeader: req.headers.authorization,
                orgId: req.params.organizationId,
            });
            const apiDefinition = await prisma.apiDefinitions.findFirst({
                where: {
                    apiId: req.params.apiId,
                    environmentId: req.params.environment,
                },
                orderBy: {
                    createdAt: "desc",
                },
                take: 1,
            });
            if (apiDefinition == null) {
                throw new ApiDoesNotExistError();
            }
            const rawApiDefinition = JSON.parse(apiDefinition.definition.toString());
            const parsedApiDefinition = await FernSerializers.ApiDefinition.parseOrThrow(rawApiDefinition);
            res.send(parsedApiDefinition);
        },
        async getLatestApiDefinition(req, res) {
            await authUtils.checkUserBelongsToOrg({
                authHeader: req.headers.authorization,
                orgId: req.params.organizationId,
            });
            await authUtils.checkUserBelongsToOrg({
                authHeader: req.headers.authorization,
                orgId: req.params.organizationId,
            });
            const apiDefinition = await prisma.apiDefinitions.findFirst({
                where: {
                    apiId: req.params.apiId,
                    environmentId: null,
                },
                orderBy: {
                    createdAt: "desc",
                },
                take: 1,
            });
            if (apiDefinition == null) {
                throw new ApiDoesNotExistError();
            }
            const rawApiDefinition = JSON.parse(apiDefinition.definition.toString());
            const parsedApiDefinition = await FernSerializers.ApiDefinition.parseOrThrow(rawApiDefinition);
            res.send(parsedApiDefinition);
        },
        async registerApi(req, res) {
            await authUtils.checkUserBelongsToOrg({
                authHeader: req.headers.authorization,
                orgId: req.params.organizationId,
            });
            if (req.body.environmentId != null) {
                const environment = await prisma.environments.findUnique({
                    where: {
                        orgId_environmentId: {
                            orgId: req.params.organizationId,
                            environmentId: req.body.environmentId,
                        },
                    },
                });
                if (environment == null) {
                    throw new EnvironmentDoesNotExistError();
                }
            }

            const api = await prisma.apis.findUnique({
                where: {
                    orgId_apiId: {
                        apiId: req.params.apiId,
                        orgId: req.params.organizationId,
                    },
                },
            });
            if (api === null) {
                await prisma.apis.create({
                    data: {
                        apiId: req.params.apiId,
                        orgId: req.params.organizationId,
                    },
                });
            }

            const apiDefinitionId = uuidv4();
            const jsonApiDefinition = await FernSerializers.ApiDefinition.jsonOrThrow(req.body.apiDefinition);
            await prisma.apiDefinitions.create({
                data: {
                    apiDefinitionId,
                    apiId: req.params.apiId,
                    orgId: req.params.organizationId,
                    definition: Buffer.from(JSON.stringify(jsonApiDefinition), "utf-8"),
                    environmentId: req.body.environmentId,
                },
            });

            await res.send();
        },
        async updateApiMetadata(req, res) {
            await authUtils.checkUserBelongsToOrg({
                authHeader: req.headers.authorization,
                orgId: req.params.organizationId,
            });

            const jsonImageInfo =
                req.body.image != null ? await FernSerializers.ApiImage.jsonOrThrow(req.body.image) : undefined;

            await prisma.apis.update({
                data: {
                    description: req.body.description,
                    name: req.body.name,
                    image_info: jsonImageInfo != null ? Buffer.from(JSON.stringify(jsonImageInfo), "utf-8") : undefined,
                },
                where: {
                    orgId_apiId: {
                        orgId: req.params.organizationId,
                        apiId: req.params.apiId,
                    },
                },
            });
            await res.send();
        },
        async getLogoUploadS3Url() {
            throw new Error("Unimplemented");
        },
    });
}
