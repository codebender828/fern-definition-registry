import { PrismaClient } from "@prisma/client";
import { AuthUtils } from "../AuthUtils";
import { EnvironmentService } from "../generated/api/resources/environment/service/EnvironmentService";

export function getEnvironmentService(prisma: PrismaClient, authUtils: AuthUtils): EnvironmentService {
    return new EnvironmentService({
        getAll: async (req, res) => {
            await authUtils.checkUserBelongsToOrg({
                authHeader: req.headers.authorization,
                orgId: req.params.organizationId,
            });
            const environments = await prisma.environments.findMany({ where: { orgId: req.params.organizationId } });
            await res.send({
                environments: environments.map((environment) => {
                    return {
                        id: environment.environmentId,
                        description: environment.description ?? undefined,
                    };
                }),
            });
        },
        create: async (req, res) => {
            await authUtils.checkUserBelongsToOrg({
                authHeader: req.headers.authorization,
                orgId: req.params.organizationId,
            });
            await prisma.environments.create({
                data: {
                    environmentId: req.body.id,
                    orgId: req.params.organizationId,
                    description: req.body.description,
                },
            });
            await res.send();
        },
        update: async (req, res) => {
            await authUtils.checkUserBelongsToOrg({
                authHeader: req.headers.authorization,
                orgId: req.params.organizationId,
            });
            await prisma.environments.update({
                where: {
                    orgId_environmentId: {
                        orgId: req.params.organizationId,
                        environmentId: req.params.environmentId,
                    },
                },
                data: {
                    description: req.body.description,
                },
            });
            await res.send();
        },
        delete: async (req, res) => {
            await authUtils.checkUserBelongsToOrg({
                authHeader: req.headers.authorization,
                orgId: req.params.organizationId,
            });
            await prisma.environments.delete({
                where: {
                    orgId_environmentId: {
                        environmentId: req.params.environmentId,
                        orgId: req.params.organizationId,
                    },
                },
            });
            await res.send();
        },
    });
}
