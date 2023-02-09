import { PrismaClient } from "@prisma/client";
import { FernRegistry } from "../generated";
import { RegistryService } from "../generated/api/resources/registry/service/RegistryService";

export function getRegistryService(_prisma: PrismaClient): RegistryService {
	return new RegistryService({
		register: () => {
			throw new Error("Not implemented");
		},
		getAllApis: () => {
			return {
				apis: {
					api1: {
						id: "api1",
						latestVersion: "1.0",
					},
				},
			};
		},
		getApiAtVersion: (request) => {
			if (request.params.apiId !== "api1") {
				throw new FernRegistry.ApiDoesNotExistError();
			}
			if (request.params.apiVersion !== "1.0") {
				throw new FernRegistry.ApiVersionDoesNotExistError();
			}
			return {
				id: "api1",
				version: "1.0",
				services: [
					{
						name: "My Service",
						endpoints: [
							{
								path: {
									parts: [FernRegistry.EndpointPathPart.literal("/")],
								},
								request: FernRegistry.TypeReference.primitive(
									FernRegistry.PrimitiveType.string()
								),
								response: FernRegistry.TypeReference.definition(
									FernRegistry.TypeDefinition.object({
										extends: [],
										properties: [
											{
												key: "foo",
												valueType: FernRegistry.TypeReference.primitive(
													FernRegistry.PrimitiveType.string()
												),
											},
										],
									})
								),
							},
						],
					},
				],
				types: {},
			};
		},
	});
}
