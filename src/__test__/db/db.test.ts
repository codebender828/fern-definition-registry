import { updateOrCreateApi } from "../../db/apiDao";
import { FDR_PRISMA_CLIENT } from "../../db/prisma";

beforeAll(async () => {
  await FDR_PRISMA_CLIENT.api.create({
    data: {
      apiId: "dummy-api",
      orgName: "dummy-org",
      clock: 0,
    },
  });
});

afterAll(async () => {
  await FDR_PRISMA_CLIENT.$disconnect();
});

it("create new draft", async () => {
  const response = updateOrCreateApi({
    apiId: "dummy-api",
    orgName: "dummy-org",
  });
  expect((await response).version).toEqual("0.0.1");
});
