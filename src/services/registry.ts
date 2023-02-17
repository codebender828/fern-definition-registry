import { PrismaClient } from "@prisma/client";
import { FernRegistry } from "../generated";
import { RegistryService } from "../generated/api/resources/registry/service/RegistryService";

export function getRegistryService(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _prisma: PrismaClient
): RegistryService {
    return new RegistryService({
        getAllApis: () => {
            return {
                apis: [
                    {
                        id: "api1",
                        deployments: new Set(["staging", "production"]),
                    },
                ],
            };
        },
        getApiForEnvironment: (request) => {
            if (request.params.apiId !== "api1") {
                throw new FernRegistry.ApiDoesNotExistError();
            }
            if (request.params.environment !== "production" && request.params.environment !== "staging") {
                throw new FernRegistry.EnvironmentDoesNotExistError();
            }

            return {
                types: {
                    "type-1": FernRegistry.Type.primitive(FernRegistry.PrimitiveType.string()),
                },
                subpackages: {
                    a: {
                        name: "a",
                        types: ["type-1"],
                        endpoints: [
                            {
                                id: "endpoint-1",
                                displayName: "My Endpoint",
                                docs: "Retrieves the current account balance, based on the authentication that was used to make the request. For a sample request, see this other page",
                                queryParameters: [
                                    {
                                        key: "queryParam1",
                                        type: FernRegistry.Type.primitive(FernRegistry.PrimitiveType.string()),
                                    },
                                    {
                                        key: "queryParam2",
                                        type: FernRegistry.Type.optional({
                                            itemType: FernRegistry.Type.primitive(FernRegistry.PrimitiveType.string()),
                                        }),
                                    },
                                ],
                                path: {
                                    parts: [
                                        FernRegistry.EndpointPathPart.literal("/"),
                                        FernRegistry.EndpointPathPart.pathParameter("test"),
                                    ],
                                    pathParameters: [
                                        {
                                            key: "test",
                                            type: FernRegistry.Type.primitive(FernRegistry.PrimitiveType.integer()),
                                        },
                                    ],
                                },
                                request: FernRegistry.Type.object({
                                    extends: [],
                                    properties: [
                                        {
                                            key: "foo",
                                            valueType: FernRegistry.Type.primitive(FernRegistry.PrimitiveType.string()),
                                        },
                                        {
                                            key: "bar",
                                            valueType: FernRegistry.Type.primitive(FernRegistry.PrimitiveType.string()),
                                        },
                                        {
                                            key: "test",
                                            valueType: FernRegistry.Type.primitive(FernRegistry.PrimitiveType.string()),
                                        },
                                        {
                                            key: "test",
                                            valueType: FernRegistry.Type.optional({
                                                itemType: FernRegistry.Type.primitive(
                                                    FernRegistry.PrimitiveType.string()
                                                ),
                                            }),
                                        },
                                        {
                                            key: "test",
                                            valueType: FernRegistry.Type.map({
                                                keyType: FernRegistry.Type.primitive(
                                                    FernRegistry.PrimitiveType.string()
                                                ),
                                                valueType: FernRegistry.Type.list({
                                                    itemType: FernRegistry.Type.object({
                                                        extends: [],
                                                        properties: [
                                                            {
                                                                key: "foo",
                                                                valueType: FernRegistry.Type.primitive(
                                                                    FernRegistry.PrimitiveType.string()
                                                                ),
                                                            },
                                                            {
                                                                key: "bar",
                                                                valueType: FernRegistry.Type.primitive(
                                                                    FernRegistry.PrimitiveType.string()
                                                                ),
                                                            },
                                                            {
                                                                key: "baz",
                                                                valueType: FernRegistry.Type.list({
                                                                    itemType: FernRegistry.Type.primitive(
                                                                        FernRegistry.PrimitiveType.string()
                                                                    ),
                                                                }),
                                                            },
                                                        ],
                                                    }),
                                                }),
                                            }),
                                        },
                                        {
                                            key: "baz",
                                            valueType: FernRegistry.Type.optional({
                                                itemType: FernRegistry.Type.list({
                                                    itemType: FernRegistry.Type.object({
                                                        extends: [],
                                                        properties: [
                                                            {
                                                                key: "foo",
                                                                valueType: FernRegistry.Type.primitive(
                                                                    FernRegistry.PrimitiveType.string()
                                                                ),
                                                            },
                                                            {
                                                                key: "bar",
                                                                valueType: FernRegistry.Type.primitive(
                                                                    FernRegistry.PrimitiveType.string()
                                                                ),
                                                            },
                                                            {
                                                                key: "baz",
                                                                valueType: FernRegistry.Type.list({
                                                                    itemType: FernRegistry.Type.primitive(
                                                                        FernRegistry.PrimitiveType.string()
                                                                    ),
                                                                }),
                                                            },
                                                        ],
                                                    }),
                                                }),
                                            }),
                                        },
                                    ],
                                }),
                                response: FernRegistry.Type.object({
                                    extends: [],
                                    properties: [
                                        {
                                            key: "foo",
                                            valueType: FernRegistry.Type.object({
                                                extends: [],
                                                properties: [
                                                    {
                                                        key: "foo",
                                                        valueType: FernRegistry.Type.primitive(
                                                            FernRegistry.PrimitiveType.string()
                                                        ),
                                                    },
                                                ],
                                            }),
                                        },
                                        {
                                            key: "bar",
                                            valueType: FernRegistry.Type.object({
                                                extends: [],
                                                properties: [
                                                    {
                                                        key: "foo",
                                                        valueType: FernRegistry.Type.primitive(
                                                            FernRegistry.PrimitiveType.string()
                                                        ),
                                                    },
                                                    {
                                                        key: "bar",
                                                        valueType: FernRegistry.Type.union({
                                                            members: [
                                                                FernRegistry.Type.enum({
                                                                    values: ["abc", "def", "ghi", "jkl"],
                                                                }),
                                                                FernRegistry.Type.primitive(
                                                                    FernRegistry.PrimitiveType.string()
                                                                ),
                                                                FernRegistry.Type.object({
                                                                    extends: [],
                                                                    properties: [
                                                                        {
                                                                            key: "foo",
                                                                            valueType: FernRegistry.Type.primitive(
                                                                                FernRegistry.PrimitiveType.string()
                                                                            ),
                                                                        },
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                    },
                                                    {
                                                        key: "baz",
                                                        valueType: FernRegistry.Type.discriminatedUnion({
                                                            discriminant: "type",
                                                            members: [
                                                                {
                                                                    discriminantValue: "dog",
                                                                    additionalProperties: {
                                                                        extends: [],
                                                                        properties: [
                                                                            {
                                                                                key: "favoriteBrandOfDogFood",
                                                                                valueType: FernRegistry.Type.primitive(
                                                                                    FernRegistry.PrimitiveType.string()
                                                                                ),
                                                                            },
                                                                        ],
                                                                    },
                                                                },
                                                                {
                                                                    discriminantValue: "cat",
                                                                    additionalProperties: {
                                                                        extends: [],
                                                                        properties: [
                                                                            {
                                                                                key: "meows",
                                                                                valueType: FernRegistry.Type.primitive(
                                                                                    FernRegistry.PrimitiveType.boolean()
                                                                                ),
                                                                            },
                                                                        ],
                                                                    },
                                                                },
                                                            ],
                                                        }),
                                                    },
                                                ],
                                            }),
                                        },
                                    ],
                                }),
                            },
                        ],
                        subpackages: ["b"],
                    },
                    b: {
                        name: "b-name",
                        types: [],
                        endpoints: [
                            {
                                id: "endpoint-1",
                                displayName: "My Endpoint",
                                docs: "Retrieves the current account balance, based on the authentication that was used to make the request. For a sample request, see this other page",
                                queryParameters: [
                                    {
                                        key: "queryParam1",
                                        type: FernRegistry.Type.primitive(FernRegistry.PrimitiveType.string()),
                                    },
                                    {
                                        key: "queryParam2",
                                        type: FernRegistry.Type.optional({
                                            itemType: FernRegistry.Type.primitive(FernRegistry.PrimitiveType.string()),
                                        }),
                                    },
                                ],
                                path: {
                                    parts: [
                                        FernRegistry.EndpointPathPart.literal("/"),
                                        FernRegistry.EndpointPathPart.pathParameter("test"),
                                    ],
                                    pathParameters: [
                                        {
                                            key: "test",
                                            type: FernRegistry.Type.primitive(FernRegistry.PrimitiveType.integer()),
                                        },
                                    ],
                                },
                                request: FernRegistry.Type.object({
                                    extends: [],
                                    properties: [
                                        {
                                            key: "foo",
                                            valueType: FernRegistry.Type.primitive(FernRegistry.PrimitiveType.string()),
                                        },
                                        {
                                            key: "bar",
                                            valueType: FernRegistry.Type.primitive(FernRegistry.PrimitiveType.string()),
                                        },
                                        {
                                            key: "test",
                                            valueType: FernRegistry.Type.primitive(FernRegistry.PrimitiveType.string()),
                                        },
                                        {
                                            key: "test",
                                            valueType: FernRegistry.Type.optional({
                                                itemType: FernRegistry.Type.primitive(
                                                    FernRegistry.PrimitiveType.string()
                                                ),
                                            }),
                                        },
                                        {
                                            key: "test",
                                            valueType: FernRegistry.Type.map({
                                                keyType: FernRegistry.Type.primitive(
                                                    FernRegistry.PrimitiveType.string()
                                                ),
                                                valueType: FernRegistry.Type.list({
                                                    itemType: FernRegistry.Type.object({
                                                        extends: [],
                                                        properties: [
                                                            {
                                                                key: "foo",
                                                                valueType: FernRegistry.Type.primitive(
                                                                    FernRegistry.PrimitiveType.string()
                                                                ),
                                                            },
                                                            {
                                                                key: "bar",
                                                                valueType: FernRegistry.Type.primitive(
                                                                    FernRegistry.PrimitiveType.string()
                                                                ),
                                                            },
                                                            {
                                                                key: "baz",
                                                                valueType: FernRegistry.Type.list({
                                                                    itemType: FernRegistry.Type.primitive(
                                                                        FernRegistry.PrimitiveType.string()
                                                                    ),
                                                                }),
                                                            },
                                                        ],
                                                    }),
                                                }),
                                            }),
                                        },
                                        {
                                            key: "baz",
                                            valueType: FernRegistry.Type.optional({
                                                itemType: FernRegistry.Type.list({
                                                    itemType: FernRegistry.Type.object({
                                                        extends: [],
                                                        properties: [
                                                            {
                                                                key: "foo",
                                                                valueType: FernRegistry.Type.primitive(
                                                                    FernRegistry.PrimitiveType.string()
                                                                ),
                                                            },
                                                            {
                                                                key: "bar",
                                                                valueType: FernRegistry.Type.primitive(
                                                                    FernRegistry.PrimitiveType.string()
                                                                ),
                                                            },
                                                            {
                                                                key: "baz",
                                                                valueType: FernRegistry.Type.list({
                                                                    itemType: FernRegistry.Type.primitive(
                                                                        FernRegistry.PrimitiveType.string()
                                                                    ),
                                                                }),
                                                            },
                                                        ],
                                                    }),
                                                }),
                                            }),
                                        },
                                    ],
                                }),
                                response: FernRegistry.Type.object({
                                    extends: [],
                                    properties: [
                                        {
                                            key: "foo",
                                            valueType: FernRegistry.Type.object({
                                                extends: [],
                                                properties: [
                                                    {
                                                        key: "foo",
                                                        valueType: FernRegistry.Type.primitive(
                                                            FernRegistry.PrimitiveType.string()
                                                        ),
                                                    },
                                                ],
                                            }),
                                        },
                                        {
                                            key: "bar",
                                            valueType: FernRegistry.Type.object({
                                                extends: [],
                                                properties: [
                                                    {
                                                        key: "foo",
                                                        valueType: FernRegistry.Type.primitive(
                                                            FernRegistry.PrimitiveType.string()
                                                        ),
                                                    },
                                                    {
                                                        key: "bar",
                                                        valueType: FernRegistry.Type.union({
                                                            members: [
                                                                FernRegistry.Type.enum({
                                                                    values: ["abc", "def", "ghi", "jkl"],
                                                                }),
                                                                FernRegistry.Type.primitive(
                                                                    FernRegistry.PrimitiveType.string()
                                                                ),
                                                                FernRegistry.Type.object({
                                                                    extends: [],
                                                                    properties: [
                                                                        {
                                                                            key: "foo",
                                                                            valueType: FernRegistry.Type.primitive(
                                                                                FernRegistry.PrimitiveType.string()
                                                                            ),
                                                                        },
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                    },
                                                    {
                                                        key: "baz",
                                                        valueType: FernRegistry.Type.discriminatedUnion({
                                                            discriminant: "type",
                                                            members: [
                                                                {
                                                                    discriminantValue: "dog",
                                                                    additionalProperties: {
                                                                        extends: [],
                                                                        properties: [
                                                                            {
                                                                                key: "favoriteBrandOfDogFood",
                                                                                valueType: FernRegistry.Type.primitive(
                                                                                    FernRegistry.PrimitiveType.string()
                                                                                ),
                                                                            },
                                                                        ],
                                                                    },
                                                                },
                                                                {
                                                                    discriminantValue: "cat",
                                                                    additionalProperties: {
                                                                        extends: [],
                                                                        properties: [
                                                                            {
                                                                                key: "meows",
                                                                                valueType: FernRegistry.Type.primitive(
                                                                                    FernRegistry.PrimitiveType.boolean()
                                                                                ),
                                                                            },
                                                                        ],
                                                                    },
                                                                },
                                                            ],
                                                        }),
                                                    },
                                                ],
                                            }),
                                        },
                                    ],
                                }),
                            },
                            {
                                id: "endpoint-2",
                                displayName: "My Endpoint",
                                docs: "Retrieves the current account balance, based on the authentication that was used to make the request. For a sample request, see this other page",
                                queryParameters: [
                                    {
                                        key: "queryParam1",
                                        type: FernRegistry.Type.primitive(FernRegistry.PrimitiveType.string()),
                                    },
                                    {
                                        key: "queryParam2",
                                        type: FernRegistry.Type.optional({
                                            itemType: FernRegistry.Type.primitive(FernRegistry.PrimitiveType.string()),
                                        }),
                                    },
                                ],
                                path: {
                                    parts: [
                                        FernRegistry.EndpointPathPart.literal("/"),
                                        FernRegistry.EndpointPathPart.pathParameter("test"),
                                    ],
                                    pathParameters: [
                                        {
                                            key: "test",
                                            type: FernRegistry.Type.primitive(FernRegistry.PrimitiveType.integer()),
                                        },
                                    ],
                                },
                                request: FernRegistry.Type.object({
                                    extends: [],
                                    properties: [
                                        {
                                            key: "foo",
                                            valueType: FernRegistry.Type.primitive(FernRegistry.PrimitiveType.string()),
                                        },
                                        {
                                            key: "bar",
                                            valueType: FernRegistry.Type.primitive(FernRegistry.PrimitiveType.string()),
                                        },
                                        {
                                            key: "test",
                                            valueType: FernRegistry.Type.primitive(FernRegistry.PrimitiveType.string()),
                                        },
                                        {
                                            key: "test",
                                            valueType: FernRegistry.Type.optional({
                                                itemType: FernRegistry.Type.primitive(
                                                    FernRegistry.PrimitiveType.string()
                                                ),
                                            }),
                                        },
                                        {
                                            key: "test",
                                            valueType: FernRegistry.Type.map({
                                                keyType: FernRegistry.Type.primitive(
                                                    FernRegistry.PrimitiveType.string()
                                                ),
                                                valueType: FernRegistry.Type.list({
                                                    itemType: FernRegistry.Type.object({
                                                        extends: [],
                                                        properties: [
                                                            {
                                                                key: "foo",
                                                                valueType: FernRegistry.Type.primitive(
                                                                    FernRegistry.PrimitiveType.string()
                                                                ),
                                                            },
                                                            {
                                                                key: "bar",
                                                                valueType: FernRegistry.Type.primitive(
                                                                    FernRegistry.PrimitiveType.string()
                                                                ),
                                                            },
                                                            {
                                                                key: "baz",
                                                                valueType: FernRegistry.Type.list({
                                                                    itemType: FernRegistry.Type.primitive(
                                                                        FernRegistry.PrimitiveType.string()
                                                                    ),
                                                                }),
                                                            },
                                                        ],
                                                    }),
                                                }),
                                            }),
                                        },
                                        {
                                            key: "baz",
                                            valueType: FernRegistry.Type.optional({
                                                itemType: FernRegistry.Type.list({
                                                    itemType: FernRegistry.Type.object({
                                                        extends: [],
                                                        properties: [
                                                            {
                                                                key: "foo",
                                                                valueType: FernRegistry.Type.primitive(
                                                                    FernRegistry.PrimitiveType.string()
                                                                ),
                                                            },
                                                            {
                                                                key: "bar",
                                                                valueType: FernRegistry.Type.primitive(
                                                                    FernRegistry.PrimitiveType.string()
                                                                ),
                                                            },
                                                            {
                                                                key: "baz",
                                                                valueType: FernRegistry.Type.list({
                                                                    itemType: FernRegistry.Type.primitive(
                                                                        FernRegistry.PrimitiveType.string()
                                                                    ),
                                                                }),
                                                            },
                                                        ],
                                                    }),
                                                }),
                                            }),
                                        },
                                    ],
                                }),
                                response: FernRegistry.Type.object({
                                    extends: [],
                                    properties: [
                                        {
                                            key: "foo",
                                            valueType: FernRegistry.Type.object({
                                                extends: [],
                                                properties: [
                                                    {
                                                        key: "foo",
                                                        valueType: FernRegistry.Type.primitive(
                                                            FernRegistry.PrimitiveType.string()
                                                        ),
                                                    },
                                                ],
                                            }),
                                        },
                                        {
                                            key: "bar",
                                            valueType: FernRegistry.Type.object({
                                                extends: [],
                                                properties: [
                                                    {
                                                        key: "foo",
                                                        valueType: FernRegistry.Type.primitive(
                                                            FernRegistry.PrimitiveType.string()
                                                        ),
                                                    },
                                                    {
                                                        key: "bar",
                                                        valueType: FernRegistry.Type.union({
                                                            members: [
                                                                FernRegistry.Type.enum({
                                                                    values: ["abc", "def", "ghi", "jkl"],
                                                                }),
                                                                FernRegistry.Type.primitive(
                                                                    FernRegistry.PrimitiveType.string()
                                                                ),
                                                                FernRegistry.Type.object({
                                                                    extends: [],
                                                                    properties: [
                                                                        {
                                                                            key: "foo",
                                                                            valueType: FernRegistry.Type.primitive(
                                                                                FernRegistry.PrimitiveType.string()
                                                                            ),
                                                                        },
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                    },
                                                    {
                                                        key: "baz",
                                                        valueType: FernRegistry.Type.discriminatedUnion({
                                                            discriminant: "type",
                                                            members: [
                                                                {
                                                                    discriminantValue: "dog",
                                                                    additionalProperties: {
                                                                        extends: [],
                                                                        properties: [
                                                                            {
                                                                                key: "favoriteBrandOfDogFood",
                                                                                valueType: FernRegistry.Type.primitive(
                                                                                    FernRegistry.PrimitiveType.string()
                                                                                ),
                                                                            },
                                                                        ],
                                                                    },
                                                                },
                                                                {
                                                                    discriminantValue: "cat",
                                                                    additionalProperties: {
                                                                        extends: [],
                                                                        properties: [
                                                                            {
                                                                                key: "meows",
                                                                                valueType: FernRegistry.Type.primitive(
                                                                                    FernRegistry.PrimitiveType.boolean()
                                                                                ),
                                                                            },
                                                                        ],
                                                                    },
                                                                },
                                                            ],
                                                        }),
                                                    },
                                                ],
                                            }),
                                        },
                                    ],
                                }),
                            },
                        ],
                        subpackages: ["c"],
                    },
                    c: {
                        name: "c",
                        types: [],
                        endpoints: [
                            {
                                id: "endpoint-1",
                                displayName: "My Endpoint",
                                docs: "Retrieves the current account balance, based on the authentication that was used to make the request. For a sample request, see this other page",
                                queryParameters: [
                                    {
                                        key: "queryParam1",
                                        type: FernRegistry.Type.primitive(FernRegistry.PrimitiveType.string()),
                                    },
                                    {
                                        key: "queryParam2",
                                        type: FernRegistry.Type.optional({
                                            itemType: FernRegistry.Type.primitive(FernRegistry.PrimitiveType.string()),
                                        }),
                                    },
                                ],
                                path: {
                                    parts: [
                                        FernRegistry.EndpointPathPart.literal("/"),
                                        FernRegistry.EndpointPathPart.pathParameter("test"),
                                    ],
                                    pathParameters: [
                                        {
                                            key: "test",
                                            type: FernRegistry.Type.primitive(FernRegistry.PrimitiveType.integer()),
                                        },
                                    ],
                                },
                                request: FernRegistry.Type.object({
                                    extends: [],
                                    properties: [
                                        {
                                            key: "foo",
                                            valueType: FernRegistry.Type.primitive(FernRegistry.PrimitiveType.string()),
                                        },
                                        {
                                            key: "bar",
                                            valueType: FernRegistry.Type.primitive(FernRegistry.PrimitiveType.string()),
                                        },
                                        {
                                            key: "test",
                                            valueType: FernRegistry.Type.primitive(FernRegistry.PrimitiveType.string()),
                                        },
                                        {
                                            key: "test",
                                            valueType: FernRegistry.Type.optional({
                                                itemType: FernRegistry.Type.primitive(
                                                    FernRegistry.PrimitiveType.string()
                                                ),
                                            }),
                                        },
                                        {
                                            key: "test",
                                            valueType: FernRegistry.Type.map({
                                                keyType: FernRegistry.Type.primitive(
                                                    FernRegistry.PrimitiveType.string()
                                                ),
                                                valueType: FernRegistry.Type.list({
                                                    itemType: FernRegistry.Type.object({
                                                        extends: [],
                                                        properties: [
                                                            {
                                                                key: "foo",
                                                                valueType: FernRegistry.Type.primitive(
                                                                    FernRegistry.PrimitiveType.string()
                                                                ),
                                                            },
                                                            {
                                                                key: "bar",
                                                                valueType: FernRegistry.Type.primitive(
                                                                    FernRegistry.PrimitiveType.string()
                                                                ),
                                                            },
                                                            {
                                                                key: "baz",
                                                                valueType: FernRegistry.Type.list({
                                                                    itemType: FernRegistry.Type.primitive(
                                                                        FernRegistry.PrimitiveType.string()
                                                                    ),
                                                                }),
                                                            },
                                                        ],
                                                    }),
                                                }),
                                            }),
                                        },
                                        {
                                            key: "baz",
                                            valueType: FernRegistry.Type.optional({
                                                itemType: FernRegistry.Type.list({
                                                    itemType: FernRegistry.Type.object({
                                                        extends: [],
                                                        properties: [
                                                            {
                                                                key: "foo",
                                                                valueType: FernRegistry.Type.primitive(
                                                                    FernRegistry.PrimitiveType.string()
                                                                ),
                                                            },
                                                            {
                                                                key: "bar",
                                                                valueType: FernRegistry.Type.primitive(
                                                                    FernRegistry.PrimitiveType.string()
                                                                ),
                                                            },
                                                            {
                                                                key: "baz",
                                                                valueType: FernRegistry.Type.list({
                                                                    itemType: FernRegistry.Type.primitive(
                                                                        FernRegistry.PrimitiveType.string()
                                                                    ),
                                                                }),
                                                            },
                                                        ],
                                                    }),
                                                }),
                                            }),
                                        },
                                    ],
                                }),
                                response: FernRegistry.Type.object({
                                    extends: [],
                                    properties: [
                                        {
                                            key: "foo",
                                            valueType: FernRegistry.Type.object({
                                                extends: [],
                                                properties: [
                                                    {
                                                        key: "foo",
                                                        valueType: FernRegistry.Type.primitive(
                                                            FernRegistry.PrimitiveType.string()
                                                        ),
                                                    },
                                                ],
                                            }),
                                        },
                                        {
                                            key: "bar",
                                            valueType: FernRegistry.Type.object({
                                                extends: [],
                                                properties: [
                                                    {
                                                        key: "foo",
                                                        valueType: FernRegistry.Type.primitive(
                                                            FernRegistry.PrimitiveType.string()
                                                        ),
                                                    },
                                                    {
                                                        key: "bar",
                                                        valueType: FernRegistry.Type.union({
                                                            members: [
                                                                FernRegistry.Type.enum({
                                                                    values: ["abc", "def", "ghi", "jkl"],
                                                                }),
                                                                FernRegistry.Type.primitive(
                                                                    FernRegistry.PrimitiveType.string()
                                                                ),
                                                                FernRegistry.Type.object({
                                                                    extends: [],
                                                                    properties: [
                                                                        {
                                                                            key: "foo",
                                                                            valueType: FernRegistry.Type.primitive(
                                                                                FernRegistry.PrimitiveType.string()
                                                                            ),
                                                                        },
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                    },
                                                    {
                                                        key: "baz",
                                                        valueType: FernRegistry.Type.discriminatedUnion({
                                                            discriminant: "type",
                                                            members: [
                                                                {
                                                                    discriminantValue: "dog",
                                                                    additionalProperties: {
                                                                        extends: [],
                                                                        properties: [
                                                                            {
                                                                                key: "favoriteBrandOfDogFood",
                                                                                valueType: FernRegistry.Type.primitive(
                                                                                    FernRegistry.PrimitiveType.string()
                                                                                ),
                                                                            },
                                                                        ],
                                                                    },
                                                                },
                                                                {
                                                                    discriminantValue: "cat",
                                                                    additionalProperties: {
                                                                        extends: [],
                                                                        properties: [
                                                                            {
                                                                                key: "meows",
                                                                                valueType: FernRegistry.Type.primitive(
                                                                                    FernRegistry.PrimitiveType.boolean()
                                                                                ),
                                                                            },
                                                                        ],
                                                                    },
                                                                },
                                                            ],
                                                        }),
                                                    },
                                                ],
                                            }),
                                        },
                                    ],
                                }),
                            },
                        ],
                        subpackages: [],
                    },
                },
                rootPackage: {
                    types: [],
                    subpackages: ["a"],
                    endpoints: [
                        {
                            id: "endpoint-1",
                            displayName: "My Endpoint",
                            docs: "Retrieves the current account balance, based on the authentication that was used to make the request. For a sample request, see this other page",
                            queryParameters: [
                                {
                                    key: "queryParam1",
                                    type: FernRegistry.Type.primitive(FernRegistry.PrimitiveType.string()),
                                },
                                {
                                    key: "queryParam2",
                                    type: FernRegistry.Type.optional({
                                        itemType: FernRegistry.Type.primitive(FernRegistry.PrimitiveType.string()),
                                    }),
                                },
                            ],
                            path: {
                                parts: [
                                    FernRegistry.EndpointPathPart.literal("/"),
                                    FernRegistry.EndpointPathPart.pathParameter("test"),
                                ],
                                pathParameters: [
                                    {
                                        key: "test",
                                        type: FernRegistry.Type.primitive(FernRegistry.PrimitiveType.integer()),
                                    },
                                ],
                            },
                            request: FernRegistry.Type.object({
                                extends: [],
                                properties: [
                                    {
                                        key: "foo",
                                        valueType: FernRegistry.Type.primitive(FernRegistry.PrimitiveType.string()),
                                    },
                                    {
                                        key: "bar",
                                        valueType: FernRegistry.Type.primitive(FernRegistry.PrimitiveType.string()),
                                    },
                                    {
                                        key: "test",
                                        valueType: FernRegistry.Type.primitive(FernRegistry.PrimitiveType.string()),
                                    },
                                    {
                                        key: "test",
                                        valueType: FernRegistry.Type.optional({
                                            itemType: FernRegistry.Type.primitive(FernRegistry.PrimitiveType.string()),
                                        }),
                                    },
                                    {
                                        key: "test",
                                        valueType: FernRegistry.Type.map({
                                            keyType: FernRegistry.Type.primitive(FernRegistry.PrimitiveType.string()),
                                            valueType: FernRegistry.Type.list({
                                                itemType: FernRegistry.Type.object({
                                                    extends: [],
                                                    properties: [
                                                        {
                                                            key: "foo",
                                                            valueType: FernRegistry.Type.primitive(
                                                                FernRegistry.PrimitiveType.string()
                                                            ),
                                                        },
                                                        {
                                                            key: "bar",
                                                            valueType: FernRegistry.Type.primitive(
                                                                FernRegistry.PrimitiveType.string()
                                                            ),
                                                        },
                                                        {
                                                            key: "baz",
                                                            valueType: FernRegistry.Type.list({
                                                                itemType: FernRegistry.Type.primitive(
                                                                    FernRegistry.PrimitiveType.string()
                                                                ),
                                                            }),
                                                        },
                                                    ],
                                                }),
                                            }),
                                        }),
                                    },
                                    {
                                        key: "baz",
                                        valueType: FernRegistry.Type.optional({
                                            itemType: FernRegistry.Type.list({
                                                itemType: FernRegistry.Type.object({
                                                    extends: [],
                                                    properties: [
                                                        {
                                                            key: "foo",
                                                            valueType: FernRegistry.Type.primitive(
                                                                FernRegistry.PrimitiveType.string()
                                                            ),
                                                        },
                                                        {
                                                            key: "bar",
                                                            valueType: FernRegistry.Type.primitive(
                                                                FernRegistry.PrimitiveType.string()
                                                            ),
                                                        },
                                                        {
                                                            key: "baz",
                                                            valueType: FernRegistry.Type.list({
                                                                itemType: FernRegistry.Type.primitive(
                                                                    FernRegistry.PrimitiveType.string()
                                                                ),
                                                            }),
                                                        },
                                                    ],
                                                }),
                                            }),
                                        }),
                                    },
                                ],
                            }),
                            response: FernRegistry.Type.object({
                                extends: [],
                                properties: [
                                    {
                                        key: "foo",
                                        valueType: FernRegistry.Type.object({
                                            extends: [],
                                            properties: [
                                                {
                                                    key: "foo",
                                                    valueType: FernRegistry.Type.primitive(
                                                        FernRegistry.PrimitiveType.string()
                                                    ),
                                                },
                                            ],
                                        }),
                                    },
                                    {
                                        key: "bar",
                                        valueType: FernRegistry.Type.object({
                                            extends: [],
                                            properties: [
                                                {
                                                    key: "foo",
                                                    valueType: FernRegistry.Type.primitive(
                                                        FernRegistry.PrimitiveType.string()
                                                    ),
                                                },
                                                {
                                                    key: "bar",
                                                    valueType: FernRegistry.Type.union({
                                                        members: [
                                                            FernRegistry.Type.enum({
                                                                values: ["abc", "def", "ghi", "jkl"],
                                                            }),
                                                            FernRegistry.Type.primitive(
                                                                FernRegistry.PrimitiveType.string()
                                                            ),
                                                            FernRegistry.Type.object({
                                                                extends: [],
                                                                properties: [
                                                                    {
                                                                        key: "foo",
                                                                        valueType: FernRegistry.Type.primitive(
                                                                            FernRegistry.PrimitiveType.string()
                                                                        ),
                                                                    },
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                },
                                                {
                                                    key: "baz",
                                                    valueType: FernRegistry.Type.discriminatedUnion({
                                                        discriminant: "type",
                                                        members: [
                                                            {
                                                                discriminantValue: "dog",
                                                                additionalProperties: {
                                                                    extends: [],
                                                                    properties: [
                                                                        {
                                                                            key: "favoriteBrandOfDogFood",
                                                                            valueType: FernRegistry.Type.primitive(
                                                                                FernRegistry.PrimitiveType.string()
                                                                            ),
                                                                        },
                                                                    ],
                                                                },
                                                            },
                                                            {
                                                                discriminantValue: "cat",
                                                                additionalProperties: {
                                                                    extends: [],
                                                                    properties: [
                                                                        {
                                                                            key: "meows",
                                                                            valueType: FernRegistry.Type.primitive(
                                                                                FernRegistry.PrimitiveType.boolean()
                                                                            ),
                                                                        },
                                                                    ],
                                                                },
                                                            },
                                                        ],
                                                    }),
                                                },
                                            ],
                                        }),
                                    },
                                ],
                            }),
                        },
                        {
                            id: "endpoint-2",
                            displayName: "My Endpoint",
                            queryParameters: [],
                            path: {
                                parts: [FernRegistry.EndpointPathPart.literal("/")],
                                pathParameters: [],
                            },
                            request: FernRegistry.Type.primitive(FernRegistry.PrimitiveType.string()),
                            response: FernRegistry.Type.object({
                                extends: [],
                                properties: [
                                    {
                                        key: "foo",
                                        valueType: FernRegistry.Type.primitive(FernRegistry.PrimitiveType.string()),
                                    },
                                ],
                            }),
                        },
                        {
                            id: "endpoint-3",
                            queryParameters: [],
                            path: {
                                parts: [
                                    FernRegistry.EndpointPathPart.literal("/hello/"),
                                    FernRegistry.EndpointPathPart.pathParameter("myPathParam"),
                                ],
                                pathParameters: [
                                    {
                                        key: "myPathParam",
                                        type: FernRegistry.Type.primitive(FernRegistry.PrimitiveType.string()),
                                    },
                                ],
                            },
                            request: FernRegistry.Type.primitive(FernRegistry.PrimitiveType.string()),
                            response: FernRegistry.Type.object({
                                extends: [],
                                properties: [
                                    {
                                        key: "foo",
                                        valueType: FernRegistry.Type.primitive(FernRegistry.PrimitiveType.string()),
                                    },
                                ],
                            }),
                        },
                    ],
                },
            };
        },
    });
}
