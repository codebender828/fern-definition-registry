import { PrismaClient } from "@prisma/client";
import express from "express";
import http from "http";
import { AuthUtils } from "../../AuthUtils";
import { register } from "../../generated";
import { getEnvironmentService } from "../../services/environment";
import { getRegistryService } from "../../services/registry";
import { FernRegistryClient } from "../generated";

const PORT = 9999;

class MockAuthUtils implements AuthUtils {
    async checkUserBelongsToOrg(): Promise<void> {
        return;
    }
}

const CLIENT = new FernRegistryClient({
    environment: `http://localhost:${PORT}/`,
    token: "dummy",
});

const app = express();
const prisma = new PrismaClient({
    log: ["query", "info", "warn", "error"],
});
let server: http.Server | undefined;

beforeAll(async () => {
    const authUtils = new MockAuthUtils();
    register(app, {
        registry: getRegistryService(prisma, authUtils),
        environment: getEnvironmentService(prisma, authUtils),
    });
    console.log(`Listening for requests on port ${PORT}`);
    server = app.listen(PORT);
});

afterAll(async () => {
    await prisma.$disconnect();
    if (server != null) {
        server.close();
    }
});

it("create environment", async () => {
    const environmentId = await CLIENT.environment.create("fern", {
        name: "Production",
        url: "https://buildwithfern.com/",
    });
    const response = await CLIENT.environment.getAll("fern");
    const containsEnvironment = response.environments.some((env) => {
        return env.id === environmentId;
    });
    expect(containsEnvironment).toEqual(true);
});
