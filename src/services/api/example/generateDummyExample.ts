/* eslint-disable no-case-declarations */
import { assertNever } from "../../../assertNever";
import * as ApiV1Write from "../../../generated/api/resources/api/resources/v1/resources/register";
import { generateExampleFromTypeReference } from "./generateHttpBodyExample";

export function populateApiDefinitionWithExamples(apiDefinition: ApiV1Write.ApiDefinition): ApiV1Write.ApiDefinition {
    for (const endpoint of apiDefinition.rootPackage.endpoints) {
    }
    for (const subPackageId of apiDefinition.rootPackage.subpackages) {
        const subPackage = apiDefinition.subpackages[subPackageId];
        if (subPackage == null) {
            continue;
        }
        subPackage.endpoints;
    }
    return apiDefinition;
}

export function populateEndpointDefinitionWithExamples({
    endpointDefinition,
    apiDefinition,
}: {
    endpointDefinition: ApiV1Write.EndpointDefinition;
    apiDefinition: ApiV1Write.ApiDefinition;
}): ApiV1Write.EndpointDefinition {
    if (endpointDefinition.examples.length > 0) {
        return endpointDefinition;
    }

    const pathParamToTypeReference = Object.fromEntries(
        endpointDefinition.path.pathParameters.map((pathParameter) => {
            return [pathParameter.key, pathParameter.type];
        })
    );
    let examplePath = "";
    for (const pathPart of endpointDefinition.path.parts) {
        switch (pathPart.type) {
            case "literal":
                examplePath = examplePath.length === 0 ? pathPart.value : `${examplePath}/${pathPart.value}`;
                break;
            case "pathParameter":
                const as = pathParamToTypeReference[pathPart.value];
                if (as == null) {
                    throw new Error("Type Reference is missing path parameter");
                }
                const example = generateExampleFromTypeReference(as, getResolveByTypeId(apiDefinition)) as any;
                examplePath = `${examplePath}/${example.toString()}`;
                break;
            default:
                assertNever(pathPart);
        }
    }

    const exampleEndpoint: ApiV1Write.ExampleEndpointCall = {
        path: endpointDefinition.path,
    };
    return {
        ...endpointDefinition,
        examples: [
            {
                headers: {},
                path: {},
                pathParameters: {},
                queryParameters: {},
                requestBody: {},
                responseBody: {},
                responseStatusCode: 200,
            },
        ],
    };
}

function getResolveByTypeId({
    apiDefinition,
}: {
    apiDefinition: ApiV1Write.ApiDefinition;
}): (typeId: ApiV1Write.TypeId) => ApiV1Write.TypeDefinition {
    return (typeId) => {
        const typeDefinition = apiDefinition.types[typeId];
        if (typeDefinition == null) {
            throw new Error(`Failed to find ${typeId}`);
        }
        return typeDefinition;
    };
}
