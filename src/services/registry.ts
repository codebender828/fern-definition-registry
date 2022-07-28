import { DefinitionRegistryService } from "@fern-fern/fern-definition-registry-api-server/services";
import { updateOrCreateApi } from "src/db/apiDao";

export const registryService = DefinitionRegistryService.expressMiddleware({
  draft: async (request) => {
    const response = await updateOrCreateApi({
      apiId: request.apiName,
      orgName: request.organization,
    });
    return {
      ok: true,
      body: {
        apiVersion: `0.0.${response.version}`,
        taskIds: [],
      },
    };
  },
  promote: () => {
    throw new Error("Function not implemented.");
  },
  release: () => {
    throw new Error("Function not implemented.");
  },
  getVersions: () => {
    throw new Error("Function not implemented.");
  },
});
