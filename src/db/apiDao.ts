import { FDR_PRISMA_CLIENT } from "./prisma";

const SEED_CLOCK = 0;

export namespace UpdateOrCreateApi {
  export interface Request {
    apiId: string;
    orgName: string;
  }
  export interface Response {
    version: string;
  }
}

export async function updateOrCreateApi(
  request: UpdateOrCreateApi.Request
): Promise<UpdateOrCreateApi.Response> {
  const apiRow = await FDR_PRISMA_CLIENT.api.findFirst({
    where: {
      apiId: request.apiId,
      orgName: request.orgName,
    },
  });
  if (apiRow == null) {
    await FDR_PRISMA_CLIENT.api.create({
      data: {
        apiId: request.apiId,
        orgName: request.orgName,
        clock: SEED_CLOCK,
      },
    });
    return { version: `0.0.${SEED_CLOCK}` };
  }
  const updatedClock = apiRow.clock + 1;
  await FDR_PRISMA_CLIENT.api.update({
    where: {
      apiId_orgName: {
        apiId: request.apiId,
        orgName: request.orgName,
      },
    },
    data: {
      apiId: request.apiId,
      orgName: request.orgName,
      clock: updatedClock,
    },
  });
  return { version: `0.0.${updatedClock}` };
}
