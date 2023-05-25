import HTTPSnippet from "httpsnippet";
import { kebabCase } from "lodash";
import { FernRegistry } from "../../generated";

export function transformApiDefinitionForReading(
    writeShape: FernRegistry.api.v1.register.ApiDefinition,
    id: FernRegistry.ApiDefinitionId
): WithoutQuestionMarks<FernRegistry.api.v1.read.ApiDefinition> {
    const subpackageToParent: Record<
        FernRegistry.api.v1.register.SubpackageId,
        FernRegistry.api.v1.register.SubpackageId
    > = {};
    for (const [parentId, parentContents] of entries(writeShape.subpackages)) {
        for (const subpackageId of parentContents.subpackages) {
            subpackageToParent[subpackageId] = parentId;
        }
    }

    return {
        id,
        rootPackage: {
            endpoints: writeShape.rootPackage.endpoints.map((endpoint) => transformEndpoint({ writeShape: endpoint })),
            subpackages: writeShape.rootPackage.subpackages,
            types: writeShape.rootPackage.types,
        },
        types: writeShape.types,
        subpackages: entries(writeShape.subpackages).reduce<
            Record<FernRegistry.api.v1.read.SubpackageId, FernRegistry.api.v1.read.ApiDefinitionSubpackage>
        >((subpackages, [subpackageId, subpackage]) => {
            subpackages[subpackageId] = transformSubpackage({
                writeShape: subpackage,
                id: subpackageId,
                subpackageToParent,
            });
            return subpackages;
        }, {}),
    };
}

function transformSubpackage({
    writeShape,
    id,
    subpackageToParent,
}: {
    writeShape: FernRegistry.api.v1.register.ApiDefinitionSubpackage;
    id: FernRegistry.api.v1.register.SubpackageId;
    subpackageToParent: Record<FernRegistry.api.v1.register.SubpackageId, FernRegistry.api.v1.register.SubpackageId>;
}): WithoutQuestionMarks<FernRegistry.api.v1.read.ApiDefinitionSubpackage> {
    const parent = subpackageToParent[id];
    return {
        subpackageId: id,
        parent: parent,
        name: writeShape.name,
        endpoints: writeShape.endpoints.map((endpoint) => transformEndpoint({ writeShape: endpoint })),
        types: writeShape.types,
        subpackages: writeShape.subpackages,
        urlSlug: kebabCase(writeShape.name),
    };
}

function transformEndpoint({
    writeShape,
}: {
    writeShape: FernRegistry.api.v1.register.EndpointDefinition;
}): WithoutQuestionMarks<FernRegistry.api.v1.read.EndpointDefinition> {
    return {
        urlSlug: kebabCase(writeShape.name),
        method: writeShape.method,
        id: writeShape.id,
        name: writeShape.name,
        path: writeShape.path,
        queryParameters: writeShape.queryParameters,
        headers: writeShape.headers,
        request: writeShape.request,
        response: writeShape.response,
        examples: writeShape.examples.map((example) =>
            transformEndpointEndpointCall({
                writeShape: example,
                endpointDefinition: writeShape,
            })
        ),
        description: writeShape.description,
    };
}

function transformEndpointEndpointCall({
    writeShape,
    endpointDefinition,
}: {
    writeShape: FernRegistry.api.v1.register.ExampleEndpointCall;
    endpointDefinition: FernRegistry.api.v1.register.EndpointDefinition;
}): WithoutQuestionMarks<FernRegistry.api.v1.read.ExampleEndpointCall> {
    const httpSnippet = createHttpSnippet(endpointDefinition, writeShape);

    return {
        description: writeShape.description,
        path: writeShape.path,
        pathParameters: writeShape.pathParameters,
        queryParameters: writeShape.queryParameters,
        headers: writeShape.headers,
        requestBody: writeShape.requestBody,
        responseStatusCode: writeShape.responseStatusCode,
        responseBody: writeShape.responseBody,
        codeExamples: {
            nodeAxios: convertHttpSnippet(httpSnippet, "node", "axios"),
        },
    };
}

function createHttpSnippet(
    endpointDefinition: FernRegistry.api.v1.register.EndpointDefinition,
    writeShape: FernRegistry.api.v1.register.ExampleEndpointCall
) {
    return new HTTPSnippet({
        method: endpointDefinition.method,
        url: writeShape.path,
        postData: {
            mimeType: "application/json",
            text: writeShape.requestBody != null ? JSON.stringify(writeShape.requestBody) : "",
        },
        headers: [],
        cookies: [],
        httpVersion: "2.1",
        queryString: [],
        headersSize: -1,
        bodySize: -1,
    });
}

function convertHttpSnippet(
    httpSnippet: HTTPSnippet,
    target: string,
    client?: string,
    options?: HTTPSnippet.Options
): string {
    const example = httpSnippet.convert(target, client, options);
    if (example === false) {
        throw new Error(`Failed to create ${target} example`);
    }
    return example;
}

type WithoutQuestionMarks<T> = {
    [K in keyof Required<T>]: undefined extends T[K] ? T[K] | undefined : T[K];
};

function entries<T extends object>(obj: T): [keyof T, T[keyof T]][] {
    return Object.entries(obj) as [keyof T, T[keyof T]][];
}
