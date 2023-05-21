import { PrismaClient } from "@prisma/client";
import express from "express";
import http from "http";
import { AuthUtils } from "../../AuthUtils";
import { register } from "../../generated";
import { getReadApiService } from "../../services/api/getApiReadService";
import { getDocsReadService } from "../../services/docs/getDocsReadService";
import { getDocsWriteService } from "../../services/getDocsWriteService";
import { getRegisterApiService } from "../../services/getRegisterApiService";
import { FernRegistry, FernRegistryClient } from "../generated";

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
        docs: {
            v1: {
                read: getDocsReadService(prisma),
                write: getDocsWriteService(prisma, authUtils),
            },
        },
        api: {
            v1: {
                read: getReadApiService(prisma),
                register: getRegisterApiService(prisma, authUtils),
            },
        },
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

const EMPTY_REGISTER_API_DEFINITION: FernRegistry.api.v1.register.ApiDefinition = {
    rootPackage: {
        endpoints: [],
        types: [],
        subpackages: [],
    },
    subpackages: {},
    types: {},
};

const MOCK_REGISTER_API_DEFINITION: FernRegistry.api.v1.register.ApiDefinition = {
    rootPackage: {
        endpoints: [
            {
                id: "dummy",
                method: "POST",
                path: {
                    parts: [{ type: "literal", value: "dummy" }],
                    pathParameters: [],
                },
                headers: [],
                queryParameters: [],
                examples: [],
            },
        ],
        types: [],
        subpackages: [],
    },
    subpackages: {},
    types: {},
};

it("definition register", async () => {
    // register empty definition
    const emptyDefinitionRegisterResponse = await CLIENT.api.v1.register.registerApiDefinition({
        orgId: "fern",
        apiId: "api",
        definition: EMPTY_REGISTER_API_DEFINITION,
    });
    console.log(`Registered empty definition. Received ${emptyDefinitionRegisterResponse.apiDefinitionId}`);
    // load empty definition
    const registeredEmptyDefinition = await CLIENT.api.v1.read.getApi(emptyDefinitionRegisterResponse.apiDefinitionId);
    // assert definitions are equal
    expect(JSON.stringify(registeredEmptyDefinition.types)).toEqual(
        JSON.stringify(EMPTY_REGISTER_API_DEFINITION.types)
    );
    expect(JSON.stringify(registeredEmptyDefinition.subpackages)).toEqual(
        JSON.stringify(EMPTY_REGISTER_API_DEFINITION.subpackages)
    );
    expect(JSON.stringify(registeredEmptyDefinition.rootPackage)).toEqual(
        JSON.stringify(EMPTY_REGISTER_API_DEFINITION.rootPackage)
    );

    //register updated definition
    const updatedDefinitionRegisterResponse = await CLIENT.api.v1.register.registerApiDefinition({
        orgId: "fern",
        apiId: "api",
        definition: MOCK_REGISTER_API_DEFINITION,
    });
    // load updated definition
    const updatedDefinition = await CLIENT.api.v1.read.getApi(updatedDefinitionRegisterResponse.apiDefinitionId);
    // assert definitions equal
    expect(JSON.stringify(updatedDefinition.types)).toEqual(JSON.stringify(MOCK_REGISTER_API_DEFINITION.types));
    expect(JSON.stringify(updatedDefinition.subpackages)).toEqual(
        JSON.stringify(MOCK_REGISTER_API_DEFINITION.subpackages)
    );
    expect(JSON.stringify(updatedDefinition.rootPackage)).toEqual(
        JSON.stringify(MOCK_REGISTER_API_DEFINITION.rootPackage)
    );
});

const WRITE_DOCS_REGISTER_DEFINITION: FernRegistry.docs.v1.write.DocsDefinition = {
    pages: {},
    config: {
        navigation: {
            items: [],
        },
    },
};

const READ_DOCS_REGISTER_DEFINITION: FernRegistry.docs.v1.read.DocsDefinition = {
    apis: {},
    pages: {},
    config: {
        navigation: {
            items: [],
        },
    },
};

it("docs register", async () => {
    // register docs
    await CLIENT.docs.v1.write.registerDocs({
        docsDefinition: WRITE_DOCS_REGISTER_DEFINITION,
        orgId: "fern",
        domain: "docs.fern.com",
    });
    // load docs
    const docs = await CLIENT.docs.v1.read.getDocsForDomain({
        domain: "docs.fern.com",
    });
    // assert docs are equal
    expect(docs).toEqual(READ_DOCS_REGISTER_DEFINITION);

    //re-register docs
    await CLIENT.docs.v1.write.registerDocs({
        docsDefinition: WRITE_DOCS_REGISTER_DEFINITION,
        orgId: "fern",
        domain: "docs.fern.com",
    });
});
