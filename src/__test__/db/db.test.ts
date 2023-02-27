import { PrismaClient } from "@prisma/client";
import express from "express";
import { AuthUtils } from "src/AuthUtils";
import { register } from "src/generated";
import { getEnvironmentService } from "src/services/environment";
import { getRegistryService } from "src/services/registry";
import { FernRegistryClient } from "../generated";

const PORT = 8080;

class MockAuthUtils implements AuthUtils {
    async checkUserBelongsToOrg(): Promise<void> {
        return;
    }
}

const CLIENT = new FernRegistryClient({
    environment: "https://localhost:8080/",
    token: "dummy",
});

beforeAll(async () => {
    const prisma = new PrismaClient({
        log: ["query", "info", "warn", "error"],
    });
    const authUtils = new MockAuthUtils();
    const app = express();
    register(app, {
        registry: getRegistryService(prisma, authUtils),
        environment: getEnvironmentService(prisma, authUtils),
    });
    console.log(`Listening for requests on port ${PORT}`);
    app.listen(PORT);
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
