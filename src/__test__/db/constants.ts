import { FernRegistry } from "../../generated";

export const DOCS_DEFINITION_DB: FernRegistry.docs.v1.db.DocsDefinitionDb = {
    type: "v2",
    referencedApis: ["8d4648b9-66fc-4075-a5a3-4dc78103e73b"],
    files: {
        "c0a510b8-8d05-4569-b6fc-8090178143e8": {
            s3Key: "permit.docs.dev.buildwithfern.com/2023-06-25T05:12:23.574Z/permitio-logo-dark.png",
        },
        "1f7625cd-68fe-4104-bc07-050eb2fefb32": {
            s3Key: "permit.docs.dev.buildwithfern.com/2023-06-25T05:12:23.574Z/favicon.ico",
        },
    },
    config: {
        navigation: {
            items: [
                {
                    type: "section",
                    title: "SDKs",
                    urlSlug: "sd-ks",
                    items: [
                        {
                            type: "page",
                            id: "intro.mdx",
                            title: "Introduction",
                            urlSlug: "introduction",
                        },
                        {
                            type: "page",
                            id: "typescript.mdx",
                            title: "TypeScript SDK",
                            urlSlug: "type-script-sdk",
                        },
                    ],
                },
                {
                    type: "api",
                    title: "API Reference",
                    api: "8d4648b9-66fc-4075-a5a3-4dc78103e73b",
                    urlSlug: "api-reference",
                },
            ],
        },
        logo: "c0a510b8-8d05-4569-b6fc-8090178143e8",
        colors: {
            accentPrimary: {
                r: 179,
                g: 171,
                b: 228,
            },
        },
        navbarLinks: [],
        title: "API Reference | Permit.io",
        favicon: "1f7625cd-68fe-4104-bc07-050eb2fefb32",
    },
    pages: {
        "intro.mdx": {
            markdown:
                "Welcome to Permit's API Reference Documentation. \n\n## How are the docs generated\n\nThe docs are generated using [Fern](https://github.com/fern-api/fern). Fern supports rendering OpenAPI in addition to markdown content! \n",
        },
        "typescript.mdx": {
            markdown:
                "If you're familar with Typescript, make sure to checkout our TypeScript SDK! \n\n## Important note\n\nNote that Fern's Documentation Product is decoupled from it's SDK product. You can document your SDKs in Fern even if you don't use Fern's SDK generation! ",
        },
    },
    colors: {
        accentPrimary: {
            r: 179,
            g: 171,
            b: 228,
        },
    },
};

export const API_DEFINITION_DB: FernRegistry.api.v1.db.DbApiDefinition = {
    id: "8d4648b9-66fc-4075-a5a3-4dc78103e73b",
    rootPackage: {
        endpoints: [],
        subpackages: [
            "subpackage_organizations",
            "subpackage_projects",
            "subpackage_environments",
            "subpackage_resources",
            "subpackage_resourceActions",
            "subpackage_resourceActionGroups",
            "subpackage_resourceRoles",
            "subpackage_resourceAttributes",
            "subpackage_userAttributes",
            "subpackage_roles",
            "subpackage_conditionSets",
            "subpackage_users",
            "subpackage_tenants",
            "subpackage_roleAssignments",
            "subpackage_conditionSetRules",
            "subpackage_resourceInstances",
            "subpackage_bulkOperations",
        ],
        types: [
            "type_:EnvironmentCreate",
            "type_:EnvironmentCopyConflictStrategy",
            "type_:ListResourcesResponse",
            "type_:AddRolePermissions",
            "type_:RemoveRolePermissions",
            "type_:ResourceAttributeCreate",
            "type_:ResourceAttributeUpdate",
            "type_:ListRolesResponse",
            "type_:ListConditionSetsResponse",
            "type_:ConditionSetCreateResourceId",
            "type_:ConditionSetCreateParentId",
            "type_:ConditionSetUpdateParentId",
            "type_:UserCreate",
            "type_:ListTenantsResponse",
            "type_:TenantCreate",
            "type_:RoleAssignmentCreate",
            "type_:RoleAssignmentRemove",
            "type_:ActionBlockEditable",
            "type_:ActionBlockRead",
            "type_:AttributeBlockEditable",
            "type_:AttributeBlockRead",
            "type_:AttributeType",
            "type_:BulkRoleAssignmentReport",
            "type_:BulkRoleUnAssignmentReport",
            "type_:ConditionSetRead",
            "type_:ConditionSetReadResourceId",
            "type_:ConditionSetReadParentId",
            "type_:ConditionSetRuleRead",
            "type_:ConditionSetType",
            "type_:EnvironmentCopyScope",
            "type_:EnvironmentCopyScopeFilters",
            "type_:EnvironmentCopyTarget",
            "type_:EnvironmentRead",
            "type_:EnvironmentStats",
            "type_:HttpValidationError",
            "type_:IdentityRead",
            "type_:InviteRead",
            "type_:InviteStatus",
            "type_:JwksObj",
            "type_:MemberAccessLevel",
            "type_:MemberAccessObj",
            "type_:OnboardingStep",
            "type_:OrgMemberReadWithGrants",
            "type_:OrganizationRead",
            "type_:OrganizationReadWithApiKey",
            "type_:PdpConfigRead",
            "type_:PaginatedResultConditionSetRead",
            "type_:PaginatedResultResourceRead",
            "type_:PaginatedResultResourceRoleRead",
            "type_:PaginatedResultRoleRead",
            "type_:PaginatedResultTenantRead",
            "type_:PaginatedResultUserRead",
            "type_:Permission",
            "type_:ProjectRead",
            "type_:RelationsBlock",
            "type_:ResourceActionGroupRead",
            "type_:ResourceActionRead",
            "type_:ResourceAttributeRead",
            "type_:ResourceInstanceRead",
            "type_:ResourceRead",
            "type_:ResourceRoleList",
            "type_:ResourceRoleListRoles",
            "type_:ResourceRoleRead",
            "type_:RoleAssignmentRead",
            "type_:RoleBlock",
            "type_:RoleList",
            "type_:RoleListRoles",
            "type_:RoleRead",
            "type_:RolesBlock",
            "type_:Statistics",
            "type_:TenantCreateBulkOperationResult",
            "type_:TenantDeleteBulkOperationResult",
            "type_:TenantRead",
            "type_:UserCreateBulkOperationResult",
            "type_:UserDeleteBulkOperationResult",
            "type_:UserInTenant",
            "type_:UserRead",
            "type_:UserReplaceBulkOperationResult",
            "type_:UserRole",
            "type_:UserStatus",
            "type_:ValidationError",
            "type_:ValidationErrorLocItem",
        ],
    },
    types: {
        "type_:EnvironmentCreate": {
            description: undefined,
            name: "EnvironmentCreate",
            shape: {
                type: "object",
                extends: [],
                properties: [
                    {
                        description:
                            "A URL-friendly name of the environment (i.e: slug). You will be able to query later using this key instead of the id (UUID) of the environment.",
                        htmlDescription:
                            "<p>A URL-friendly name of the environment (i.e: slug). You will be able to query later using this key instead of the id (UUID) of the environment.</p>\n",
                        key: "key",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "The name of the environment",
                        htmlDescription: "<p>The name of the environment</p>\n",
                        key: "name",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "an optional longer description of the environment",
                        htmlDescription: "<p>an optional longer description of the environment</p>\n",
                        key: "description",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "string",
                                },
                            },
                        },
                    },
                    {
                        description: "when using gitops feature, an optional branch name for the environment",
                        htmlDescription:
                            "<p>when using gitops feature, an optional branch name for the environment</p>\n",
                        key: "custom_branch_name",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "string",
                                },
                            },
                        },
                    },
                    {
                        description: "jwks for element frontend only login",
                        htmlDescription: "<p>jwks for element frontend only login</p>\n",
                        key: "jwks",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "id",
                                value: "type_:JwksObj",
                            },
                        },
                    },
                    {
                        description: "the settings for this environment",
                        htmlDescription: "<p>the settings for this environment</p>\n",
                        key: "settings",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "map",
                                keyType: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                valueType: {
                                    type: "unknown",
                                },
                            },
                        },
                    },
                ],
            },
        },
        "type_:EnvironmentCopyConflictStrategy": {
            description:
                "Action to take when detecting a conflict when copying. Only applies to copying into an existing environment",
            htmlDescription:
                "<p>Action to take when detecting a conflict when copying. Only applies to copying into an existing environment</p>\n",
            name: "EnvironmentCopyConflictStrategy",
            shape: {
                type: "enum",
                values: [
                    {
                        description: undefined,
                        value: "fail",
                    },
                    {
                        description: undefined,
                        value: "overwrite",
                    },
                ],
            },
        },
        "type_:ListResourcesResponse": {
            description: undefined,
            name: "ListResourcesResponse",
            shape: {
                type: "undiscriminatedUnion",
                variants: [
                    {
                        description: undefined,
                        type: {
                            type: "id",
                            value: "type_:PaginatedResultResourceRead",
                        },
                    },
                    {
                        description: undefined,
                        type: {
                            type: "list",
                            itemType: {
                                type: "id",
                                value: "type_:ResourceRead",
                            },
                        },
                    },
                ],
            },
        },
        "type_:AddRolePermissions": {
            description: undefined,
            name: "AddRolePermissions",
            shape: {
                type: "object",
                extends: [],
                properties: [
                    {
                        description:
                            'List of permissions to assign to the role. If a permission is already granted to the role it is skipped. Each permission can be either a resource action id, or `{resource_key}:{action_key}`, i.e: the "permission name".',
                        htmlDescription:
                            "<p>List of permissions to assign to the role. If a permission is already granted to the role it is skipped. Each permission can be either a resource action id, or <code>{resource_key}:{action_key}</code>, i.e: the &quot;permission name&quot;.</p>\n",
                        key: "permissions",
                        valueType: {
                            type: "list",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "string",
                                },
                            },
                        },
                    },
                ],
            },
        },
        "type_:RemoveRolePermissions": {
            description: undefined,
            name: "RemoveRolePermissions",
            shape: {
                type: "object",
                extends: [],
                properties: [
                    {
                        description:
                            'List of permissions to remove from the role. If a permission is not found it is skipped. Each permission can be either a resource action id, or `{resource_key}:{action_key}`,i.e: the "permission name".',
                        htmlDescription:
                            "<p>List of permissions to remove from the role. If a permission is not found it is skipped. Each permission can be either a resource action id, or <code>{resource_key}:{action_key}</code>,i.e: the &quot;permission name&quot;.</p>\n",
                        key: "permissions",
                        valueType: {
                            type: "list",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "string",
                                },
                            },
                        },
                    },
                ],
            },
        },
        "type_:ResourceAttributeCreate": {
            description: undefined,
            name: "ResourceAttributeCreate",
            shape: {
                type: "object",
                extends: [],
                properties: [
                    {
                        description:
                            "A URL-friendly name of the attribute (i.e: slug). You will be able to query later using this key instead of the id (UUID) of the attribute.",
                        htmlDescription:
                            "<p>A URL-friendly name of the attribute (i.e: slug). You will be able to query later using this key instead of the id (UUID) of the attribute.</p>\n",
                        key: "key",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description:
                            "The type of the attribute, we currently support: `bool`, `number` (ints, floats), `time` (a timestamp), `string`, and `json`.",
                        htmlDescription:
                            "<p>The type of the attribute, we currently support: <code>bool</code>, <code>number</code> (ints, floats), <code>time</code> (a timestamp), <code>string</code>, and <code>json</code>.</p>\n",
                        key: "type",
                        valueType: {
                            type: "id",
                            value: "type_:AttributeType",
                        },
                    },
                    {
                        description: "An optional longer description of what this attribute respresents in your system",
                        htmlDescription:
                            "<p>An optional longer description of what this attribute respresents in your system</p>\n",
                        key: "description",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "string",
                                },
                            },
                        },
                    },
                ],
            },
        },
        "type_:ResourceAttributeUpdate": {
            description: undefined,
            name: "ResourceAttributeUpdate",
            shape: {
                type: "object",
                extends: [],
                properties: [
                    {
                        description:
                            "The type of the attribute, we currently support: `bool`, `number` (ints, floats), `time` (a timestamp), `string`, and `json`.",
                        htmlDescription:
                            "<p>The type of the attribute, we currently support: <code>bool</code>, <code>number</code> (ints, floats), <code>time</code> (a timestamp), <code>string</code>, and <code>json</code>.</p>\n",
                        key: "type",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "id",
                                value: "type_:AttributeType",
                            },
                        },
                    },
                    {
                        description: "An optional longer description of what this attribute respresents in your system",
                        htmlDescription:
                            "<p>An optional longer description of what this attribute respresents in your system</p>\n",
                        key: "description",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "string",
                                },
                            },
                        },
                    },
                ],
            },
        },
        "type_:ListRolesResponse": {
            description: undefined,
            name: "ListRolesResponse",
            shape: {
                type: "undiscriminatedUnion",
                variants: [
                    {
                        description: undefined,
                        type: {
                            type: "id",
                            value: "type_:PaginatedResultRoleRead",
                        },
                    },
                    {
                        description: undefined,
                        type: {
                            type: "list",
                            itemType: {
                                type: "id",
                                value: "type_:RoleRead",
                            },
                        },
                    },
                ],
            },
        },
        "type_:ListConditionSetsResponse": {
            description: undefined,
            name: "ListConditionSetsResponse",
            shape: {
                type: "undiscriminatedUnion",
                variants: [
                    {
                        description: undefined,
                        type: {
                            type: "id",
                            value: "type_:PaginatedResultConditionSetRead",
                        },
                    },
                    {
                        description: undefined,
                        type: {
                            type: "list",
                            itemType: {
                                type: "id",
                                value: "type_:ConditionSetRead",
                            },
                        },
                    },
                ],
            },
        },
        "type_:ConditionSetCreateResourceId": {
            description: "For ResourceSets, the id of the base resource.",
            htmlDescription: "<p>For ResourceSets, the id of the base resource.</p>\n",
            name: "ConditionSetCreateResourceId",
            shape: {
                type: "undiscriminatedUnion",
                variants: [
                    {
                        description: undefined,
                        type: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: undefined,
                        type: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                ],
            },
        },
        "type_:ConditionSetCreateParentId": {
            description: "Parent Condition Set",
            htmlDescription: "<p>Parent Condition Set</p>\n",
            name: "ConditionSetCreateParentId",
            shape: {
                type: "undiscriminatedUnion",
                variants: [
                    {
                        description: undefined,
                        type: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: undefined,
                        type: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                ],
            },
        },
        "type_:ConditionSetUpdateParentId": {
            description: "Parent Condition Set",
            htmlDescription: "<p>Parent Condition Set</p>\n",
            name: "ConditionSetUpdateParentId",
            shape: {
                type: "undiscriminatedUnion",
                variants: [
                    {
                        description: undefined,
                        type: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: undefined,
                        type: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                ],
            },
        },
        "type_:UserCreate": {
            description: undefined,
            name: "UserCreate",
            shape: {
                type: "object",
                extends: [],
                properties: [
                    {
                        description: "A unique id by which Permit will identify the user for permission checks.",
                        htmlDescription:
                            "<p>A unique id by which Permit will identify the user for permission checks.</p>\n",
                        key: "key",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "The email of the user. If synced, will be unique inside the environment.",
                        htmlDescription:
                            "<p>The email of the user. If synced, will be unique inside the environment.</p>\n",
                        key: "email",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "string",
                                },
                            },
                        },
                    },
                    {
                        description: "First name of the user.",
                        htmlDescription: "<p>First name of the user.</p>\n",
                        key: "first_name",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "string",
                                },
                            },
                        },
                    },
                    {
                        description: "Last name of the user.",
                        htmlDescription: "<p>Last name of the user.</p>\n",
                        key: "last_name",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "string",
                                },
                            },
                        },
                    },
                    {
                        description:
                            "Arbitrary user attributes that will be used to enforce attribute-based access control policies.",
                        htmlDescription:
                            "<p>Arbitrary user attributes that will be used to enforce attribute-based access control policies.</p>\n",
                        key: "attributes",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "map",
                                keyType: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                valueType: {
                                    type: "unknown",
                                },
                            },
                        },
                    },
                ],
            },
        },
        "type_:ListTenantsResponse": {
            description: undefined,
            name: "ListTenantsResponse",
            shape: {
                type: "undiscriminatedUnion",
                variants: [
                    {
                        description: undefined,
                        type: {
                            type: "id",
                            value: "type_:PaginatedResultTenantRead",
                        },
                    },
                    {
                        description: undefined,
                        type: {
                            type: "list",
                            itemType: {
                                type: "id",
                                value: "type_:TenantRead",
                            },
                        },
                    },
                ],
            },
        },
        "type_:TenantCreate": {
            description: undefined,
            name: "TenantCreate",
            shape: {
                type: "object",
                extends: [],
                properties: [
                    {
                        description:
                            "A unique id by which Permit will identify the tenant. The tenant key must be url-friendly (slugified).",
                        htmlDescription:
                            "<p>A unique id by which Permit will identify the tenant. The tenant key must be url-friendly (slugified).</p>\n",
                        key: "key",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "A descriptive name for the tenant",
                        htmlDescription: "<p>A descriptive name for the tenant</p>\n",
                        key: "name",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "an optional longer description of the tenant",
                        htmlDescription: "<p>an optional longer description of the tenant</p>\n",
                        key: "description",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "string",
                                },
                            },
                        },
                    },
                    {
                        description:
                            "Arbitraty tenant attributes that will be used to enforce attribute-based access control policies.",
                        htmlDescription:
                            "<p>Arbitraty tenant attributes that will be used to enforce attribute-based access control policies.</p>\n",
                        key: "attributes",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "map",
                                keyType: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                valueType: {
                                    type: "unknown",
                                },
                            },
                        },
                    },
                ],
            },
        },
        "type_:RoleAssignmentCreate": {
            description: undefined,
            name: "RoleAssignmentCreate",
            shape: {
                type: "object",
                extends: [],
                properties: [
                    {
                        description: "the role that will be assigned (accepts either the role id or the role key)",
                        htmlDescription:
                            "<p>the role that will be assigned (accepts either the role id or the role key)</p>\n",
                        key: "role",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description:
                            "the tenant the role is associated with (accepts either the tenant id or the tenant key)",
                        htmlDescription:
                            "<p>the tenant the role is associated with (accepts either the tenant id or the tenant key)</p>\n",
                        key: "tenant",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description:
                            "the user the role will be assigned to (accepts either the user id or the user key)",
                        htmlDescription:
                            "<p>the user the role will be assigned to (accepts either the user id or the user key)</p>\n",
                        key: "user",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                ],
            },
        },
        "type_:RoleAssignmentRemove": {
            description: undefined,
            name: "RoleAssignmentRemove",
            shape: {
                type: "object",
                extends: [],
                properties: [
                    {
                        description: "the role that will be unassigned (accepts either the role id or the role key)",
                        htmlDescription:
                            "<p>the role that will be unassigned (accepts either the role id or the role key)</p>\n",
                        key: "role",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description:
                            "the tenant the role is associated with (accepts either the tenant id or the tenant key)",
                        htmlDescription:
                            "<p>the tenant the role is associated with (accepts either the tenant id or the tenant key)</p>\n",
                        key: "tenant",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description:
                            "the user the role will be unassigned from (accepts either the user id or the user key)",
                        htmlDescription:
                            "<p>the user the role will be unassigned from (accepts either the user id or the user key)</p>\n",
                        key: "user",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                ],
            },
        },
        "type_:ActionBlockEditable": {
            description: undefined,
            name: "ActionBlockEditable",
            shape: {
                type: "object",
                extends: [],
                properties: [
                    {
                        description: "a more descriptive name for the action",
                        htmlDescription: "<p>a more descriptive name for the action</p>\n",
                        key: "name",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "string",
                                },
                            },
                        },
                    },
                    {
                        description:
                            "optional description string explaining what this action represents in your system",
                        htmlDescription:
                            "<p>optional description string explaining what this action represents in your system</p>\n",
                        key: "description",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "string",
                                },
                            },
                        },
                    },
                    {
                        description: undefined,
                        key: "attributes",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "map",
                                keyType: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                valueType: {
                                    type: "unknown",
                                },
                            },
                        },
                    },
                ],
            },
        },
        "type_:ActionBlockRead": {
            description: undefined,
            name: "ActionBlockRead",
            shape: {
                type: "object",
                extends: [],
                properties: [
                    {
                        description: "a more descriptive name for the action",
                        htmlDescription: "<p>a more descriptive name for the action</p>\n",
                        key: "name",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "string",
                                },
                            },
                        },
                    },
                    {
                        description:
                            "optional description string explaining what this action represents in your system",
                        htmlDescription:
                            "<p>optional description string explaining what this action represents in your system</p>\n",
                        key: "description",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "string",
                                },
                            },
                        },
                    },
                    {
                        description: undefined,
                        key: "attributes",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "map",
                                keyType: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                valueType: {
                                    type: "unknown",
                                },
                            },
                        },
                    },
                    {
                        description: "Unique id of the action",
                        htmlDescription: "<p>Unique id of the action</p>\n",
                        key: "id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "action key",
                        htmlDescription: "<p>action key</p>\n",
                        key: "key",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "string",
                                },
                            },
                        },
                    },
                ],
            },
        },
        "type_:AttributeBlockEditable": {
            description: undefined,
            name: "AttributeBlockEditable",
            shape: {
                type: "object",
                extends: [],
                properties: [
                    {
                        description:
                            "The type of the attribute, we currently support: `bool`, `number` (ints, floats), `time` (a timestamp), `string`, and `json`.",
                        htmlDescription:
                            "<p>The type of the attribute, we currently support: <code>bool</code>, <code>number</code> (ints, floats), <code>time</code> (a timestamp), <code>string</code>, and <code>json</code>.</p>\n",
                        key: "type",
                        valueType: {
                            type: "id",
                            value: "type_:AttributeType",
                        },
                    },
                    {
                        description: "optional description string explaining what data this attribute will store",
                        htmlDescription:
                            "<p>optional description string explaining what data this attribute will store</p>\n",
                        key: "description",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "string",
                                },
                            },
                        },
                    },
                ],
            },
        },
        "type_:AttributeBlockRead": {
            description: undefined,
            name: "AttributeBlockRead",
            shape: {
                type: "object",
                extends: [],
                properties: [
                    {
                        description:
                            "The type of the attribute, we currently support: `bool`, `number` (ints, floats), `time` (a timestamp), `string`, and `json`.",
                        htmlDescription:
                            "<p>The type of the attribute, we currently support: <code>bool</code>, <code>number</code> (ints, floats), <code>time</code> (a timestamp), <code>string</code>, and <code>json</code>.</p>\n",
                        key: "type",
                        valueType: {
                            type: "id",
                            value: "type_:AttributeType",
                        },
                    },
                    {
                        description: "optional description string explaining what data this attribute will store",
                        htmlDescription:
                            "<p>optional description string explaining what data this attribute will store</p>\n",
                        key: "description",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "string",
                                },
                            },
                        },
                    },
                    {
                        description: "Unique id of the attribute",
                        htmlDescription: "<p>Unique id of the attribute</p>\n",
                        key: "id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "action key",
                        htmlDescription: "<p>action key</p>\n",
                        key: "key",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "string",
                                },
                            },
                        },
                    },
                ],
            },
        },
        "type_:AttributeType": {
            description: "supported attribute primitives",
            htmlDescription: "<p>supported attribute primitives</p>\n",
            name: "AttributeType",
            shape: {
                type: "enum",
                values: [
                    {
                        description: undefined,
                        value: "bool",
                    },
                    {
                        description: undefined,
                        value: "number",
                    },
                    {
                        description: undefined,
                        value: "string",
                    },
                    {
                        description: undefined,
                        value: "time",
                    },
                    {
                        description: undefined,
                        value: "array",
                    },
                    {
                        description: undefined,
                        value: "json",
                    },
                ],
            },
        },
        "type_:BulkRoleAssignmentReport": {
            description: undefined,
            name: "BulkRoleAssignmentReport",
            shape: {
                type: "object",
                extends: [],
                properties: [
                    {
                        description: undefined,
                        key: "assignments_created",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "integer",
                                },
                            },
                        },
                    },
                ],
            },
        },
        "type_:BulkRoleUnAssignmentReport": {
            description: undefined,
            name: "BulkRoleUnAssignmentReport",
            shape: {
                type: "object",
                extends: [],
                properties: [
                    {
                        description: undefined,
                        key: "assignments_removed",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "integer",
                                },
                            },
                        },
                    },
                ],
            },
        },
        "type_:ConditionSetRead": {
            description: undefined,
            name: "ConditionSetRead",
            shape: {
                type: "object",
                extends: [],
                properties: [
                    {
                        description:
                            "A unique id by which Permit will identify the condition set. The key will be used as the generated rego rule name.",
                        htmlDescription:
                            "<p>A unique id by which Permit will identify the condition set. The key will be used as the generated rego rule name.</p>\n",
                        key: "key",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "the type of the set: UserSet or ResourceSet",
                        htmlDescription: "<p>the type of the set: UserSet or ResourceSet</p>\n",
                        key: "type",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "id",
                                value: "type_:ConditionSetType",
                            },
                        },
                    },
                    {
                        description: "whether the set was autogenerated by the system.",
                        htmlDescription: "<p>whether the set was autogenerated by the system.</p>\n",
                        key: "autogenerated",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "boolean",
                                },
                            },
                        },
                    },
                    {
                        description: "For ResourceSets, the id of the base resource.",
                        htmlDescription: "<p>For ResourceSets, the id of the base resource.</p>\n",
                        key: "resource_id",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "id",
                                value: "type_:ConditionSetReadResourceId",
                            },
                        },
                    },
                    {
                        description: "Unique id of the condition set",
                        htmlDescription: "<p>Unique id of the condition set</p>\n",
                        key: "id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the organization that the condition set belongs to.",
                        htmlDescription: "<p>Unique id of the organization that the condition set belongs to.</p>\n",
                        key: "organization_id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the project that the condition set belongs to.",
                        htmlDescription: "<p>Unique id of the project that the condition set belongs to.</p>\n",
                        key: "project_id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the environment that the condition set belongs to.",
                        htmlDescription: "<p>Unique id of the environment that the condition set belongs to.</p>\n",
                        key: "environment_id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Date and time when the condition set was created (ISO_8601 format).",
                        htmlDescription: "<p>Date and time when the condition set was created (ISO_8601 format).</p>\n",
                        key: "created_at",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description:
                            "Date and time when the condition set was last updated/modified (ISO_8601 format).",
                        htmlDescription:
                            "<p>Date and time when the condition set was last updated/modified (ISO_8601 format).</p>\n",
                        key: "updated_at",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: undefined,
                        key: "resource",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "id",
                                value: "type_:ResourceRead",
                            },
                        },
                    },
                    {
                        description: "A descriptive name for the set, i.e: 'US based employees' or 'Users behind VPN'",
                        htmlDescription:
                            "<p>A descriptive name for the set, i.e: &#39;US based employees&#39; or &#39;Users behind VPN&#39;</p>\n",
                        key: "name",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "an optional longer description of the set",
                        htmlDescription: "<p>an optional longer description of the set</p>\n",
                        key: "description",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "string",
                                },
                            },
                        },
                    },
                    {
                        description: "a boolean expression that consists of multiple conditions, with and/or logic.",
                        htmlDescription:
                            "<p>a boolean expression that consists of multiple conditions, with and/or logic.</p>\n",
                        key: "conditions",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "map",
                                keyType: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                valueType: {
                                    type: "unknown",
                                },
                            },
                        },
                    },
                    {
                        description: "Parent Condition Set",
                        htmlDescription: "<p>Parent Condition Set</p>\n",
                        key: "parent_id",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "id",
                                value: "type_:ConditionSetReadParentId",
                            },
                        },
                    },
                ],
            },
        },
        "type_:ConditionSetReadResourceId": {
            description: "For ResourceSets, the id of the base resource.",
            htmlDescription: "<p>For ResourceSets, the id of the base resource.</p>\n",
            name: "ConditionSetReadResourceId",
            shape: {
                type: "undiscriminatedUnion",
                variants: [
                    {
                        description: undefined,
                        type: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: undefined,
                        type: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                ],
            },
        },
        "type_:ConditionSetReadParentId": {
            description: "Parent Condition Set",
            htmlDescription: "<p>Parent Condition Set</p>\n",
            name: "ConditionSetReadParentId",
            shape: {
                type: "undiscriminatedUnion",
                variants: [
                    {
                        description: undefined,
                        type: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: undefined,
                        type: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                ],
            },
        },
        "type_:ConditionSetRuleRead": {
            description: undefined,
            name: "ConditionSetRuleRead",
            shape: {
                type: "object",
                extends: [],
                properties: [
                    {
                        description: "Unique id of the condition set rule",
                        htmlDescription: "<p>Unique id of the condition set rule</p>\n",
                        key: "id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "A unique id by which Permit will identify this condition set rule.",
                        htmlDescription: "<p>A unique id by which Permit will identify this condition set rule.</p>\n",
                        key: "key",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description:
                            "the userset that is currently granted permissions, i.e: all the users matching this rule are granted the permission on the resourceset",
                        htmlDescription:
                            "<p>the userset that is currently granted permissions, i.e: all the users matching this rule are granted the permission on the resourceset</p>\n",
                        key: "user_set",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "a permission that is currently granted to the userset *on* the resourceset.",
                        htmlDescription:
                            "<p>a permission that is currently granted to the userset <em>on</em> the resourceset.</p>\n",
                        key: "permission",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description:
                            "the resourceset that represents the resources that are currently granted for access, i.e: all the resources matching this rule can be accessed by the userset to perform the granted *permission*",
                        htmlDescription:
                            "<p>the resourceset that represents the resources that are currently granted for access, i.e: all the resources matching this rule can be accessed by the userset to perform the granted <em>permission</em></p>\n",
                        key: "resource_set",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the organization that the condition set rule belongs to.",
                        htmlDescription:
                            "<p>Unique id of the organization that the condition set rule belongs to.</p>\n",
                        key: "organization_id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the project that the condition set rule belongs to.",
                        htmlDescription: "<p>Unique id of the project that the condition set rule belongs to.</p>\n",
                        key: "project_id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the environment that the condition set rule belongs to.",
                        htmlDescription:
                            "<p>Unique id of the environment that the condition set rule belongs to.</p>\n",
                        key: "environment_id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Date and time when the condition set rule was created (ISO_8601 format).",
                        htmlDescription:
                            "<p>Date and time when the condition set rule was created (ISO_8601 format).</p>\n",
                        key: "created_at",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description:
                            "Date and time when the condition set rule was last updated/modified (ISO_8601 format).",
                        htmlDescription:
                            "<p>Date and time when the condition set rule was last updated/modified (ISO_8601 format).</p>\n",
                        key: "updated_at",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                ],
            },
        },
        "type_:ConditionSetType": {
            description: "An enumeration.",
            htmlDescription: "<p>An enumeration.</p>\n",
            name: "ConditionSetType",
            shape: {
                type: "enum",
                values: [
                    {
                        description: undefined,
                        value: "userset",
                    },
                    {
                        description: undefined,
                        value: "resourceset",
                    },
                ],
            },
        },
        "type_:EnvironmentCopyScope": {
            description: undefined,
            name: "EnvironmentCopyScope",
            shape: {
                type: "object",
                extends: [],
                properties: [
                    {
                        description: "Resources to copy",
                        htmlDescription: "<p>Resources to copy</p>\n",
                        key: "resources",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "id",
                                value: "type_:EnvironmentCopyScopeFilters",
                            },
                        },
                    },
                    {
                        description: "Roles to copy",
                        htmlDescription: "<p>Roles to copy</p>\n",
                        key: "roles",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "id",
                                value: "type_:EnvironmentCopyScopeFilters",
                            },
                        },
                    },
                    {
                        description: "User sets to copy",
                        htmlDescription: "<p>User sets to copy</p>\n",
                        key: "user_sets",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "id",
                                value: "type_:EnvironmentCopyScopeFilters",
                            },
                        },
                    },
                    {
                        description: "Resource sets to copy",
                        htmlDescription: "<p>Resource sets to copy</p>\n",
                        key: "resource_sets",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "id",
                                value: "type_:EnvironmentCopyScopeFilters",
                            },
                        },
                    },
                ],
            },
        },
        "type_:EnvironmentCopyScopeFilters": {
            description: undefined,
            name: "EnvironmentCopyScopeFilters",
            shape: {
                type: "object",
                extends: [],
                properties: [
                    {
                        description: "Objects to include (use * as wildcard)",
                        htmlDescription: "<p>Objects to include (use * as wildcard)</p>\n",
                        key: "include",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "list",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                            },
                        },
                    },
                    {
                        description: "Object to exclude (use * as wildcard)",
                        htmlDescription: "<p>Object to exclude (use * as wildcard)</p>\n",
                        key: "exclude",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "list",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                            },
                        },
                    },
                ],
            },
        },
        "type_:EnvironmentCopyTarget": {
            description: undefined,
            name: "EnvironmentCopyTarget",
            shape: {
                type: "object",
                extends: [],
                properties: [
                    {
                        description: "Identifier of an existing environment to copy into",
                        htmlDescription: "<p>Identifier of an existing environment to copy into</p>\n",
                        key: "existing",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "string",
                                },
                            },
                        },
                    },
                    {
                        description:
                            "Description of the environment to create. This environment must not already exist.",
                        htmlDescription:
                            "<p>Description of the environment to create. This environment must not already exist.</p>\n",
                        key: "new",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "id",
                                value: "type_:EnvironmentCreate",
                            },
                        },
                    },
                ],
            },
        },
        "type_:EnvironmentRead": {
            description: undefined,
            name: "EnvironmentRead",
            shape: {
                type: "object",
                extends: [],
                properties: [
                    {
                        description:
                            "A URL-friendly name of the environment (i.e: slug). You will be able to query later using this key instead of the id (UUID) of the environment.",
                        htmlDescription:
                            "<p>A URL-friendly name of the environment (i.e: slug). You will be able to query later using this key instead of the id (UUID) of the environment.</p>\n",
                        key: "key",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the environment",
                        htmlDescription: "<p>Unique id of the environment</p>\n",
                        key: "id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the organization that the environment belongs to.",
                        htmlDescription: "<p>Unique id of the organization that the environment belongs to.</p>\n",
                        key: "organization_id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the project that the environment belongs to.",
                        htmlDescription: "<p>Unique id of the project that the environment belongs to.</p>\n",
                        key: "project_id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Date and time when the environment was created (ISO_8601 format).",
                        htmlDescription: "<p>Date and time when the environment was created (ISO_8601 format).</p>\n",
                        key: "created_at",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Date and time when the environment was last updated/modified (ISO_8601 format).",
                        htmlDescription:
                            "<p>Date and time when the environment was last updated/modified (ISO_8601 format).</p>\n",
                        key: "updated_at",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "The name of the environment",
                        htmlDescription: "<p>The name of the environment</p>\n",
                        key: "name",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "an optional longer description of the environment",
                        htmlDescription: "<p>an optional longer description of the environment</p>\n",
                        key: "description",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "string",
                                },
                            },
                        },
                    },
                    {
                        description: "when using gitops feature, an optional branch name for the environment",
                        htmlDescription:
                            "<p>when using gitops feature, an optional branch name for the environment</p>\n",
                        key: "custom_branch_name",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "string",
                                },
                            },
                        },
                    },
                    {
                        description: "jwks for element frontend only login",
                        htmlDescription: "<p>jwks for element frontend only login</p>\n",
                        key: "jwks",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "id",
                                value: "type_:JwksObj",
                            },
                        },
                    },
                    {
                        description: "the settings for this environment",
                        htmlDescription: "<p>the settings for this environment</p>\n",
                        key: "settings",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "map",
                                keyType: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                valueType: {
                                    type: "unknown",
                                },
                            },
                        },
                    },
                ],
            },
        },
        "type_:EnvironmentStats": {
            description: undefined,
            name: "EnvironmentStats",
            shape: {
                type: "object",
                extends: [],
                properties: [
                    {
                        description:
                            "A URL-friendly name of the environment (i.e: slug). You will be able to query later using this key instead of the id (UUID) of the environment.",
                        htmlDescription:
                            "<p>A URL-friendly name of the environment (i.e: slug). You will be able to query later using this key instead of the id (UUID) of the environment.</p>\n",
                        key: "key",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the environment",
                        htmlDescription: "<p>Unique id of the environment</p>\n",
                        key: "id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the organization that the environment belongs to.",
                        htmlDescription: "<p>Unique id of the organization that the environment belongs to.</p>\n",
                        key: "organization_id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the project that the environment belongs to.",
                        htmlDescription: "<p>Unique id of the project that the environment belongs to.</p>\n",
                        key: "project_id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Date and time when the environment was created (ISO_8601 format).",
                        htmlDescription: "<p>Date and time when the environment was created (ISO_8601 format).</p>\n",
                        key: "created_at",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Date and time when the environment was last updated/modified (ISO_8601 format).",
                        htmlDescription:
                            "<p>Date and time when the environment was last updated/modified (ISO_8601 format).</p>\n",
                        key: "updated_at",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "The name of the environment",
                        htmlDescription: "<p>The name of the environment</p>\n",
                        key: "name",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "an optional longer description of the environment",
                        htmlDescription: "<p>an optional longer description of the environment</p>\n",
                        key: "description",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "string",
                                },
                            },
                        },
                    },
                    {
                        description: "when using gitops feature, an optional branch name for the environment",
                        htmlDescription:
                            "<p>when using gitops feature, an optional branch name for the environment</p>\n",
                        key: "custom_branch_name",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "string",
                                },
                            },
                        },
                    },
                    {
                        description: "jwks for element frontend only login",
                        htmlDescription: "<p>jwks for element frontend only login</p>\n",
                        key: "jwks",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "id",
                                value: "type_:JwksObj",
                            },
                        },
                    },
                    {
                        description: "the settings for this environment",
                        htmlDescription: "<p>the settings for this environment</p>\n",
                        key: "settings",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "map",
                                keyType: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                valueType: {
                                    type: "unknown",
                                },
                            },
                        },
                    },
                    {
                        description: undefined,
                        key: "pdp_configs",
                        valueType: {
                            type: "list",
                            itemType: {
                                type: "id",
                                value: "type_:PdpConfigRead",
                            },
                        },
                    },
                    {
                        description: undefined,
                        key: "stats",
                        valueType: {
                            type: "id",
                            value: "type_:Statistics",
                        },
                    },
                ],
            },
        },
        "type_:HttpValidationError": {
            description: undefined,
            name: "HttpValidationError",
            shape: {
                type: "object",
                extends: [],
                properties: [
                    {
                        description: undefined,
                        key: "detail",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "list",
                                itemType: {
                                    type: "id",
                                    value: "type_:ValidationError",
                                },
                            },
                        },
                    },
                ],
            },
        },
        "type_:IdentityRead": {
            description: undefined,
            name: "IdentityRead",
            shape: {
                type: "object",
                extends: [],
                properties: [
                    {
                        description:
                            "Unique User Id of this identity in the identity provider (including the provider type)",
                        htmlDescription:
                            "<p>Unique User Id of this identity in the identity provider (including the provider type)</p>\n",
                        key: "user_id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "The identity provider type this identity came from",
                        htmlDescription: "<p>The identity provider type this identity came from</p>\n",
                        key: "provider",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description:
                            "Unique User Id of this identity in the identity provider (NOT including the provider type)",
                        htmlDescription:
                            "<p>Unique User Id of this identity in the identity provider (NOT including the provider type)</p>\n",
                        key: "sub",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Email connected to this account identity",
                        htmlDescription: "<p>Email connected to this account identity</p>\n",
                        key: "email",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description:
                            "Whether this email address connected to this account identity is verified or not. For social providers like 'Login with Google' this is done automatically, otherwise we will send the user a verification link in email.",
                        htmlDescription:
                            "<p>Whether this email address connected to this account identity is verified or not. For social providers like &#39;Login with Google&#39; this is done automatically, otherwise we will send the user a verification link in email.</p>\n",
                        key: "email_verified",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "boolean",
                            },
                        },
                    },
                    {
                        description:
                            "Raw user info json coming from our identity provider and matching a specific account identity",
                        htmlDescription:
                            "<p>Raw user info json coming from our identity provider and matching a specific account identity</p>\n",
                        key: "auth0_info",
                        valueType: {
                            type: "map",
                            keyType: {
                                type: "primitive",
                                value: {
                                    type: "string",
                                },
                            },
                            valueType: {
                                type: "unknown",
                            },
                        },
                    },
                ],
            },
        },
        "type_:InviteRead": {
            description: undefined,
            name: "InviteRead",
            shape: {
                type: "object",
                extends: [],
                properties: [
                    {
                        description: "Unique id of the invite",
                        htmlDescription: "<p>Unique id of the invite</p>\n",
                        key: "member_id",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "string",
                                },
                            },
                        },
                    },
                    {
                        description: "The invited member's email address",
                        htmlDescription: "<p>The invited member&#39;s email address</p>\n",
                        key: "email",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "The role the member will be assigned with",
                        htmlDescription: "<p>The role the member will be assigned with</p>\n",
                        key: "role",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "id",
                                value: "type_:MemberAccessLevel",
                            },
                        },
                    },
                    {
                        description: "Unique id of the invite",
                        htmlDescription: "<p>Unique id of the invite</p>\n",
                        key: "id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the organization that the invite belongs to.",
                        htmlDescription: "<p>Unique id of the organization that the invite belongs to.</p>\n",
                        key: "organization_id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "The invite code that is sent to the member's email",
                        htmlDescription: "<p>The invite code that is sent to the member&#39;s email</p>\n",
                        key: "invite_code",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Date and time when the invite was created (ISO_8601 format).",
                        htmlDescription: "<p>Date and time when the invite was created (ISO_8601 format).</p>\n",
                        key: "created_at",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "The status of the invite (pending, failed, etc)",
                        htmlDescription: "<p>The status of the invite (pending, failed, etc)</p>\n",
                        key: "status",
                        valueType: {
                            type: "id",
                            value: "type_:InviteStatus",
                        },
                    },
                    {
                        description: "if failed, the reason the invitation failed",
                        htmlDescription: "<p>if failed, the reason the invitation failed</p>\n",
                        key: "failed_reason",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "string",
                                },
                            },
                        },
                    },
                ],
            },
        },
        "type_:InviteStatus": {
            description: "An enumeration.",
            htmlDescription: "<p>An enumeration.</p>\n",
            name: "InviteStatus",
            shape: {
                type: "enum",
                values: [
                    {
                        description: undefined,
                        value: "pending",
                    },
                    {
                        description: undefined,
                        value: "accepted",
                    },
                    {
                        description: undefined,
                        value: "failed",
                    },
                    {
                        description: undefined,
                        value: "canceled",
                    },
                ],
            },
        },
        "type_:JwksObj": {
            description: undefined,
            name: "JwksObj",
            shape: {
                type: "object",
                extends: [],
                properties: [
                    {
                        description: "The keys to match against the request headers",
                        htmlDescription: "<p>The keys to match against the request headers</p>\n",
                        key: "keys",
                        valueType: {
                            type: "list",
                            itemType: {
                                type: "map",
                                keyType: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                valueType: {
                                    type: "unknown",
                                },
                            },
                        },
                    },
                ],
            },
        },
        "type_:MemberAccessLevel": {
            description: "An enumeration.",
            htmlDescription: "<p>An enumeration.</p>\n",
            name: "MemberAccessLevel",
            shape: {
                type: "enum",
                values: [
                    {
                        description: undefined,
                        value: "admin",
                    },
                    {
                        description: undefined,
                        value: "write",
                    },
                    {
                        description: undefined,
                        value: "read",
                    },
                    {
                        description: undefined,
                        value: "no_access",
                    },
                ],
            },
        },
        "type_:MemberAccessObj": {
            description: "An enumeration.",
            htmlDescription: "<p>An enumeration.</p>\n",
            name: "MemberAccessObj",
            shape: {
                type: "enum",
                values: [
                    {
                        description: undefined,
                        value: "org",
                    },
                    {
                        description: undefined,
                        value: "project",
                    },
                    {
                        description: undefined,
                        value: "env",
                    },
                ],
            },
        },
        "type_:OnboardingStep": {
            description: "An enumeration.",
            htmlDescription: "<p>An enumeration.</p>\n",
            name: "OnboardingStep",
            shape: {
                type: "enum",
                values: [
                    {
                        description: undefined,
                        value: "create_organization",
                    },
                    {
                        description: undefined,
                        value: "create_project",
                    },
                    {
                        description: undefined,
                        value: "create_resource",
                    },
                    {
                        description: undefined,
                        value: "create_actions",
                    },
                    {
                        description: undefined,
                        value: "assign_permissions",
                    },
                    {
                        description: undefined,
                        value: "assign_user_roles",
                    },
                    {
                        description: undefined,
                        value: "connect_sdk",
                    },
                    {
                        description: undefined,
                        value: "done",
                    },
                ],
            },
        },
        "type_:OrgMemberReadWithGrants": {
            description: undefined,
            name: "OrgMemberReadWithGrants",
            shape: {
                type: "object",
                extends: [],
                properties: [
                    {
                        description: "Unique id of the account member",
                        htmlDescription: "<p>Unique id of the account member</p>\n",
                        key: "id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Email of the user controlling this account",
                        htmlDescription: "<p>Email of the user controlling this account</p>\n",
                        key: "email",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description:
                            "Whether this email address is verified or not. For social providers like 'Login with Google' this is done automatically, otherwise we will send the user a verification link in email.",
                        htmlDescription:
                            "<p>Whether this email address is verified or not. For social providers like &#39;Login with Google&#39; this is done automatically, otherwise we will send the user a verification link in email.</p>\n",
                        key: "email_verified",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "boolean",
                            },
                        },
                    },
                    {
                        description: "Name of this user",
                        htmlDescription: "<p>Name of this user</p>\n",
                        key: "name",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "string",
                                },
                            },
                        },
                    },
                    {
                        description: "First name of the user",
                        htmlDescription: "<p>First name of the user</p>\n",
                        key: "given_name",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "string",
                                },
                            },
                        },
                    },
                    {
                        description: "Last name of the user",
                        htmlDescription: "<p>Last name of the user</p>\n",
                        key: "family_name",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "string",
                                },
                            },
                        },
                    },
                    {
                        description: "URL to picture, photo, or avatar of the user that controls this account.",
                        htmlDescription:
                            "<p>URL to picture, photo, or avatar of the user that controls this account.</p>\n",
                        key: "picture",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "string",
                                },
                            },
                        },
                    },
                    {
                        description: "Whether or not this user has special access to permit.io organizations",
                        htmlDescription:
                            "<p>Whether or not this user has special access to permit.io organizations</p>\n",
                        key: "is_superuser",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "boolean",
                            },
                        },
                    },
                    {
                        description:
                            "Whether or not this user is currently onboarding, needs to be replaced by a user journey object",
                        htmlDescription:
                            "<p>Whether or not this user is currently onboarding, needs to be replaced by a user journey object</p>\n",
                        key: "is_onboarding",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "boolean",
                            },
                        },
                    },
                    {
                        description: "the step the user is currently going through in onboarding",
                        htmlDescription: "<p>the step the user is currently going through in onboarding</p>\n",
                        key: "onboarding_step",
                        valueType: {
                            type: "id",
                            value: "type_:OnboardingStep",
                        },
                    },
                    {
                        description: "Date and time when the account member was created (ISO_8601 format).",
                        htmlDescription:
                            "<p>Date and time when the account member was created (ISO_8601 format).</p>\n",
                        key: "created_at",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Last date and time this user logged in (ISO_8601 format).",
                        htmlDescription: "<p>Last date and time this user logged in (ISO_8601 format).</p>\n",
                        key: "last_login",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "string",
                                },
                            },
                        },
                    },
                    {
                        description: "Last IP address from which this user logged in.",
                        htmlDescription: "<p>Last IP address from which this user logged in.</p>\n",
                        key: "last_ip",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "string",
                                },
                            },
                        },
                    },
                    {
                        description: "Total number of logins this user has performed.",
                        htmlDescription: "<p>Total number of logins this user has performed.</p>\n",
                        key: "logins_count",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "integer",
                                },
                            },
                        },
                    },
                    {
                        description: undefined,
                        key: "identities",
                        valueType: {
                            type: "list",
                            itemType: {
                                type: "id",
                                value: "type_:IdentityRead",
                            },
                        },
                    },
                    {
                        description: undefined,
                        key: "invite",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "id",
                                value: "type_:InviteRead",
                            },
                        },
                    },
                    {
                        description: "Custom permit.io dashboard settings, such as preferred theme, etc.",
                        htmlDescription: "<p>Custom permit.io dashboard settings, such as preferred theme, etc.</p>\n",
                        key: "settings",
                        valueType: {
                            type: "map",
                            keyType: {
                                type: "primitive",
                                value: {
                                    type: "string",
                                },
                            },
                            valueType: {
                                type: "unknown",
                            },
                        },
                    },
                    {
                        description: undefined,
                        key: "grants",
                        valueType: {
                            type: "list",
                            itemType: {
                                type: "id",
                                value: "type_:Permission",
                            },
                        },
                    },
                ],
            },
        },
        "type_:OrganizationRead": {
            description: undefined,
            name: "OrganizationRead",
            shape: {
                type: "object",
                extends: [],
                properties: [
                    {
                        description:
                            "A URL-friendly name of the organization (i.e: slug). You will be able to query later using this key instead of the id (UUID) of the organization.",
                        htmlDescription:
                            "<p>A URL-friendly name of the organization (i.e: slug). You will be able to query later using this key instead of the id (UUID) of the organization.</p>\n",
                        key: "key",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the organization",
                        htmlDescription: "<p>Unique id of the organization</p>\n",
                        key: "id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Is this an enterprise account?",
                        htmlDescription: "<p>Is this an enterprise account?</p>\n",
                        key: "is_enterprise",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "boolean",
                            },
                        },
                    },
                    {
                        description: "Date and time when the organization was created (ISO_8601 format).",
                        htmlDescription: "<p>Date and time when the organization was created (ISO_8601 format).</p>\n",
                        key: "created_at",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Date and time when the organization was last updated/modified (ISO_8601 format).",
                        htmlDescription:
                            "<p>Date and time when the organization was last updated/modified (ISO_8601 format).</p>\n",
                        key: "updated_at",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "The name of the organization, usually it's your company's name.",
                        htmlDescription:
                            "<p>The name of the organization, usually it&#39;s your company&#39;s name.</p>\n",
                        key: "name",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "the settings for this project",
                        htmlDescription: "<p>the settings for this project</p>\n",
                        key: "settings",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "map",
                                keyType: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                valueType: {
                                    type: "unknown",
                                },
                            },
                        },
                    },
                ],
            },
        },
        "type_:OrganizationReadWithApiKey": {
            description: undefined,
            name: "OrganizationReadWithApiKey",
            shape: {
                type: "object",
                extends: [],
                properties: [
                    {
                        description:
                            "A URL-friendly name of the organization (i.e: slug). You will be able to query later using this key instead of the id (UUID) of the organization.",
                        htmlDescription:
                            "<p>A URL-friendly name of the organization (i.e: slug). You will be able to query later using this key instead of the id (UUID) of the organization.</p>\n",
                        key: "key",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the organization",
                        htmlDescription: "<p>Unique id of the organization</p>\n",
                        key: "id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Is this an enterprise account?",
                        htmlDescription: "<p>Is this an enterprise account?</p>\n",
                        key: "is_enterprise",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "boolean",
                            },
                        },
                    },
                    {
                        description: "Date and time when the organization was created (ISO_8601 format).",
                        htmlDescription: "<p>Date and time when the organization was created (ISO_8601 format).</p>\n",
                        key: "created_at",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Date and time when the organization was last updated/modified (ISO_8601 format).",
                        htmlDescription:
                            "<p>Date and time when the organization was last updated/modified (ISO_8601 format).</p>\n",
                        key: "updated_at",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "The name of the organization, usually it's your company's name.",
                        htmlDescription:
                            "<p>The name of the organization, usually it&#39;s your company&#39;s name.</p>\n",
                        key: "name",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "the settings for this project",
                        htmlDescription: "<p>the settings for this project</p>\n",
                        key: "settings",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "map",
                                keyType: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                valueType: {
                                    type: "unknown",
                                },
                            },
                        },
                    },
                    {
                        description: undefined,
                        key: "api_key_id",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "string",
                                },
                            },
                        },
                    },
                    {
                        description: undefined,
                        key: "api_key_secret",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "string",
                                },
                            },
                        },
                    },
                ],
            },
        },
        "type_:PdpConfigRead": {
            description: undefined,
            name: "PdpConfigRead",
            shape: {
                type: "object",
                extends: [],
                properties: [
                    {
                        description: undefined,
                        key: "id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: undefined,
                        key: "name",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "string",
                                },
                            },
                        },
                    },
                    {
                        description: "Unique id of the organization that the pdp_config belongs to.",
                        htmlDescription: "<p>Unique id of the organization that the pdp_config belongs to.</p>\n",
                        key: "organization_id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the project that the pdp_config belongs to.",
                        htmlDescription: "<p>Unique id of the project that the pdp_config belongs to.</p>\n",
                        key: "project_id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the environment that the pdp_config belongs to.",
                        htmlDescription: "<p>Unique id of the environment that the pdp_config belongs to.</p>\n",
                        key: "environment_id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: undefined,
                        key: "client_secret",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                ],
            },
        },
        "type_:PaginatedResultConditionSetRead": {
            description: undefined,
            name: "PaginatedResultConditionSetRead",
            shape: {
                type: "object",
                extends: [],
                properties: [
                    {
                        description: "List of Condition Sets",
                        htmlDescription: "<p>List of Condition Sets</p>\n",
                        key: "data",
                        valueType: {
                            type: "list",
                            itemType: {
                                type: "id",
                                value: "type_:ConditionSetRead",
                            },
                        },
                    },
                    {
                        description: undefined,
                        key: "total_count",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "integer",
                            },
                        },
                    },
                    {
                        description: undefined,
                        key: "page_count",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "integer",
                                },
                            },
                        },
                    },
                ],
            },
        },
        "type_:PaginatedResultResourceRead": {
            description: undefined,
            name: "PaginatedResultResourceRead",
            shape: {
                type: "object",
                extends: [],
                properties: [
                    {
                        description: "List of Resources",
                        htmlDescription: "<p>List of Resources</p>\n",
                        key: "data",
                        valueType: {
                            type: "list",
                            itemType: {
                                type: "id",
                                value: "type_:ResourceRead",
                            },
                        },
                    },
                    {
                        description: undefined,
                        key: "total_count",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "integer",
                            },
                        },
                    },
                    {
                        description: undefined,
                        key: "page_count",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "integer",
                                },
                            },
                        },
                    },
                ],
            },
        },
        "type_:PaginatedResultResourceRoleRead": {
            description: undefined,
            name: "PaginatedResultResourceRoleRead",
            shape: {
                type: "object",
                extends: [],
                properties: [
                    {
                        description: "List of Resource Roles",
                        htmlDescription: "<p>List of Resource Roles</p>\n",
                        key: "data",
                        valueType: {
                            type: "list",
                            itemType: {
                                type: "id",
                                value: "type_:ResourceRoleRead",
                            },
                        },
                    },
                    {
                        description: undefined,
                        key: "total_count",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "integer",
                            },
                        },
                    },
                    {
                        description: undefined,
                        key: "page_count",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "integer",
                                },
                            },
                        },
                    },
                ],
            },
        },
        "type_:PaginatedResultRoleRead": {
            description: undefined,
            name: "PaginatedResultRoleRead",
            shape: {
                type: "object",
                extends: [],
                properties: [
                    {
                        description: "List of Roles",
                        htmlDescription: "<p>List of Roles</p>\n",
                        key: "data",
                        valueType: {
                            type: "list",
                            itemType: {
                                type: "id",
                                value: "type_:RoleRead",
                            },
                        },
                    },
                    {
                        description: undefined,
                        key: "total_count",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "integer",
                            },
                        },
                    },
                    {
                        description: undefined,
                        key: "page_count",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "integer",
                                },
                            },
                        },
                    },
                ],
            },
        },
        "type_:PaginatedResultTenantRead": {
            description: undefined,
            name: "PaginatedResultTenantRead",
            shape: {
                type: "object",
                extends: [],
                properties: [
                    {
                        description: "List of Tenants",
                        htmlDescription: "<p>List of Tenants</p>\n",
                        key: "data",
                        valueType: {
                            type: "list",
                            itemType: {
                                type: "id",
                                value: "type_:TenantRead",
                            },
                        },
                    },
                    {
                        description: undefined,
                        key: "total_count",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "integer",
                            },
                        },
                    },
                    {
                        description: undefined,
                        key: "page_count",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "integer",
                                },
                            },
                        },
                    },
                ],
            },
        },
        "type_:PaginatedResultUserRead": {
            description: undefined,
            name: "PaginatedResultUserRead",
            shape: {
                type: "object",
                extends: [],
                properties: [
                    {
                        description: "List of Users",
                        htmlDescription: "<p>List of Users</p>\n",
                        key: "data",
                        valueType: {
                            type: "list",
                            itemType: {
                                type: "id",
                                value: "type_:UserRead",
                            },
                        },
                    },
                    {
                        description: undefined,
                        key: "total_count",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "integer",
                            },
                        },
                    },
                    {
                        description: undefined,
                        key: "page_count",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "integer",
                                },
                            },
                        },
                    },
                ],
            },
        },
        "type_:Permission": {
            description: undefined,
            name: "Permission",
            shape: {
                type: "object",
                extends: [],
                properties: [
                    {
                        description: undefined,
                        key: "organization_id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: undefined,
                        key: "project_id",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "string",
                                },
                            },
                        },
                    },
                    {
                        description: undefined,
                        key: "environment_id",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "string",
                                },
                            },
                        },
                    },
                    {
                        description: undefined,
                        key: "object_type",
                        valueType: {
                            type: "id",
                            value: "type_:MemberAccessObj",
                        },
                    },
                    {
                        description: undefined,
                        key: "access_level",
                        valueType: {
                            type: "id",
                            value: "type_:MemberAccessLevel",
                        },
                    },
                    {
                        description: undefined,
                        key: "organization_key",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "string",
                                },
                            },
                        },
                    },
                    {
                        description: undefined,
                        key: "project_key",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "string",
                                },
                            },
                        },
                    },
                    {
                        description: undefined,
                        key: "environment_key",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "string",
                                },
                            },
                        },
                    },
                    {
                        description: undefined,
                        key: "organization_name",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "string",
                                },
                            },
                        },
                    },
                    {
                        description: undefined,
                        key: "project_name",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "string",
                                },
                            },
                        },
                    },
                    {
                        description: undefined,
                        key: "environment_name",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "string",
                                },
                            },
                        },
                    },
                ],
            },
        },
        "type_:ProjectRead": {
            description: undefined,
            name: "ProjectRead",
            shape: {
                type: "object",
                extends: [],
                properties: [
                    {
                        description:
                            "A URL-friendly name of the project (i.e: slug). You will be able to query later using this key instead of the id (UUID) of the project.",
                        htmlDescription:
                            "<p>A URL-friendly name of the project (i.e: slug). You will be able to query later using this key instead of the id (UUID) of the project.</p>\n",
                        key: "key",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Optional namespace for URNs. If empty, URNs will be generated from project key.",
                        htmlDescription:
                            "<p>Optional namespace for URNs. If empty, URNs will be generated from project key.</p>\n",
                        key: "urn_namespace",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "string",
                                },
                            },
                        },
                    },
                    {
                        description: "Unique id of the project",
                        htmlDescription: "<p>Unique id of the project</p>\n",
                        key: "id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the organization that the project belongs to.",
                        htmlDescription: "<p>Unique id of the organization that the project belongs to.</p>\n",
                        key: "organization_id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Date and time when the project was created (ISO_8601 format).",
                        htmlDescription: "<p>Date and time when the project was created (ISO_8601 format).</p>\n",
                        key: "created_at",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Date and time when the project was last updated/modified (ISO_8601 format).",
                        htmlDescription:
                            "<p>Date and time when the project was last updated/modified (ISO_8601 format).</p>\n",
                        key: "updated_at",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "The name of the project",
                        htmlDescription: "<p>The name of the project</p>\n",
                        key: "name",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "a longer description outlining the project objectives",
                        htmlDescription: "<p>a longer description outlining the project objectives</p>\n",
                        key: "description",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "string",
                                },
                            },
                        },
                    },
                    {
                        description: "the settings for this project",
                        htmlDescription: "<p>the settings for this project</p>\n",
                        key: "settings",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "map",
                                keyType: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                valueType: {
                                    type: "unknown",
                                },
                            },
                        },
                    },
                    {
                        description: "the id of the policy repo to use for this project",
                        htmlDescription: "<p>the id of the policy repo to use for this project</p>\n",
                        key: "active_policy_repo_id",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "string",
                                },
                            },
                        },
                    },
                ],
            },
        },
        "type_:RelationsBlock": {
            description:
                "A actions definition block, typically contained within a resource type definition block.\nThe actions represents the ways you can interact with a protected resource.",
            htmlDescription:
                "<p>A actions definition block, typically contained within a resource type definition block.\nThe actions represents the ways you can interact with a protected resource.</p>\n",
            name: "RelationsBlock",
            shape: {
                type: "alias",
                value: {
                    type: "map",
                    keyType: {
                        type: "primitive",
                        value: {
                            type: "string",
                        },
                    },
                    valueType: {
                        type: "unknown",
                    },
                },
            },
        },
        "type_:ResourceActionGroupRead": {
            description: undefined,
            name: "ResourceActionGroupRead",
            shape: {
                type: "object",
                extends: [],
                properties: [
                    {
                        description: "The name of the action group",
                        htmlDescription: "<p>The name of the action group</p>\n",
                        key: "name",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description:
                            "An optional longer description of what this action group represents in your system",
                        htmlDescription:
                            "<p>An optional longer description of what this action group represents in your system</p>\n",
                        key: "description",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "string",
                                },
                            },
                        },
                    },
                    {
                        description:
                            "optional dictionary of key-value pairs that can be used to store arbitrary metadata about this action group. This metadata can be used to filter action groups using query parameters with attr_ prefix",
                        htmlDescription:
                            "<p>optional dictionary of key-value pairs that can be used to store arbitrary metadata about this action group. This metadata can be used to filter action groups using query parameters with attr_ prefix</p>\n",
                        key: "attributes",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "map",
                                keyType: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                valueType: {
                                    type: "unknown",
                                },
                            },
                        },
                    },
                    {
                        description: undefined,
                        key: "actions",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "list",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                            },
                        },
                    },
                    {
                        description:
                            "A URL-friendly name of the action group (i.e: slug). You will be able to query later using this key instead of the id (UUID) of the action group.",
                        htmlDescription:
                            "<p>A URL-friendly name of the action group (i.e: slug). You will be able to query later using this key instead of the id (UUID) of the action group.</p>\n",
                        key: "key",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the action group",
                        htmlDescription: "<p>Unique id of the action group</p>\n",
                        key: "id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the organization that the action group belongs to.",
                        htmlDescription: "<p>Unique id of the organization that the action group belongs to.</p>\n",
                        key: "organization_id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the project that the action group belongs to.",
                        htmlDescription: "<p>Unique id of the project that the action group belongs to.</p>\n",
                        key: "project_id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the environment that the action group belongs to.",
                        htmlDescription: "<p>Unique id of the environment that the action group belongs to.</p>\n",
                        key: "environment_id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the resource that the action group belongs to.",
                        htmlDescription: "<p>Unique id of the resource that the action group belongs to.</p>\n",
                        key: "resource_id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Date and time when the action group was created (ISO_8601 format).",
                        htmlDescription: "<p>Date and time when the action group was created (ISO_8601 format).</p>\n",
                        key: "created_at",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Date and time when the action group was last updated/modified (ISO_8601 format).",
                        htmlDescription:
                            "<p>Date and time when the action group was last updated/modified (ISO_8601 format).</p>\n",
                        key: "updated_at",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                ],
            },
        },
        "type_:ResourceActionRead": {
            description: undefined,
            name: "ResourceActionRead",
            shape: {
                type: "object",
                extends: [],
                properties: [
                    {
                        description: "The name of the action",
                        htmlDescription: "<p>The name of the action</p>\n",
                        key: "name",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "An optional longer description of what this action respresents in your system",
                        htmlDescription:
                            "<p>An optional longer description of what this action respresents in your system</p>\n",
                        key: "description",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "string",
                                },
                            },
                        },
                    },
                    {
                        description:
                            "optional dictionary of key-value pairs that can be used to store arbitrary metadata about this action. This metadata can be used to filter actions using query parameters with attr_ prefix",
                        htmlDescription:
                            "<p>optional dictionary of key-value pairs that can be used to store arbitrary metadata about this action. This metadata can be used to filter actions using query parameters with attr_ prefix</p>\n",
                        key: "attributes",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "map",
                                keyType: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                valueType: {
                                    type: "unknown",
                                },
                            },
                        },
                    },
                    {
                        description:
                            "A URL-friendly name of the action (i.e: slug). You will be able to query later using this key instead of the id (UUID) of the action.",
                        htmlDescription:
                            "<p>A URL-friendly name of the action (i.e: slug). You will be able to query later using this key instead of the id (UUID) of the action.</p>\n",
                        key: "key",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the action",
                        htmlDescription: "<p>Unique id of the action</p>\n",
                        key: "id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "The name of the action, prefixed by the resource the action is acting upon.",
                        htmlDescription:
                            "<p>The name of the action, prefixed by the resource the action is acting upon.</p>\n",
                        key: "permission_name",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the organization that the action belongs to.",
                        htmlDescription: "<p>Unique id of the organization that the action belongs to.</p>\n",
                        key: "organization_id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the project that the action belongs to.",
                        htmlDescription: "<p>Unique id of the project that the action belongs to.</p>\n",
                        key: "project_id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the environment that the action belongs to.",
                        htmlDescription: "<p>Unique id of the environment that the action belongs to.</p>\n",
                        key: "environment_id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the resource that the action belongs to.",
                        htmlDescription: "<p>Unique id of the resource that the action belongs to.</p>\n",
                        key: "resource_id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Date and time when the action was created (ISO_8601 format).",
                        htmlDescription: "<p>Date and time when the action was created (ISO_8601 format).</p>\n",
                        key: "created_at",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Date and time when the action was last updated/modified (ISO_8601 format).",
                        htmlDescription:
                            "<p>Date and time when the action was last updated/modified (ISO_8601 format).</p>\n",
                        key: "updated_at",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                ],
            },
        },
        "type_:ResourceAttributeRead": {
            description: undefined,
            name: "ResourceAttributeRead",
            shape: {
                type: "object",
                extends: [],
                properties: [
                    {
                        description:
                            "The type of the attribute, we currently support: `bool`, `number` (ints, floats), `time` (a timestamp), `string`, and `json`.",
                        htmlDescription:
                            "<p>The type of the attribute, we currently support: <code>bool</code>, <code>number</code> (ints, floats), <code>time</code> (a timestamp), <code>string</code>, and <code>json</code>.</p>\n",
                        key: "type",
                        valueType: {
                            type: "id",
                            value: "type_:AttributeType",
                        },
                    },
                    {
                        description: "An optional longer description of what this attribute respresents in your system",
                        htmlDescription:
                            "<p>An optional longer description of what this attribute respresents in your system</p>\n",
                        key: "description",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "string",
                                },
                            },
                        },
                    },
                    {
                        description:
                            "A URL-friendly name of the attribute (i.e: slug). You will be able to query later using this key instead of the id (UUID) of the attribute.",
                        htmlDescription:
                            "<p>A URL-friendly name of the attribute (i.e: slug). You will be able to query later using this key instead of the id (UUID) of the attribute.</p>\n",
                        key: "key",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the attribute",
                        htmlDescription: "<p>Unique id of the attribute</p>\n",
                        key: "id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the resource that the attribute belongs to.",
                        htmlDescription: "<p>Unique id of the resource that the attribute belongs to.</p>\n",
                        key: "resource_id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description:
                            "A URL-friendly name of the resource (i.e: slug). You will be able to query later using this key instead of the id (UUID) of the resource.",
                        htmlDescription:
                            "<p>A URL-friendly name of the resource (i.e: slug). You will be able to query later using this key instead of the id (UUID) of the resource.</p>\n",
                        key: "resource_key",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the organization that the attribute belongs to.",
                        htmlDescription: "<p>Unique id of the organization that the attribute belongs to.</p>\n",
                        key: "organization_id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the project that the attribute belongs to.",
                        htmlDescription: "<p>Unique id of the project that the attribute belongs to.</p>\n",
                        key: "project_id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the environment that the attribute belongs to.",
                        htmlDescription: "<p>Unique id of the environment that the attribute belongs to.</p>\n",
                        key: "environment_id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Date and time when the attribute was created (ISO_8601 format).",
                        htmlDescription: "<p>Date and time when the attribute was created (ISO_8601 format).</p>\n",
                        key: "created_at",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Date and time when the attribute was last updated/modified (ISO_8601 format).",
                        htmlDescription:
                            "<p>Date and time when the attribute was last updated/modified (ISO_8601 format).</p>\n",
                        key: "updated_at",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Whether the attribute is built-in, and managed by the Permit system.",
                        htmlDescription:
                            "<p>Whether the attribute is built-in, and managed by the Permit system.</p>\n",
                        key: "built_in",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "boolean",
                            },
                        },
                    },
                ],
            },
        },
        "type_:ResourceInstanceRead": {
            description: undefined,
            name: "ResourceInstanceRead",
            shape: {
                type: "object",
                extends: [],
                properties: [
                    {
                        description:
                            "A unique identifier by which Permit will identify the resource instance for permission checks. You will later pass this identifier to the `permit.check()` API. A key can be anything: for example the resource db id, a url slug, a UUID or anything else as long as it's unique on your end. The resource instance key must be url-friendly.",
                        htmlDescription:
                            "<p>A unique identifier by which Permit will identify the resource instance for permission checks. You will later pass this identifier to the <code>permit.check()</code> API. A key can be anything: for example the resource db id, a url slug, a UUID or anything else as long as it&#39;s unique on your end. The resource instance key must be url-friendly.</p>\n",
                        key: "key",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description:
                            "the *key* of the tenant that this resource belongs to, used to enforce tenant boundaries in multi-tenant apps.",
                        htmlDescription:
                            "<p>the <em>key</em> of the tenant that this resource belongs to, used to enforce tenant boundaries in multi-tenant apps.</p>\n",
                        key: "tenant",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "string",
                                },
                            },
                        },
                    },
                    {
                        description:
                            "the *key* of the resource (type) of this resource instance. For example: if this resource instance is the annual budget document, the key of the resource might be `document`.",
                        htmlDescription:
                            "<p>the <em>key</em> of the resource (type) of this resource instance. For example: if this resource instance is the annual budget document, the key of the resource might be <code>document</code>.</p>\n",
                        key: "resource",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the resource instance",
                        htmlDescription: "<p>Unique id of the resource instance</p>\n",
                        key: "id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the organization that the resource instance belongs to.",
                        htmlDescription:
                            "<p>Unique id of the organization that the resource instance belongs to.</p>\n",
                        key: "organization_id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the project that the resource instance belongs to.",
                        htmlDescription: "<p>Unique id of the project that the resource instance belongs to.</p>\n",
                        key: "project_id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the environment that the resource instance belongs to.",
                        htmlDescription: "<p>Unique id of the environment that the resource instance belongs to.</p>\n",
                        key: "environment_id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Date and time when the resource instance was created (ISO_8601 format).",
                        htmlDescription:
                            "<p>Date and time when the resource instance was created (ISO_8601 format).</p>\n",
                        key: "created_at",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description:
                            "Date and time when the resource instance was last updated/modified (ISO_8601 format).",
                        htmlDescription:
                            "<p>Date and time when the resource instance was last updated/modified (ISO_8601 format).</p>\n",
                        key: "updated_at",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "the id of the resource (type) of this resource instance.",
                        htmlDescription: "<p>the id of the resource (type) of this resource instance.</p>\n",
                        key: "resource_id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "the id of the tenant of this resource instance.",
                        htmlDescription: "<p>the id of the tenant of this resource instance.</p>\n",
                        key: "tenant_id",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "string",
                                },
                            },
                        },
                    },
                    {
                        description:
                            "Arbitraty resource attributes that will be used to enforce attribute-based access control policies.",
                        htmlDescription:
                            "<p>Arbitraty resource attributes that will be used to enforce attribute-based access control policies.</p>\n",
                        key: "attributes",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "map",
                                keyType: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                valueType: {
                                    type: "unknown",
                                },
                            },
                        },
                    },
                ],
            },
        },
        "type_:ResourceRead": {
            description: undefined,
            name: "ResourceRead",
            shape: {
                type: "object",
                extends: [],
                properties: [
                    {
                        description:
                            "A URL-friendly name of the resource (i.e: slug). You will be able to query later using this key instead of the id (UUID) of the resource.",
                        htmlDescription:
                            "<p>A URL-friendly name of the resource (i.e: slug). You will be able to query later using this key instead of the id (UUID) of the resource.</p>\n",
                        key: "key",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the resource",
                        htmlDescription: "<p>Unique id of the resource</p>\n",
                        key: "id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the organization that the resource belongs to.",
                        htmlDescription: "<p>Unique id of the organization that the resource belongs to.</p>\n",
                        key: "organization_id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the project that the resource belongs to.",
                        htmlDescription: "<p>Unique id of the project that the resource belongs to.</p>\n",
                        key: "project_id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the environment that the resource belongs to.",
                        htmlDescription: "<p>Unique id of the environment that the resource belongs to.</p>\n",
                        key: "environment_id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Date and time when the resource was created (ISO_8601 format).",
                        htmlDescription: "<p>Date and time when the resource was created (ISO_8601 format).</p>\n",
                        key: "created_at",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Date and time when the resource was last updated/modified (ISO_8601 format).",
                        htmlDescription:
                            "<p>Date and time when the resource was last updated/modified (ISO_8601 format).</p>\n",
                        key: "updated_at",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "The name of the resource",
                        htmlDescription: "<p>The name of the resource</p>\n",
                        key: "name",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description:
                            "The [URN](https://en.wikipedia.org/wiki/Uniform_Resource_Name) (Uniform Resource Name) of the resource",
                        htmlDescription:
                            '<p>The <a href="https://en.wikipedia.org/wiki/Uniform_Resource_Name">URN</a> (Uniform Resource Name) of the resource</p>\n',
                        key: "urn",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "string",
                                },
                            },
                        },
                    },
                    {
                        description: "An optional longer description of what this resource respresents in your system",
                        htmlDescription:
                            "<p>An optional longer description of what this resource respresents in your system</p>\n",
                        key: "description",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "string",
                                },
                            },
                        },
                    },
                    {
                        description:
                            "\n        A actions definition block, typically contained within a resource type definition block.\n        The actions represents the ways you can interact with a protected resource.\n        ",
                        htmlDescription:
                            "<pre><code>    A actions definition block, typically contained within a resource type definition block.\n    The actions represents the ways you can interact with a protected resource.\n    \n</code></pre>\n",
                        key: "actions",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "map",
                                keyType: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                valueType: {
                                    type: "id",
                                    value: "type_:ActionBlockRead",
                                },
                            },
                        },
                    },
                    {
                        description:
                            "Attributes that each resource of this type defines, and can be used in your ABAC policies.",
                        htmlDescription:
                            "<p>Attributes that each resource of this type defines, and can be used in your ABAC policies.</p>\n",
                        key: "attributes",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "map",
                                keyType: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                valueType: {
                                    type: "id",
                                    value: "type_:AttributeBlockRead",
                                },
                            },
                        },
                    },
                    {
                        description: undefined,
                        key: "action_groups",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "map",
                                keyType: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                valueType: {
                                    type: "list",
                                    itemType: {
                                        type: "primitive",
                                        value: {
                                            type: "string",
                                        },
                                    },
                                },
                            },
                        },
                    },
                ],
            },
        },
        "type_:ResourceRoleList": {
            description: undefined,
            name: "ResourceRoleList",
            shape: {
                type: "object",
                extends: [],
                properties: [
                    {
                        description: undefined,
                        key: "roles",
                        valueType: {
                            type: "id",
                            value: "type_:ResourceRoleListRoles",
                        },
                    },
                ],
            },
        },
        "type_:ResourceRoleListRoles": {
            description: undefined,
            name: "ResourceRoleListRoles",
            shape: {
                type: "undiscriminatedUnion",
                variants: [
                    {
                        description: undefined,
                        type: {
                            type: "list",
                            itemType: {
                                type: "id",
                                value: "type_:ResourceRoleRead",
                            },
                        },
                    },
                    {
                        description: undefined,
                        type: {
                            type: "id",
                            value: "type_:PaginatedResultResourceRoleRead",
                        },
                    },
                ],
            },
        },
        "type_:ResourceRoleRead": {
            description: undefined,
            name: "ResourceRoleRead",
            shape: {
                type: "object",
                extends: [],
                properties: [
                    {
                        description: "The name of the role",
                        htmlDescription: "<p>The name of the role</p>\n",
                        key: "name",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description:
                            "optional description string explaining what this role represents, or what permissions are granted to it.",
                        htmlDescription:
                            "<p>optional description string explaining what this role represents, or what permissions are granted to it.</p>\n",
                        key: "description",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "string",
                                },
                            },
                        },
                    },
                    {
                        description:
                            "list of action keys that define what actions this resource role is permitted to do",
                        htmlDescription:
                            "<p>list of action keys that define what actions this resource role is permitted to do</p>\n",
                        key: "permissions",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "list",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                            },
                        },
                    },
                    {
                        description:
                            "optional dictionary of key-value pairs that can be used to store arbitrary metadata about this role. This metadata can be used to filter role using query parameters with attr_ prefix, currently supports only 'equals' operator",
                        htmlDescription:
                            "<p>optional dictionary of key-value pairs that can be used to store arbitrary metadata about this role. This metadata can be used to filter role using query parameters with attr_ prefix, currently supports only &#39;equals&#39; operator</p>\n",
                        key: "attributes",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "map",
                                keyType: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                valueType: {
                                    type: "unknown",
                                },
                            },
                        },
                    },
                    {
                        description:
                            "list of role keys that define what roles this role extends. In other words: this role will automatically inherit all the permissions of the given roles in this list.",
                        htmlDescription:
                            "<p>list of role keys that define what roles this role extends. In other words: this role will automatically inherit all the permissions of the given roles in this list.</p>\n",
                        key: "extends",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "list",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                            },
                        },
                    },
                    {
                        description:
                            "A URL-friendly name of the role (i.e: slug). You will be able to query later using this key instead of the id (UUID) of the role.",
                        htmlDescription:
                            "<p>A URL-friendly name of the role (i.e: slug). You will be able to query later using this key instead of the id (UUID) of the role.</p>\n",
                        key: "key",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the role",
                        htmlDescription: "<p>Unique id of the role</p>\n",
                        key: "id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the organization that the role belongs to.",
                        htmlDescription: "<p>Unique id of the organization that the role belongs to.</p>\n",
                        key: "organization_id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the project that the role belongs to.",
                        htmlDescription: "<p>Unique id of the project that the role belongs to.</p>\n",
                        key: "project_id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the environment that the role belongs to.",
                        htmlDescription: "<p>Unique id of the environment that the role belongs to.</p>\n",
                        key: "environment_id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the resource that the role belongs to.",
                        htmlDescription: "<p>Unique id of the resource that the role belongs to.</p>\n",
                        key: "resource_id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Date and time when the role was created (ISO_8601 format).",
                        htmlDescription: "<p>Date and time when the role was created (ISO_8601 format).</p>\n",
                        key: "created_at",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Date and time when the role was last updated/modified (ISO_8601 format).",
                        htmlDescription:
                            "<p>Date and time when the role was last updated/modified (ISO_8601 format).</p>\n",
                        key: "updated_at",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                ],
            },
        },
        "type_:RoleAssignmentRead": {
            description: undefined,
            name: "RoleAssignmentRead",
            shape: {
                type: "object",
                extends: [],
                properties: [
                    {
                        description: "Unique id of the role assignment",
                        htmlDescription: "<p>Unique id of the role assignment</p>\n",
                        key: "id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "the user the role is assigned to",
                        htmlDescription: "<p>the user the role is assigned to</p>\n",
                        key: "user",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "the role that is assigned",
                        htmlDescription: "<p>the role that is assigned</p>\n",
                        key: "role",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "the tenant the role is associated with",
                        htmlDescription: "<p>the tenant the role is associated with</p>\n",
                        key: "tenant",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the user",
                        htmlDescription: "<p>Unique id of the user</p>\n",
                        key: "user_id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the role",
                        htmlDescription: "<p>Unique id of the role</p>\n",
                        key: "role_id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the tenant",
                        htmlDescription: "<p>Unique id of the tenant</p>\n",
                        key: "tenant_id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the organization that the role assignment belongs to.",
                        htmlDescription: "<p>Unique id of the organization that the role assignment belongs to.</p>\n",
                        key: "organization_id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the project that the role assignment belongs to.",
                        htmlDescription: "<p>Unique id of the project that the role assignment belongs to.</p>\n",
                        key: "project_id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the environment that the role assignment belongs to.",
                        htmlDescription: "<p>Unique id of the environment that the role assignment belongs to.</p>\n",
                        key: "environment_id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Date and time when the role assignment was created (ISO_8601 format).",
                        htmlDescription:
                            "<p>Date and time when the role assignment was created (ISO_8601 format).</p>\n",
                        key: "created_at",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                ],
            },
        },
        "type_:RoleBlock": {
            description: undefined,
            name: "RoleBlock",
            shape: {
                type: "object",
                extends: [],
                properties: [
                    {
                        description:
                            "optional description string explaining what this role represents, or what permissions are granted to it.",
                        htmlDescription:
                            "<p>optional description string explaining what this role represents, or what permissions are granted to it.</p>\n",
                        key: "description",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "string",
                                },
                            },
                        },
                    },
                    {
                        description:
                            "list of action keys that define what actions this resource role is permitted to do",
                        htmlDescription:
                            "<p>list of action keys that define what actions this resource role is permitted to do</p>\n",
                        key: "permissions",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "list",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                            },
                        },
                    },
                ],
            },
        },
        "type_:RoleList": {
            description: undefined,
            name: "RoleList",
            shape: {
                type: "object",
                extends: [],
                properties: [
                    {
                        description: undefined,
                        key: "roles",
                        valueType: {
                            type: "id",
                            value: "type_:RoleListRoles",
                        },
                    },
                ],
            },
        },
        "type_:RoleListRoles": {
            description: undefined,
            name: "RoleListRoles",
            shape: {
                type: "undiscriminatedUnion",
                variants: [
                    {
                        description: undefined,
                        type: {
                            type: "list",
                            itemType: {
                                type: "id",
                                value: "type_:RoleRead",
                            },
                        },
                    },
                    {
                        description: undefined,
                        type: {
                            type: "id",
                            value: "type_:PaginatedResultRoleRead",
                        },
                    },
                ],
            },
        },
        "type_:RoleRead": {
            description: undefined,
            name: "RoleRead",
            shape: {
                type: "object",
                extends: [],
                properties: [
                    {
                        description: "The name of the role",
                        htmlDescription: "<p>The name of the role</p>\n",
                        key: "name",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description:
                            "optional description string explaining what this role represents, or what permissions are granted to it.",
                        htmlDescription:
                            "<p>optional description string explaining what this role represents, or what permissions are granted to it.</p>\n",
                        key: "description",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "string",
                                },
                            },
                        },
                    },
                    {
                        description:
                            "list of action keys that define what actions this resource role is permitted to do",
                        htmlDescription:
                            "<p>list of action keys that define what actions this resource role is permitted to do</p>\n",
                        key: "permissions",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "list",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                            },
                        },
                    },
                    {
                        description:
                            "optional dictionary of key-value pairs that can be used to store arbitrary metadata about this role. This metadata can be used to filter role using query parameters with attr_ prefix, currently supports only 'equals' operator",
                        htmlDescription:
                            "<p>optional dictionary of key-value pairs that can be used to store arbitrary metadata about this role. This metadata can be used to filter role using query parameters with attr_ prefix, currently supports only &#39;equals&#39; operator</p>\n",
                        key: "attributes",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "map",
                                keyType: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                valueType: {
                                    type: "unknown",
                                },
                            },
                        },
                    },
                    {
                        description:
                            "list of role keys that define what roles this role extends. In other words: this role will automatically inherit all the permissions of the given roles in this list.",
                        htmlDescription:
                            "<p>list of role keys that define what roles this role extends. In other words: this role will automatically inherit all the permissions of the given roles in this list.</p>\n",
                        key: "extends",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "list",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                            },
                        },
                    },
                    {
                        description:
                            "A URL-friendly name of the role (i.e: slug). You will be able to query later using this key instead of the id (UUID) of the role.",
                        htmlDescription:
                            "<p>A URL-friendly name of the role (i.e: slug). You will be able to query later using this key instead of the id (UUID) of the role.</p>\n",
                        key: "key",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the role",
                        htmlDescription: "<p>Unique id of the role</p>\n",
                        key: "id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the organization that the role belongs to.",
                        htmlDescription: "<p>Unique id of the organization that the role belongs to.</p>\n",
                        key: "organization_id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the project that the role belongs to.",
                        htmlDescription: "<p>Unique id of the project that the role belongs to.</p>\n",
                        key: "project_id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the environment that the role belongs to.",
                        htmlDescription: "<p>Unique id of the environment that the role belongs to.</p>\n",
                        key: "environment_id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Date and time when the role was created (ISO_8601 format).",
                        htmlDescription: "<p>Date and time when the role was created (ISO_8601 format).</p>\n",
                        key: "created_at",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Date and time when the role was last updated/modified (ISO_8601 format).",
                        htmlDescription:
                            "<p>Date and time when the role was last updated/modified (ISO_8601 format).</p>\n",
                        key: "updated_at",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                ],
            },
        },
        "type_:RolesBlock": {
            description: "Resource roles definition block, defines all the roles on the resource.",
            htmlDescription: "<p>Resource roles definition block, defines all the roles on the resource.</p>\n",
            name: "RolesBlock",
            shape: {
                type: "alias",
                value: {
                    type: "map",
                    keyType: {
                        type: "primitive",
                        value: {
                            type: "string",
                        },
                    },
                    valueType: {
                        type: "unknown",
                    },
                },
            },
        },
        "type_:Statistics": {
            description: undefined,
            name: "Statistics",
            shape: {
                type: "object",
                extends: [],
                properties: [
                    {
                        description: undefined,
                        key: "roles",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "integer",
                            },
                        },
                    },
                    {
                        description: undefined,
                        key: "users",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "integer",
                            },
                        },
                    },
                    {
                        description: undefined,
                        key: "policies",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "integer",
                            },
                        },
                    },
                    {
                        description: undefined,
                        key: "resources",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "integer",
                            },
                        },
                    },
                    {
                        description: undefined,
                        key: "tenants",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "integer",
                            },
                        },
                    },
                    {
                        description: undefined,
                        key: "has_decision_logs",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "boolean",
                            },
                        },
                    },
                    {
                        description: undefined,
                        key: "members",
                        valueType: {
                            type: "list",
                            itemType: {
                                type: "id",
                                value: "type_:OrgMemberReadWithGrants",
                            },
                        },
                    },
                ],
            },
        },
        "type_:TenantCreateBulkOperationResult": {
            description: undefined,
            name: "TenantCreateBulkOperationResult",
            shape: {
                type: "object",
                extends: [],
                properties: [],
            },
        },
        "type_:TenantDeleteBulkOperationResult": {
            description: undefined,
            name: "TenantDeleteBulkOperationResult",
            shape: {
                type: "object",
                extends: [],
                properties: [],
            },
        },
        "type_:TenantRead": {
            description: undefined,
            name: "TenantRead",
            shape: {
                type: "object",
                extends: [],
                properties: [
                    {
                        description:
                            "A unique id by which Permit will identify the tenant. The tenant key must be url-friendly (slugified).",
                        htmlDescription:
                            "<p>A unique id by which Permit will identify the tenant. The tenant key must be url-friendly (slugified).</p>\n",
                        key: "key",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the tenant",
                        htmlDescription: "<p>Unique id of the tenant</p>\n",
                        key: "id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the organization that the tenant belongs to.",
                        htmlDescription: "<p>Unique id of the organization that the tenant belongs to.</p>\n",
                        key: "organization_id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the project that the tenant belongs to.",
                        htmlDescription: "<p>Unique id of the project that the tenant belongs to.</p>\n",
                        key: "project_id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the environment that the tenant belongs to.",
                        htmlDescription: "<p>Unique id of the environment that the tenant belongs to.</p>\n",
                        key: "environment_id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Date and time when the tenant was created (ISO_8601 format).",
                        htmlDescription: "<p>Date and time when the tenant was created (ISO_8601 format).</p>\n",
                        key: "created_at",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Date and time when the tenant was last updated/modified (ISO_8601 format).",
                        htmlDescription:
                            "<p>Date and time when the tenant was last updated/modified (ISO_8601 format).</p>\n",
                        key: "updated_at",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description:
                            "Date and time when the tenant was last active (ISO_8601 format). In other words, this is the last time a permission check was done on a resource belonging to this tenant.",
                        htmlDescription:
                            "<p>Date and time when the tenant was last active (ISO_8601 format). In other words, this is the last time a permission check was done on a resource belonging to this tenant.</p>\n",
                        key: "last_action_at",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "A descriptive name for the tenant",
                        htmlDescription: "<p>A descriptive name for the tenant</p>\n",
                        key: "name",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "an optional longer description of the tenant",
                        htmlDescription: "<p>an optional longer description of the tenant</p>\n",
                        key: "description",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "string",
                                },
                            },
                        },
                    },
                    {
                        description:
                            "Arbitraty tenant attributes that will be used to enforce attribute-based access control policies.",
                        htmlDescription:
                            "<p>Arbitraty tenant attributes that will be used to enforce attribute-based access control policies.</p>\n",
                        key: "attributes",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "map",
                                keyType: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                valueType: {
                                    type: "unknown",
                                },
                            },
                        },
                    },
                ],
            },
        },
        "type_:UserCreateBulkOperationResult": {
            description: undefined,
            name: "UserCreateBulkOperationResult",
            shape: {
                type: "object",
                extends: [],
                properties: [],
            },
        },
        "type_:UserDeleteBulkOperationResult": {
            description: undefined,
            name: "UserDeleteBulkOperationResult",
            shape: {
                type: "object",
                extends: [],
                properties: [],
            },
        },
        "type_:UserInTenant": {
            description: undefined,
            name: "UserInTenant",
            shape: {
                type: "object",
                extends: [],
                properties: [
                    {
                        description: "The tenant key which the user is associated with",
                        htmlDescription: "<p>The tenant key which the user is associated with</p>\n",
                        key: "tenant",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "List of roles assigned to the user in that tenant",
                        htmlDescription: "<p>List of roles assigned to the user in that tenant</p>\n",
                        key: "roles",
                        valueType: {
                            type: "list",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "string",
                                },
                            },
                        },
                    },
                    {
                        description: "Whether the user has signed in or not",
                        htmlDescription: "<p>Whether the user has signed in or not</p>\n",
                        key: "status",
                        valueType: {
                            type: "id",
                            value: "type_:UserStatus",
                        },
                    },
                ],
            },
        },
        "type_:UserRead": {
            description: undefined,
            name: "UserRead",
            shape: {
                type: "object",
                extends: [],
                properties: [
                    {
                        description: "A unique id by which Permit will identify the user for permission checks.",
                        htmlDescription:
                            "<p>A unique id by which Permit will identify the user for permission checks.</p>\n",
                        key: "key",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the user",
                        htmlDescription: "<p>Unique id of the user</p>\n",
                        key: "id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the organization that the user belongs to.",
                        htmlDescription: "<p>Unique id of the organization that the user belongs to.</p>\n",
                        key: "organization_id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the project that the user belongs to.",
                        htmlDescription: "<p>Unique id of the project that the user belongs to.</p>\n",
                        key: "project_id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "Unique id of the environment that the user belongs to.",
                        htmlDescription: "<p>Unique id of the environment that the user belongs to.</p>\n",
                        key: "environment_id",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: undefined,
                        key: "associated_tenants",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "list",
                                itemType: {
                                    type: "id",
                                    value: "type_:UserInTenant",
                                },
                            },
                        },
                    },
                    {
                        description: undefined,
                        key: "roles",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "list",
                                itemType: {
                                    type: "id",
                                    value: "type_:UserRole",
                                },
                            },
                        },
                    },
                    {
                        description: "The email of the user. If synced, will be unique inside the environment.",
                        htmlDescription:
                            "<p>The email of the user. If synced, will be unique inside the environment.</p>\n",
                        key: "email",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "string",
                                },
                            },
                        },
                    },
                    {
                        description: "First name of the user.",
                        htmlDescription: "<p>First name of the user.</p>\n",
                        key: "first_name",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "string",
                                },
                            },
                        },
                    },
                    {
                        description: "Last name of the user.",
                        htmlDescription: "<p>Last name of the user.</p>\n",
                        key: "last_name",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "primitive",
                                value: {
                                    type: "string",
                                },
                            },
                        },
                    },
                    {
                        description:
                            "Arbitrary user attributes that will be used to enforce attribute-based access control policies.",
                        htmlDescription:
                            "<p>Arbitrary user attributes that will be used to enforce attribute-based access control policies.</p>\n",
                        key: "attributes",
                        valueType: {
                            type: "optional",
                            itemType: {
                                type: "map",
                                keyType: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                valueType: {
                                    type: "unknown",
                                },
                            },
                        },
                    },
                ],
            },
        },
        "type_:UserReplaceBulkOperationResult": {
            description: undefined,
            name: "UserReplaceBulkOperationResult",
            shape: {
                type: "object",
                extends: [],
                properties: [],
            },
        },
        "type_:UserRole": {
            description: undefined,
            name: "UserRole",
            shape: {
                type: "object",
                extends: [],
                properties: [
                    {
                        description: "the role that is assigned",
                        htmlDescription: "<p>the role that is assigned</p>\n",
                        key: "role",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: "the tenant the role is associated with",
                        htmlDescription: "<p>the tenant the role is associated with</p>\n",
                        key: "tenant",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                ],
            },
        },
        "type_:UserStatus": {
            description: "An enumeration.",
            htmlDescription: "<p>An enumeration.</p>\n",
            name: "UserStatus",
            shape: {
                type: "enum",
                values: [
                    {
                        description: undefined,
                        value: "active",
                    },
                    {
                        description: undefined,
                        value: "pending",
                    },
                ],
            },
        },
        "type_:ValidationError": {
            description: undefined,
            name: "ValidationError",
            shape: {
                type: "object",
                extends: [],
                properties: [
                    {
                        description: undefined,
                        key: "loc",
                        valueType: {
                            type: "list",
                            itemType: {
                                type: "id",
                                value: "type_:ValidationErrorLocItem",
                            },
                        },
                    },
                    {
                        description: undefined,
                        key: "msg",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: undefined,
                        key: "type",
                        valueType: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                ],
            },
        },
        "type_:ValidationErrorLocItem": {
            description: undefined,
            name: "ValidationErrorLocItem",
            shape: {
                type: "undiscriminatedUnion",
                variants: [
                    {
                        description: undefined,
                        type: {
                            type: "primitive",
                            value: {
                                type: "string",
                            },
                        },
                    },
                    {
                        description: undefined,
                        type: {
                            type: "primitive",
                            value: {
                                type: "integer",
                            },
                        },
                    },
                ],
            },
        },
    },
    subpackages: {
        subpackage_organizations: {
            subpackageId: "subpackage_organizations",
            name: "Organizations",
            endpoints: [
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "list-organizations",
                    method: "GET",
                    id: "list_organizations",
                    name: "List Organizations",
                    path: {
                        pathParameters: [],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/orgs",
                            },
                        ],
                    },
                    queryParameters: [
                        {
                            key: "page",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "integer",
                                    },
                                },
                            },
                            description: "Page number of the results to fetch, starting at 1.",
                        },
                        {
                            key: "per_page",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "integer",
                                    },
                                },
                            },
                            description: "The number of results per page (max 100).",
                        },
                    ],
                    headers: [],
                    request: undefined,
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "list",
                                itemType: {
                                    type: "id",
                                    value: "type_:OrganizationRead",
                                },
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/orgs",
                            pathParameters: {},
                            queryParameters: {
                                page: 0,
                                per_page: 0,
                            },
                            headers: {},
                            responseStatusCode: 200,
                            responseBody: [
                                {
                                    key: "string",
                                    id: "string",
                                    is_enterprise: true,
                                    created_at: "string",
                                    updated_at: "string",
                                    name: "string",
                                    settings: {
                                        string: {},
                                    },
                                },
                            ],
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description:
                        "Lists all the organizations that can be accessed by the\nauthenticated actor (i.e: human team member or api key).",
                    htmlDescription:
                        "<p>Lists all the organizations that can be accessed by the\nauthenticated actor (i.e: human team member or api key).</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "create-organization",
                    method: "POST",
                    id: "create_organization",
                    name: "Create Organization",
                    path: {
                        pathParameters: [],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/orgs",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: {
                        type: {
                            type: "object",
                            extends: [],
                            properties: [
                                {
                                    key: "key",
                                    valueType: {
                                        type: "primitive",
                                        value: {
                                            type: "string",
                                        },
                                    },
                                    description:
                                        "A URL-friendly name of the organization (i.e: slug). You will be able to query later using this key instead of the id (UUID) of the organization.",
                                },
                                {
                                    key: "name",
                                    valueType: {
                                        type: "primitive",
                                        value: {
                                            type: "string",
                                        },
                                    },
                                    description: "The name of the organization, usually it's your company's name.",
                                },
                                {
                                    key: "settings",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "map",
                                            keyType: {
                                                type: "primitive",
                                                value: {
                                                    type: "string",
                                                },
                                            },
                                            valueType: {
                                                type: "unknown",
                                            },
                                        },
                                    },
                                    description: "the settings for this project",
                                },
                            ],
                        },
                    },
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:OrganizationReadWithApiKey",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/orgs",
                            pathParameters: {},
                            queryParameters: {},
                            headers: {},
                            requestBody: {
                                key: "string",
                                name: "string",
                            },
                            responseStatusCode: 200,
                            responseBody: {
                                key: "string",
                                id: "string",
                                is_enterprise: true,
                                created_at: "string",
                                updated_at: "string",
                                name: "string",
                                settings: {
                                    string: {},
                                },
                                api_key_id: "string",
                                api_key_secret: "string",
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description:
                        "Creates a new organization that will be owned by the\nauthenticated actor (i.e: human team member or api key).",
                    htmlDescription:
                        "<p>Creates a new organization that will be owned by the\nauthenticated actor (i.e: human team member or api key).</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "get-organization",
                    method: "GET",
                    id: "get_organization",
                    name: "Get Organization",
                    path: {
                        pathParameters: [
                            {
                                key: "org_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the organization, or the URL-friendly key of the organization (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/orgs/",
                            },
                            {
                                type: "pathParameter",
                                value: "org_id",
                            },
                            {
                                type: "literal",
                                value: "",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: undefined,
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:OrganizationRead",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/orgs/string",
                            pathParameters: {
                                org_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            responseStatusCode: 200,
                            responseBody: {
                                key: "string",
                                id: "string",
                                is_enterprise: true,
                                created_at: "string",
                                updated_at: "string",
                                name: "string",
                                settings: {
                                    string: {},
                                },
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description:
                        "Gets a single organization (Permit.io account) matching the given org_id,\nif such org exists and can be accessed by the authenticated actor.",
                    htmlDescription:
                        "<p>Gets a single organization (Permit.io account) matching the given org_id,\nif such org exists and can be accessed by the authenticated actor.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "update-organization",
                    method: "PATCH",
                    id: "update_organization",
                    name: "Update Organization",
                    path: {
                        pathParameters: [
                            {
                                key: "org_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the organization, or the URL-friendly key of the organization (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/orgs/",
                            },
                            {
                                type: "pathParameter",
                                value: "org_id",
                            },
                            {
                                type: "literal",
                                value: "",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: {
                        type: {
                            type: "object",
                            extends: [],
                            properties: [
                                {
                                    key: "name",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "primitive",
                                            value: {
                                                type: "string",
                                            },
                                        },
                                    },
                                    description: "The name of the organization, usually it's your company's name.",
                                },
                                {
                                    key: "settings",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "map",
                                            keyType: {
                                                type: "primitive",
                                                value: {
                                                    type: "string",
                                                },
                                            },
                                            valueType: {
                                                type: "unknown",
                                            },
                                        },
                                    },
                                    description: "the settings for this project",
                                },
                            ],
                        },
                    },
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:OrganizationRead",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/orgs/string",
                            pathParameters: {
                                org_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            requestBody: {},
                            responseStatusCode: 200,
                            responseBody: {
                                key: "string",
                                id: "string",
                                is_enterprise: true,
                                created_at: "string",
                                updated_at: "string",
                                name: "string",
                                settings: {
                                    string: {},
                                },
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description: "Updates the organization's profile.",
                    htmlDescription: "<p>Updates the organization&#39;s profile.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "delete-organization",
                    method: "DELETE",
                    id: "delete_organization",
                    name: "Delete Organization",
                    path: {
                        pathParameters: [
                            {
                                key: "org_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the organization, or the URL-friendly key of the organization (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/orgs/",
                            },
                            {
                                type: "pathParameter",
                                value: "org_id",
                            },
                            {
                                type: "literal",
                                value: "",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: undefined,
                    response: undefined,
                    examples: [
                        {
                            path: "/v2/orgs/string",
                            pathParameters: {
                                org_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            responseStatusCode: 200,
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description: "Deletes an organization (Permit.io account) and all its related data.",
                    htmlDescription: "<p>Deletes an organization (Permit.io account) and all its related data.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "get-active-organization",
                    method: "GET",
                    id: "get_active_organization",
                    name: "Get Active Organization",
                    path: {
                        pathParameters: [],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/orgs/active/org",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: undefined,
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:OrganizationRead",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/orgs/active/org",
                            pathParameters: {},
                            queryParameters: {},
                            headers: {},
                            responseStatusCode: 200,
                            responseBody: {
                                key: "string",
                                id: "string",
                                is_enterprise: true,
                                created_at: "string",
                                updated_at: "string",
                                name: "string",
                                settings: {
                                    string: {},
                                },
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description:
                        "Gets a single organization (Permit.io account) matching the given org_id,\nif such org exists and can be accessed by the authenticated actor.",
                    htmlDescription:
                        "<p>Gets a single organization (Permit.io account) matching the given org_id,\nif such org exists and can be accessed by the authenticated actor.</p>\n",
                    authed: true,
                },
            ],
            types: [],
            subpackages: [],
            pointsTo: undefined,
            urlSlug: "organizations",
            description:
                "\nThe Organizations API gives you access to control and manage your Permit organizations.\n\nAn organization represents a **single billable account** (i.e: a company using Permit).\nYou may invite your team members to your Permit account, and thus multiple team members\nmay control an organization simultaniously (each member has access according to his role).\n",
            htmlDescription:
                "<p>The Organizations API gives you access to control and manage your Permit organizations.</p>\n<p>An organization represents a <strong>single billable account</strong> (i.e: a company using Permit).\nYou may invite your team members to your Permit account, and thus multiple team members\nmay control an organization simultaniously (each member has access according to his role).</p>\n",
        },
        subpackage_projects: {
            subpackageId: "subpackage_projects",
            name: "Projects",
            endpoints: [
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "list-projects",
                    method: "GET",
                    id: "list_projects",
                    name: "List Projects",
                    path: {
                        pathParameters: [],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/projects",
                            },
                        ],
                    },
                    queryParameters: [
                        {
                            key: "page",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "integer",
                                    },
                                },
                            },
                            description: "Page number of the results to fetch, starting at 1.",
                        },
                        {
                            key: "per_page",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "integer",
                                    },
                                },
                            },
                            description: "The number of results per page (max 100).",
                        },
                    ],
                    headers: [],
                    request: undefined,
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "list",
                                itemType: {
                                    type: "id",
                                    value: "type_:ProjectRead",
                                },
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/projects",
                            pathParameters: {},
                            queryParameters: {
                                page: 0,
                                per_page: 0,
                            },
                            headers: {},
                            responseStatusCode: 200,
                            responseBody: [
                                {
                                    key: "string",
                                    urn_namespace: "string",
                                    id: "string",
                                    organization_id: "string",
                                    created_at: "string",
                                    updated_at: "string",
                                    name: "string",
                                    description: "string",
                                    settings: {
                                        string: {},
                                    },
                                    active_policy_repo_id: "string",
                                },
                            ],
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description: "Lists all the projects under the active organization.",
                    htmlDescription: "<p>Lists all the projects under the active organization.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "create-project",
                    method: "POST",
                    id: "create_project",
                    name: "Create Project",
                    path: {
                        pathParameters: [],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/projects",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: {
                        type: {
                            type: "object",
                            extends: [],
                            properties: [
                                {
                                    key: "key",
                                    valueType: {
                                        type: "primitive",
                                        value: {
                                            type: "string",
                                        },
                                    },
                                    description:
                                        "A URL-friendly name of the project (i.e: slug). You will be able to query later using this key instead of the id (UUID) of the project.",
                                },
                                {
                                    key: "urn_namespace",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "primitive",
                                            value: {
                                                type: "string",
                                            },
                                        },
                                    },
                                    description:
                                        "Optional namespace for URNs. If empty, URNs will be generated from project key.",
                                },
                                {
                                    key: "name",
                                    valueType: {
                                        type: "primitive",
                                        value: {
                                            type: "string",
                                        },
                                    },
                                    description: "The name of the project",
                                },
                                {
                                    key: "description",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "primitive",
                                            value: {
                                                type: "string",
                                            },
                                        },
                                    },
                                    description: "a longer description outlining the project objectives",
                                },
                                {
                                    key: "settings",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "map",
                                            keyType: {
                                                type: "primitive",
                                                value: {
                                                    type: "string",
                                                },
                                            },
                                            valueType: {
                                                type: "unknown",
                                            },
                                        },
                                    },
                                    description: "the settings for this project",
                                },
                                {
                                    key: "active_policy_repo_id",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "primitive",
                                            value: {
                                                type: "string",
                                            },
                                        },
                                    },
                                    description: "the id of the policy repo to use for this project",
                                },
                            ],
                        },
                    },
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:ProjectRead",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/projects",
                            pathParameters: {},
                            queryParameters: {},
                            headers: {},
                            requestBody: {
                                key: "string",
                                name: "string",
                            },
                            responseStatusCode: 200,
                            responseBody: {
                                key: "string",
                                urn_namespace: "string",
                                id: "string",
                                organization_id: "string",
                                created_at: "string",
                                updated_at: "string",
                                name: "string",
                                description: "string",
                                settings: {
                                    string: {},
                                },
                                active_policy_repo_id: "string",
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description: "Creates a new project under the active organization.",
                    htmlDescription: "<p>Creates a new project under the active organization.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "get-project",
                    method: "GET",
                    id: "get_project",
                    name: "Get Project",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/projects/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: undefined,
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:ProjectRead",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/projects/string",
                            pathParameters: {
                                proj_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            responseStatusCode: 200,
                            responseBody: {
                                key: "string",
                                urn_namespace: "string",
                                id: "string",
                                organization_id: "string",
                                created_at: "string",
                                updated_at: "string",
                                name: "string",
                                description: "string",
                                settings: {
                                    string: {},
                                },
                                active_policy_repo_id: "string",
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description: "Gets a single project matching the given proj_id, if such project exists.",
                    htmlDescription:
                        "<p>Gets a single project matching the given proj_id, if such project exists.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "update-project",
                    method: "PATCH",
                    id: "update_project",
                    name: "Update Project",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/projects/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: {
                        type: {
                            type: "object",
                            extends: [],
                            properties: [
                                {
                                    key: "name",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "primitive",
                                            value: {
                                                type: "string",
                                            },
                                        },
                                    },
                                    description: "The name of the project",
                                },
                                {
                                    key: "description",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "primitive",
                                            value: {
                                                type: "string",
                                            },
                                        },
                                    },
                                    description: "a longer description outlining the project objectives",
                                },
                                {
                                    key: "settings",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "map",
                                            keyType: {
                                                type: "primitive",
                                                value: {
                                                    type: "string",
                                                },
                                            },
                                            valueType: {
                                                type: "unknown",
                                            },
                                        },
                                    },
                                    description: "the settings for this project",
                                },
                                {
                                    key: "active_policy_repo_id",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "primitive",
                                            value: {
                                                type: "string",
                                            },
                                        },
                                    },
                                    description: "the id of the policy repo to use for this project",
                                },
                            ],
                        },
                    },
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:ProjectRead",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/projects/string",
                            pathParameters: {
                                proj_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            requestBody: {},
                            responseStatusCode: 200,
                            responseBody: {
                                key: "string",
                                urn_namespace: "string",
                                id: "string",
                                organization_id: "string",
                                created_at: "string",
                                updated_at: "string",
                                name: "string",
                                description: "string",
                                settings: {
                                    string: {},
                                },
                                active_policy_repo_id: "string",
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description: "Updates the project.",
                    htmlDescription: "<p>Updates the project.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "delete-project",
                    method: "DELETE",
                    id: "delete_project",
                    name: "Delete Project",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/projects/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: undefined,
                    response: undefined,
                    examples: [
                        {
                            path: "/v2/projects/string",
                            pathParameters: {
                                proj_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            responseStatusCode: 200,
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description: "Deletes the project and all its related data.",
                    htmlDescription: "<p>Deletes the project and all its related data.</p>\n",
                    authed: true,
                },
            ],
            types: [],
            subpackages: [],
            pointsTo: undefined,
            urlSlug: "projects",
            description:
                '\nProjects let you manage permissions for different business objectives from a single Permit account.\n\nFor example, you can create one project called "Billing App" and another project called "Web App".\nEvery project is a separate silo, and has its own unique set of environments and policies.\n',
            htmlDescription:
                "<p>Projects let you manage permissions for different business objectives from a single Permit account.</p>\n<p>For example, you can create one project called &quot;Billing App&quot; and another project called &quot;Web App&quot;.\nEvery project is a separate silo, and has its own unique set of environments and policies.</p>\n",
        },
        subpackage_environments: {
            subpackageId: "subpackage_environments",
            name: "Environments",
            endpoints: [
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "stats-environments",
                    method: "GET",
                    id: "stats_environments",
                    name: "Stats Environments",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/projects/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/envs/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/stats",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: undefined,
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:EnvironmentStats",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/projects/string/envs/string/stats",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            responseStatusCode: 200,
                            responseBody: {
                                key: "string",
                                id: "string",
                                organization_id: "string",
                                project_id: "string",
                                created_at: "string",
                                updated_at: "string",
                                name: "string",
                                description: "string",
                                custom_branch_name: "string",
                                jwks: {
                                    keys: [
                                        {
                                            string: {},
                                        },
                                    ],
                                },
                                settings: {
                                    string: {},
                                },
                                pdp_configs: [
                                    {
                                        id: "string",
                                        name: "string",
                                        organization_id: "string",
                                        project_id: "string",
                                        environment_id: "string",
                                        client_secret: "string",
                                    },
                                ],
                                stats: {
                                    roles: 0,
                                    users: 0,
                                    policies: 0,
                                    resources: 0,
                                    tenants: 0,
                                    has_decision_logs: true,
                                    members: [
                                        {
                                            id: "string",
                                            email: "string",
                                            email_verified: true,
                                            name: "string",
                                            given_name: "string",
                                            family_name: "string",
                                            picture: "string",
                                            is_superuser: true,
                                            is_onboarding: true,
                                            onboarding_step: "create_organization",
                                            created_at: "string",
                                            last_login: "string",
                                            last_ip: "string",
                                            logins_count: 0,
                                            identities: [
                                                {
                                                    user_id: "string",
                                                    provider: "string",
                                                    sub: "string",
                                                    email: "string",
                                                    email_verified: true,
                                                    auth0_info: {
                                                        string: {},
                                                    },
                                                },
                                            ],
                                            invite: {
                                                member_id: "string",
                                                email: "string",
                                                role: "admin",
                                                id: "string",
                                                organization_id: "string",
                                                invite_code: "string",
                                                created_at: "string",
                                                status: "pending",
                                                failed_reason: "string",
                                            },
                                            settings: {
                                                string: {},
                                            },
                                            grants: [
                                                {
                                                    organization_id: "string",
                                                    project_id: "string",
                                                    environment_id: "string",
                                                    object_type: "org",
                                                    access_level: "admin",
                                                    organization_key: "string",
                                                    project_key: "string",
                                                    environment_key: "string",
                                                    organization_name: "string",
                                                    project_name: "string",
                                                    environment_name: "string",
                                                },
                                            ],
                                        },
                                    ],
                                },
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description: undefined,
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "list-environments",
                    method: "GET",
                    id: "list_environments",
                    name: "List Environments",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/projects/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/envs",
                            },
                        ],
                    },
                    queryParameters: [
                        {
                            key: "page",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "integer",
                                    },
                                },
                            },
                            description: "Page number of the results to fetch, starting at 1.",
                        },
                        {
                            key: "per_page",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "integer",
                                    },
                                },
                            },
                            description: "The number of results per page (max 100).",
                        },
                    ],
                    headers: [],
                    request: undefined,
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "list",
                                itemType: {
                                    type: "id",
                                    value: "type_:EnvironmentRead",
                                },
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/projects/string/envs",
                            pathParameters: {
                                proj_id: "string",
                            },
                            queryParameters: {
                                page: 0,
                                per_page: 0,
                            },
                            headers: {},
                            responseStatusCode: 200,
                            responseBody: [
                                {
                                    key: "string",
                                    id: "string",
                                    organization_id: "string",
                                    project_id: "string",
                                    created_at: "string",
                                    updated_at: "string",
                                    name: "string",
                                    description: "string",
                                    custom_branch_name: "string",
                                    jwks: {
                                        keys: [
                                            {
                                                string: {},
                                            },
                                        ],
                                    },
                                    settings: {
                                        string: {},
                                    },
                                },
                            ],
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description: "Lists all the environments under a given project.",
                    htmlDescription: "<p>Lists all the environments under a given project.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "create-environment",
                    method: "POST",
                    id: "create_environment",
                    name: "Create Environment",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/projects/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/envs",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:EnvironmentCreate",
                            },
                        },
                    },
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:EnvironmentRead",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/projects/string/envs",
                            pathParameters: {
                                proj_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            requestBody: {
                                key: "string",
                                name: "string",
                            },
                            responseStatusCode: 200,
                            responseBody: {
                                key: "string",
                                id: "string",
                                organization_id: "string",
                                project_id: "string",
                                created_at: "string",
                                updated_at: "string",
                                name: "string",
                                description: "string",
                                custom_branch_name: "string",
                                jwks: {
                                    keys: [
                                        {
                                            string: {},
                                        },
                                    ],
                                },
                                settings: {
                                    string: {},
                                },
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description: "Creates a new environment under a given project.",
                    htmlDescription: "<p>Creates a new environment under a given project.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "get-environment",
                    method: "GET",
                    id: "get_environment",
                    name: "Get Environment",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/projects/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/envs/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: undefined,
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:EnvironmentRead",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/projects/string/envs/string",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            responseStatusCode: 200,
                            responseBody: {
                                key: "string",
                                id: "string",
                                organization_id: "string",
                                project_id: "string",
                                created_at: "string",
                                updated_at: "string",
                                name: "string",
                                description: "string",
                                custom_branch_name: "string",
                                jwks: {
                                    keys: [
                                        {
                                            string: {},
                                        },
                                    ],
                                },
                                settings: {
                                    string: {},
                                },
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description: "Gets a single environment matching the given env_id, if such environment exists.",
                    htmlDescription:
                        "<p>Gets a single environment matching the given env_id, if such environment exists.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "update-environment",
                    method: "PATCH",
                    id: "update_environment",
                    name: "Update Environment",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/projects/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/envs/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: {
                        type: {
                            type: "object",
                            extends: [],
                            properties: [
                                {
                                    key: "name",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "primitive",
                                            value: {
                                                type: "string",
                                            },
                                        },
                                    },
                                    description: "The name of the environment",
                                },
                                {
                                    key: "description",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "primitive",
                                            value: {
                                                type: "string",
                                            },
                                        },
                                    },
                                    description: "an optional longer description of the environment",
                                },
                                {
                                    key: "custom_branch_name",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "primitive",
                                            value: {
                                                type: "string",
                                            },
                                        },
                                    },
                                    description:
                                        "when using gitops feature, an optional branch name for the environment",
                                },
                                {
                                    key: "jwks",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "id",
                                            value: "type_:JwksObj",
                                        },
                                    },
                                    description: "jwks for element frontend only login",
                                },
                                {
                                    key: "settings",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "map",
                                            keyType: {
                                                type: "primitive",
                                                value: {
                                                    type: "string",
                                                },
                                            },
                                            valueType: {
                                                type: "unknown",
                                            },
                                        },
                                    },
                                    description: "the settings for this environment",
                                },
                            ],
                        },
                    },
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:EnvironmentRead",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/projects/string/envs/string",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            requestBody: {},
                            responseStatusCode: 200,
                            responseBody: {
                                key: "string",
                                id: "string",
                                organization_id: "string",
                                project_id: "string",
                                created_at: "string",
                                updated_at: "string",
                                name: "string",
                                description: "string",
                                custom_branch_name: "string",
                                jwks: {
                                    keys: [
                                        {
                                            string: {},
                                        },
                                    ],
                                },
                                settings: {
                                    string: {},
                                },
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description: "Updates the environment.",
                    htmlDescription: "<p>Updates the environment.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "delete-environment",
                    method: "DELETE",
                    id: "delete_environment",
                    name: "Delete Environment",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/projects/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/envs/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: undefined,
                    response: undefined,
                    examples: [
                        {
                            path: "/v2/projects/string/envs/string",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            responseStatusCode: 200,
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description: "Deletes an environment and all its related data.",
                    htmlDescription: "<p>Deletes an environment and all its related data.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "copy-environment",
                    method: "POST",
                    id: "copy_environment",
                    name: "Copy Environment",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/projects/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/envs/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/copy",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: {
                        type: {
                            type: "object",
                            extends: [],
                            properties: [
                                {
                                    key: "target_env",
                                    valueType: {
                                        type: "id",
                                        value: "type_:EnvironmentCopyTarget",
                                    },
                                    description:
                                        "If copying a new environment, the environment configuration. If copying to an existing environment, the environment identifier",
                                },
                                {
                                    key: "conflict_strategy",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "id",
                                            value: "type_:EnvironmentCopyConflictStrategy",
                                        },
                                    },
                                    description:
                                        "Action to take when detecting a conflict when copying. Only applies to copying into an existing environment",
                                },
                                {
                                    key: "scope",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "id",
                                            value: "type_:EnvironmentCopyScope",
                                        },
                                    },
                                    description: "Filters to include and exclude copied objects",
                                },
                            ],
                        },
                    },
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:EnvironmentRead",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/projects/string/envs/string/copy",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            requestBody: {
                                target_env: {},
                            },
                            responseStatusCode: 200,
                            responseBody: {
                                key: "string",
                                id: "string",
                                organization_id: "string",
                                project_id: "string",
                                created_at: "string",
                                updated_at: "string",
                                name: "string",
                                description: "string",
                                custom_branch_name: "string",
                                jwks: {
                                    keys: [
                                        {
                                            string: {},
                                        },
                                    ],
                                },
                                settings: {
                                    string: {},
                                },
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description:
                        "Copy environment\n\nThis endpoint either duplicates an existing environment to a new environment\nin the same project, or copies from an existing environment to another\nexisting environment.\n\nThe `scope` object controls which objects will be copied to the target\nenvironment.\n\nTo clone to a new environment, the user must have write permissions\nto the containing project. To clone into an existing environment,\nthe user must have write permissions to the target environment.\n\nCopying environments across projects or organizations is not\nallowed.",
                    htmlDescription:
                        "<p>Copy environment</p>\n<p>This endpoint either duplicates an existing environment to a new environment\nin the same project, or copies from an existing environment to another\nexisting environment.</p>\n<p>The <code>scope</code> object controls which objects will be copied to the target\nenvironment.</p>\n<p>To clone to a new environment, the user must have write permissions\nto the containing project. To clone into an existing environment,\nthe user must have write permissions to the target environment.</p>\n<p>Copying environments across projects or organizations is not\nallowed.</p>\n",
                    authed: true,
                },
            ],
            types: [],
            subpackages: [],
            pointsTo: undefined,
            urlSlug: "environments",
            description:
                "\nEnvironments are silos contained within projects that enables you to safely iterate on changes.\n\nEnvironments allow you to manage your policy throughout your entire development lifecycle,\nfrom dev to production. Typical environments within a project could be `production`, `staging`,\nor individual environments.\n\nEach project must contain at least one environment.\nYou may clone an environment from a base environment, similar to git branches.\nYou can later safely merge the changes, after you tested them.\n",
            htmlDescription:
                "<p>Environments are silos contained within projects that enables you to safely iterate on changes.</p>\n<p>Environments allow you to manage your policy throughout your entire development lifecycle,\nfrom dev to production. Typical environments within a project could be <code>production</code>, <code>staging</code>,\nor individual environments.</p>\n<p>Each project must contain at least one environment.\nYou may clone an environment from a base environment, similar to git branches.\nYou can later safely merge the changes, after you tested them.</p>\n",
        },
        subpackage_resources: {
            subpackageId: "subpackage_resources",
            name: "Resources",
            endpoints: [
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "list-resources",
                    method: "GET",
                    id: "list_resources",
                    name: "List Resources",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/schema/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/resources",
                            },
                        ],
                    },
                    queryParameters: [
                        {
                            key: "search",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                            },
                            description: "Text search for the resources name or key",
                        },
                        {
                            key: "include_built_in",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "boolean",
                                    },
                                },
                            },
                            description: "Whether to include or exclude built-in resources, default is False",
                        },
                        {
                            key: "include_total_count",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "boolean",
                                    },
                                },
                            },
                            description: "Include total count in response",
                        },
                        {
                            key: "page",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "integer",
                                    },
                                },
                            },
                            description: "Page number of the results to fetch, starting at 1.",
                        },
                        {
                            key: "per_page",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "integer",
                                    },
                                },
                            },
                            description: "The number of results per page (max 100).",
                        },
                    ],
                    headers: [],
                    request: undefined,
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:ListResourcesResponse",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/schema/string/string/resources",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                            },
                            queryParameters: {
                                search: "string",
                                include_built_in: true,
                            },
                            headers: {},
                            responseStatusCode: 200,
                            responseBody: {
                                data: [
                                    {
                                        key: "string",
                                        id: "string",
                                        organization_id: "string",
                                        project_id: "string",
                                        environment_id: "string",
                                        created_at: "string",
                                        updated_at: "string",
                                        name: "string",
                                        urn: "string",
                                        description: "string",
                                        actions: {
                                            string: {
                                                name: "string",
                                                description: "string",
                                                attributes: {
                                                    string: {},
                                                },
                                                id: "string",
                                                key: "string",
                                            },
                                        },
                                        attributes: {
                                            string: {
                                                type: "bool",
                                                description: "string",
                                                id: "string",
                                                key: "string",
                                            },
                                        },
                                        action_groups: {
                                            string: ["string"],
                                        },
                                    },
                                ],
                                total_count: 0,
                                page_count: 0,
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description: "Lists all the resources defined in your schema.",
                    htmlDescription: "<p>Lists all the resources defined in your schema.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "create-resource",
                    method: "POST",
                    id: "create_resource",
                    name: "Create Resource",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/schema/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/resources",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: {
                        type: {
                            type: "object",
                            extends: [],
                            properties: [
                                {
                                    key: "key",
                                    valueType: {
                                        type: "primitive",
                                        value: {
                                            type: "string",
                                        },
                                    },
                                    description:
                                        "A URL-friendly name of the resource (i.e: slug). You will be able to query later using this key instead of the id (UUID) of the resource.",
                                },
                                {
                                    key: "name",
                                    valueType: {
                                        type: "primitive",
                                        value: {
                                            type: "string",
                                        },
                                    },
                                    description: "The name of the resource",
                                },
                                {
                                    key: "urn",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "primitive",
                                            value: {
                                                type: "string",
                                            },
                                        },
                                    },
                                    description:
                                        "The [URN](https://en.wikipedia.org/wiki/Uniform_Resource_Name) (Uniform Resource Name) of the resource",
                                },
                                {
                                    key: "description",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "primitive",
                                            value: {
                                                type: "string",
                                            },
                                        },
                                    },
                                    description:
                                        "An optional longer description of what this resource respresents in your system",
                                },
                                {
                                    key: "actions",
                                    valueType: {
                                        type: "map",
                                        keyType: {
                                            type: "primitive",
                                            value: {
                                                type: "string",
                                            },
                                        },
                                        valueType: {
                                            type: "id",
                                            value: "type_:ActionBlockEditable",
                                        },
                                    },
                                    description:
                                        "\n        A actions definition block, typically contained within a resource type definition block.\n        The actions represents the ways you can interact with a protected resource.\n        ",
                                },
                                {
                                    key: "attributes",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "map",
                                            keyType: {
                                                type: "primitive",
                                                value: {
                                                    type: "string",
                                                },
                                            },
                                            valueType: {
                                                type: "id",
                                                value: "type_:AttributeBlockEditable",
                                            },
                                        },
                                    },
                                    description:
                                        "Attributes that each resource of this type defines, and can be used in your ABAC policies.",
                                },
                            ],
                        },
                    },
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:ResourceRead",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/schema/string/string/resources",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            requestBody: {
                                key: "string",
                                name: "string",
                                actions: {
                                    string: {},
                                },
                            },
                            responseStatusCode: 200,
                            responseBody: {
                                key: "string",
                                id: "string",
                                organization_id: "string",
                                project_id: "string",
                                environment_id: "string",
                                created_at: "string",
                                updated_at: "string",
                                name: "string",
                                urn: "string",
                                description: "string",
                                actions: {
                                    string: {
                                        name: "string",
                                        description: "string",
                                        attributes: {
                                            string: {},
                                        },
                                        id: "string",
                                        key: "string",
                                    },
                                },
                                attributes: {
                                    string: {
                                        type: "bool",
                                        description: "string",
                                        id: "string",
                                        key: "string",
                                    },
                                },
                                action_groups: {
                                    string: ["string"],
                                },
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description: "Creates a new resource (a type of object you may protect with permissions).",
                    htmlDescription:
                        "<p>Creates a new resource (a type of object you may protect with permissions).</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "get-resource",
                    method: "GET",
                    id: "get_resource",
                    name: "Get Resource",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                            {
                                key: "resource_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the resource, or the URL-friendly key of the resource (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/schema/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/resources/",
                            },
                            {
                                type: "pathParameter",
                                value: "resource_id",
                            },
                            {
                                type: "literal",
                                value: "",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: undefined,
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:ResourceRead",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/schema/string/string/resources/string",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                                resource_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            responseStatusCode: 200,
                            responseBody: {
                                key: "string",
                                id: "string",
                                organization_id: "string",
                                project_id: "string",
                                environment_id: "string",
                                created_at: "string",
                                updated_at: "string",
                                name: "string",
                                urn: "string",
                                description: "string",
                                actions: {
                                    string: {
                                        name: "string",
                                        description: "string",
                                        attributes: {
                                            string: {},
                                        },
                                        id: "string",
                                        key: "string",
                                    },
                                },
                                attributes: {
                                    string: {
                                        type: "bool",
                                        description: "string",
                                        id: "string",
                                        key: "string",
                                    },
                                },
                                action_groups: {
                                    string: ["string"],
                                },
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description: "Gets a single resource, if such resource exists.",
                    htmlDescription: "<p>Gets a single resource, if such resource exists.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "replace-resource",
                    method: "PUT",
                    id: "replace_resource",
                    name: "Replace Resource",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                            {
                                key: "resource_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the resource, or the URL-friendly key of the resource (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/schema/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/resources/",
                            },
                            {
                                type: "pathParameter",
                                value: "resource_id",
                            },
                            {
                                type: "literal",
                                value: "",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: {
                        type: {
                            type: "object",
                            extends: [],
                            properties: [
                                {
                                    key: "name",
                                    valueType: {
                                        type: "primitive",
                                        value: {
                                            type: "string",
                                        },
                                    },
                                    description: "The name of the resource",
                                },
                                {
                                    key: "urn",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "primitive",
                                            value: {
                                                type: "string",
                                            },
                                        },
                                    },
                                    description:
                                        "The [URN](https://en.wikipedia.org/wiki/Uniform_Resource_Name) (Uniform Resource Name) of the resource",
                                },
                                {
                                    key: "description",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "primitive",
                                            value: {
                                                type: "string",
                                            },
                                        },
                                    },
                                    description:
                                        "An optional longer description of what this resource respresents in your system",
                                },
                                {
                                    key: "actions",
                                    valueType: {
                                        type: "map",
                                        keyType: {
                                            type: "primitive",
                                            value: {
                                                type: "string",
                                            },
                                        },
                                        valueType: {
                                            type: "id",
                                            value: "type_:ActionBlockEditable",
                                        },
                                    },
                                    description:
                                        "\n        A actions definition block, typically contained within a resource type definition block.\n        The actions represents the ways you can interact with a protected resource.\n        ",
                                },
                                {
                                    key: "attributes",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "map",
                                            keyType: {
                                                type: "primitive",
                                                value: {
                                                    type: "string",
                                                },
                                            },
                                            valueType: {
                                                type: "id",
                                                value: "type_:AttributeBlockEditable",
                                            },
                                        },
                                    },
                                    description:
                                        "Attributes that each resource of this type defines, and can be used in your ABAC policies.",
                                },
                            ],
                        },
                    },
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:ResourceRead",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/schema/string/string/resources/string",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                                resource_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            requestBody: {
                                name: "string",
                                actions: {
                                    string: {},
                                },
                            },
                            responseStatusCode: 200,
                            responseBody: {
                                key: "string",
                                id: "string",
                                organization_id: "string",
                                project_id: "string",
                                environment_id: "string",
                                created_at: "string",
                                updated_at: "string",
                                name: "string",
                                urn: "string",
                                description: "string",
                                actions: {
                                    string: {
                                        name: "string",
                                        description: "string",
                                        attributes: {
                                            string: {},
                                        },
                                        id: "string",
                                        key: "string",
                                    },
                                },
                                attributes: {
                                    string: {
                                        type: "bool",
                                        description: "string",
                                        id: "string",
                                        key: "string",
                                    },
                                },
                                action_groups: {
                                    string: ["string"],
                                },
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description:
                        "Completely replaces the resource definition.\n\n- If the resource key is changed, all role and permissions assignments for the the resource will be revoked.\n- If the resource key is unchanged, but some actions are removed or renamed from the resource definition,\nrole and permissions assignments for these actions will be revoked.\n\nTODO: we need to decide if we are auto-revoking, or if we are rejecting the PUT completely while there are permissions that can be affected.",
                    htmlDescription:
                        "<p>Completely replaces the resource definition.</p>\n<ul>\n<li>If the resource key is changed, all role and permissions assignments for the the resource will be revoked.</li>\n<li>If the resource key is unchanged, but some actions are removed or renamed from the resource definition,\nrole and permissions assignments for these actions will be revoked.</li>\n</ul>\n<p>TODO: we need to decide if we are auto-revoking, or if we are rejecting the PUT completely while there are permissions that can be affected.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "update-resource",
                    method: "PATCH",
                    id: "update_resource",
                    name: "Update Resource",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                            {
                                key: "resource_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the resource, or the URL-friendly key of the resource (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/schema/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/resources/",
                            },
                            {
                                type: "pathParameter",
                                value: "resource_id",
                            },
                            {
                                type: "literal",
                                value: "",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: {
                        type: {
                            type: "object",
                            extends: [],
                            properties: [
                                {
                                    key: "name",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "primitive",
                                            value: {
                                                type: "string",
                                            },
                                        },
                                    },
                                    description: "The name of the resource",
                                },
                                {
                                    key: "urn",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "primitive",
                                            value: {
                                                type: "string",
                                            },
                                        },
                                    },
                                    description:
                                        "The [URN](https://en.wikipedia.org/wiki/Uniform_Resource_Name) (Uniform Resource Name) of the resource",
                                },
                                {
                                    key: "description",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "primitive",
                                            value: {
                                                type: "string",
                                            },
                                        },
                                    },
                                    description:
                                        "An optional longer description of what this resource respresents in your system",
                                },
                                {
                                    key: "actions",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "map",
                                            keyType: {
                                                type: "primitive",
                                                value: {
                                                    type: "string",
                                                },
                                            },
                                            valueType: {
                                                type: "id",
                                                value: "type_:ActionBlockEditable",
                                            },
                                        },
                                    },
                                    description:
                                        "\n        A actions definition block, typically contained within a resource type definition block.\n        The actions represents the ways you can interact with a protected resource.\n        ",
                                },
                                {
                                    key: "attributes",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "map",
                                            keyType: {
                                                type: "primitive",
                                                value: {
                                                    type: "string",
                                                },
                                            },
                                            valueType: {
                                                type: "id",
                                                value: "type_:AttributeBlockEditable",
                                            },
                                        },
                                    },
                                    description:
                                        "Attributes that each resource of this type defines, and can be used in your ABAC policies.",
                                },
                            ],
                        },
                    },
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:ResourceRead",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/schema/string/string/resources/string",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                                resource_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            requestBody: {},
                            responseStatusCode: 200,
                            responseBody: {
                                key: "string",
                                id: "string",
                                organization_id: "string",
                                project_id: "string",
                                environment_id: "string",
                                created_at: "string",
                                updated_at: "string",
                                name: "string",
                                urn: "string",
                                description: "string",
                                actions: {
                                    string: {
                                        name: "string",
                                        description: "string",
                                        attributes: {
                                            string: {},
                                        },
                                        id: "string",
                                        key: "string",
                                    },
                                },
                                attributes: {
                                    string: {
                                        type: "bool",
                                        description: "string",
                                        id: "string",
                                        key: "string",
                                    },
                                },
                                action_groups: {
                                    string: ["string"],
                                },
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description:
                        "Partially updates the resource definition.\nFields that will be provided will be completely overwritten.",
                    htmlDescription:
                        "<p>Partially updates the resource definition.\nFields that will be provided will be completely overwritten.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "delete-resource",
                    method: "DELETE",
                    id: "delete_resource",
                    name: "Delete Resource",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                            {
                                key: "resource_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the resource, or the URL-friendly key of the resource (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/schema/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/resources/",
                            },
                            {
                                type: "pathParameter",
                                value: "resource_id",
                            },
                            {
                                type: "literal",
                                value: "",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: undefined,
                    response: undefined,
                    examples: [
                        {
                            path: "/v2/schema/string/string/resources/string",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                                resource_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            responseStatusCode: 200,
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description: "Deletes the resource and all its related data.",
                    htmlDescription: "<p>Deletes the resource and all its related data.</p>\n",
                    authed: true,
                },
            ],
            types: [],
            subpackages: [],
            pointsTo: undefined,
            urlSlug: "resources",
            description:
                '\nResources are *types* of objects or feature names that you wish to protect (or gate) with permissions.\n\nFor example, if you build a document-sharing app like google docs, you might want to define a "document" resource.\n\nA resource definition block typically contains **actions**.\nActions are the various ways you can interact with the object / feature. Each (resource, action) pair defines a unique permission level.\n\nA resource may also contain:\n- roles (if you wish to define resource-bound roles or if your permissions model is relational)\n- relations to other resources (if your permissions model is relational, i.e: you work with a ReBAC model)\n- attributes (attributes that are typically defined on the resource, typically used in ABAC models)\n',
            htmlDescription:
                "<p>Resources are <em>types</em> of objects or feature names that you wish to protect (or gate) with permissions.</p>\n<p>For example, if you build a document-sharing app like google docs, you might want to define a &quot;document&quot; resource.</p>\n<p>A resource definition block typically contains <strong>actions</strong>.\nActions are the various ways you can interact with the object / feature. Each (resource, action) pair defines a unique permission level.</p>\n<p>A resource may also contain:</p>\n<ul>\n<li>roles (if you wish to define resource-bound roles or if your permissions model is relational)</li>\n<li>relations to other resources (if your permissions model is relational, i.e: you work with a ReBAC model)</li>\n<li>attributes (attributes that are typically defined on the resource, typically used in ABAC models)</li>\n</ul>\n",
        },
        subpackage_resourceActions: {
            subpackageId: "subpackage_resourceActions",
            name: "Resource Actions",
            endpoints: [
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "list-resource-actions",
                    method: "GET",
                    id: "list_resource_actions",
                    name: "List Resource Actions",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                            {
                                key: "resource_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the resource, or the URL-friendly key of the resource (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/schema/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/resources/",
                            },
                            {
                                type: "pathParameter",
                                value: "resource_id",
                            },
                            {
                                type: "literal",
                                value: "/actions",
                            },
                        ],
                    },
                    queryParameters: [
                        {
                            key: "page",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "integer",
                                    },
                                },
                            },
                            description: "Page number of the results to fetch, starting at 1.",
                        },
                        {
                            key: "per_page",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "integer",
                                    },
                                },
                            },
                            description: "The number of results per page (max 100).",
                        },
                    ],
                    headers: [],
                    request: undefined,
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "list",
                                itemType: {
                                    type: "id",
                                    value: "type_:ResourceActionRead",
                                },
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/schema/string/string/resources/string/actions",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                                resource_id: "string",
                            },
                            queryParameters: {
                                page: 0,
                                per_page: 0,
                            },
                            headers: {},
                            responseStatusCode: 200,
                            responseBody: [
                                {
                                    name: "string",
                                    description: "string",
                                    attributes: {
                                        string: {},
                                    },
                                    key: "string",
                                    id: "string",
                                    permission_name: "string",
                                    organization_id: "string",
                                    project_id: "string",
                                    environment_id: "string",
                                    resource_id: "string",
                                    created_at: "string",
                                    updated_at: "string",
                                },
                            ],
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description: "Lists all the actions defined on the resource.",
                    htmlDescription: "<p>Lists all the actions defined on the resource.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "create-resource-action",
                    method: "POST",
                    id: "create_resource_action",
                    name: "Create Resource Action",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                            {
                                key: "resource_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the resource, or the URL-friendly key of the resource (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/schema/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/resources/",
                            },
                            {
                                type: "pathParameter",
                                value: "resource_id",
                            },
                            {
                                type: "literal",
                                value: "/actions",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: {
                        type: {
                            type: "object",
                            extends: [],
                            properties: [
                                {
                                    key: "key",
                                    valueType: {
                                        type: "primitive",
                                        value: {
                                            type: "string",
                                        },
                                    },
                                    description:
                                        "A URL-friendly name of the action (i.e: slug). You will be able to query later using this key instead of the id (UUID) of the action.",
                                },
                                {
                                    key: "name",
                                    valueType: {
                                        type: "primitive",
                                        value: {
                                            type: "string",
                                        },
                                    },
                                    description: "The name of the action",
                                },
                                {
                                    key: "description",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "primitive",
                                            value: {
                                                type: "string",
                                            },
                                        },
                                    },
                                    description:
                                        "An optional longer description of what this action respresents in your system",
                                },
                                {
                                    key: "attributes",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "map",
                                            keyType: {
                                                type: "primitive",
                                                value: {
                                                    type: "string",
                                                },
                                            },
                                            valueType: {
                                                type: "unknown",
                                            },
                                        },
                                    },
                                    description:
                                        "optional dictionary of key-value pairs that can be used to store arbitrary metadata about this action. This metadata can be used to filter actions using query parameters with attr_ prefix",
                                },
                            ],
                        },
                    },
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:ResourceActionRead",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/schema/string/string/resources/string/actions",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                                resource_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            requestBody: {
                                key: "string",
                                name: "string",
                            },
                            responseStatusCode: 200,
                            responseBody: {
                                name: "string",
                                description: "string",
                                attributes: {
                                    string: {},
                                },
                                key: "string",
                                id: "string",
                                permission_name: "string",
                                organization_id: "string",
                                project_id: "string",
                                environment_id: "string",
                                resource_id: "string",
                                created_at: "string",
                                updated_at: "string",
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description: "Creates a new action that can affect the resource.",
                    htmlDescription: "<p>Creates a new action that can affect the resource.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "get-resource-action",
                    method: "GET",
                    id: "get_resource_action",
                    name: "Get Resource Action",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                            {
                                key: "resource_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the resource, or the URL-friendly key of the resource (i.e: the "slug").',
                            },
                            {
                                key: "action_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the action, or the URL-friendly key of the action (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/schema/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/resources/",
                            },
                            {
                                type: "pathParameter",
                                value: "resource_id",
                            },
                            {
                                type: "literal",
                                value: "/actions/",
                            },
                            {
                                type: "pathParameter",
                                value: "action_id",
                            },
                            {
                                type: "literal",
                                value: "",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: undefined,
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:ResourceActionRead",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/schema/string/string/resources/string/actions/string",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                                resource_id: "string",
                                action_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            responseStatusCode: 200,
                            responseBody: {
                                name: "string",
                                description: "string",
                                attributes: {
                                    string: {},
                                },
                                key: "string",
                                id: "string",
                                permission_name: "string",
                                organization_id: "string",
                                project_id: "string",
                                environment_id: "string",
                                resource_id: "string",
                                created_at: "string",
                                updated_at: "string",
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description: "Gets a single action defined on the resource, if such action exists.",
                    htmlDescription: "<p>Gets a single action defined on the resource, if such action exists.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "update-resource-action",
                    method: "PATCH",
                    id: "update_resource_action",
                    name: "Update Resource Action",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                            {
                                key: "resource_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the resource, or the URL-friendly key of the resource (i.e: the "slug").',
                            },
                            {
                                key: "action_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the action, or the URL-friendly key of the action (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/schema/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/resources/",
                            },
                            {
                                type: "pathParameter",
                                value: "resource_id",
                            },
                            {
                                type: "literal",
                                value: "/actions/",
                            },
                            {
                                type: "pathParameter",
                                value: "action_id",
                            },
                            {
                                type: "literal",
                                value: "",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: {
                        type: {
                            type: "object",
                            extends: [],
                            properties: [
                                {
                                    key: "name",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "primitive",
                                            value: {
                                                type: "string",
                                            },
                                        },
                                    },
                                    description: "The name of the action",
                                },
                                {
                                    key: "description",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "primitive",
                                            value: {
                                                type: "string",
                                            },
                                        },
                                    },
                                    description:
                                        "An optional longer description of what this action respresents in your system",
                                },
                                {
                                    key: "attributes",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "map",
                                            keyType: {
                                                type: "primitive",
                                                value: {
                                                    type: "string",
                                                },
                                            },
                                            valueType: {
                                                type: "unknown",
                                            },
                                        },
                                    },
                                    description:
                                        "optional dictionary of key-value pairs that can be used to store arbitrary metadata about this action. This metadata can be used to filter actions using query parameters with attr_ prefix",
                                },
                            ],
                        },
                    },
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:ResourceActionRead",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/schema/string/string/resources/string/actions/string",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                                resource_id: "string",
                                action_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            requestBody: {},
                            responseStatusCode: 200,
                            responseBody: {
                                name: "string",
                                description: "string",
                                attributes: {
                                    string: {},
                                },
                                key: "string",
                                id: "string",
                                permission_name: "string",
                                organization_id: "string",
                                project_id: "string",
                                environment_id: "string",
                                resource_id: "string",
                                created_at: "string",
                                updated_at: "string",
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description:
                        "Partially updates the action defined on a resource.\nFields that will be provided will be completely overwritten.",
                    htmlDescription:
                        "<p>Partially updates the action defined on a resource.\nFields that will be provided will be completely overwritten.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "delete-resource-action",
                    method: "DELETE",
                    id: "delete_resource_action",
                    name: "Delete Resource Action",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                            {
                                key: "resource_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the resource, or the URL-friendly key of the resource (i.e: the "slug").',
                            },
                            {
                                key: "action_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the action, or the URL-friendly key of the action (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/schema/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/resources/",
                            },
                            {
                                type: "pathParameter",
                                value: "resource_id",
                            },
                            {
                                type: "literal",
                                value: "/actions/",
                            },
                            {
                                type: "pathParameter",
                                value: "action_id",
                            },
                            {
                                type: "literal",
                                value: "",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: undefined,
                    response: undefined,
                    examples: [
                        {
                            path: "/v2/schema/string/string/resources/string/actions/string",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                                resource_id: "string",
                                action_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            responseStatusCode: 200,
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description:
                        "Deletes the action and all its related data.\nThis includes any permissions granted to perform the action.",
                    htmlDescription:
                        "<p>Deletes the action and all its related data.\nThis includes any permissions granted to perform the action.</p>\n",
                    authed: true,
                },
            ],
            types: [],
            subpackages: [],
            pointsTo: undefined,
            urlSlug: "resource-actions",
            description:
                "\nActions are the various ways you can interact with a resource or affect the resource.\nEach (resource, action) pair defines a unique permission level.\n",
            htmlDescription:
                "<p>Actions are the various ways you can interact with a resource or affect the resource.\nEach (resource, action) pair defines a unique permission level.</p>\n",
        },
        subpackage_resourceActionGroups: {
            subpackageId: "subpackage_resourceActionGroups",
            name: "Resource Action Groups",
            endpoints: [
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "list-resource-action-groups",
                    method: "GET",
                    id: "list_resource_action_groups",
                    name: "List Resource Action Groups",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                            {
                                key: "resource_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the resource, or the URL-friendly key of the resource (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/schema/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/resources/",
                            },
                            {
                                type: "pathParameter",
                                value: "resource_id",
                            },
                            {
                                type: "literal",
                                value: "/action_groups",
                            },
                        ],
                    },
                    queryParameters: [
                        {
                            key: "page",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "integer",
                                    },
                                },
                            },
                            description: "Page number of the results to fetch, starting at 1.",
                        },
                        {
                            key: "per_page",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "integer",
                                    },
                                },
                            },
                            description: "The number of results per page (max 100).",
                        },
                    ],
                    headers: [],
                    request: undefined,
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "list",
                                itemType: {
                                    type: "id",
                                    value: "type_:ResourceActionGroupRead",
                                },
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/schema/string/string/resources/string/action_groups",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                                resource_id: "string",
                            },
                            queryParameters: {
                                page: 0,
                                per_page: 0,
                            },
                            headers: {},
                            responseStatusCode: 200,
                            responseBody: [
                                {
                                    name: "string",
                                    description: "string",
                                    attributes: {
                                        string: {},
                                    },
                                    actions: ["string"],
                                    key: "string",
                                    id: "string",
                                    organization_id: "string",
                                    project_id: "string",
                                    environment_id: "string",
                                    resource_id: "string",
                                    created_at: "string",
                                    updated_at: "string",
                                },
                            ],
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description: "Lists all the action groups defined on the resource.",
                    htmlDescription: "<p>Lists all the action groups defined on the resource.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "create-resource-action-group",
                    method: "POST",
                    id: "create_resource_action_group",
                    name: "Create Resource Action Group",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                            {
                                key: "resource_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the resource, or the URL-friendly key of the resource (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/schema/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/resources/",
                            },
                            {
                                type: "pathParameter",
                                value: "resource_id",
                            },
                            {
                                type: "literal",
                                value: "/action_groups",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: {
                        type: {
                            type: "object",
                            extends: [],
                            properties: [
                                {
                                    key: "key",
                                    valueType: {
                                        type: "primitive",
                                        value: {
                                            type: "string",
                                        },
                                    },
                                    description:
                                        "A URL-friendly name of the action group (i.e: slug). You will be able to query later using this key instead of the id (UUID) of the action group.",
                                },
                                {
                                    key: "name",
                                    valueType: {
                                        type: "primitive",
                                        value: {
                                            type: "string",
                                        },
                                    },
                                    description: "The name of the action group",
                                },
                                {
                                    key: "description",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "primitive",
                                            value: {
                                                type: "string",
                                            },
                                        },
                                    },
                                    description:
                                        "An optional longer description of what this action group represents in your system",
                                },
                                {
                                    key: "attributes",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "map",
                                            keyType: {
                                                type: "primitive",
                                                value: {
                                                    type: "string",
                                                },
                                            },
                                            valueType: {
                                                type: "unknown",
                                            },
                                        },
                                    },
                                    description:
                                        "optional dictionary of key-value pairs that can be used to store arbitrary metadata about this action group. This metadata can be used to filter action groups using query parameters with attr_ prefix",
                                },
                                {
                                    key: "actions",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "list",
                                            itemType: {
                                                type: "primitive",
                                                value: {
                                                    type: "string",
                                                },
                                            },
                                        },
                                    },
                                    description: undefined,
                                },
                            ],
                        },
                    },
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:ResourceActionGroupRead",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/schema/string/string/resources/string/action_groups",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                                resource_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            requestBody: {
                                key: "string",
                                name: "string",
                            },
                            responseStatusCode: 200,
                            responseBody: {
                                name: "string",
                                description: "string",
                                attributes: {
                                    string: {},
                                },
                                actions: ["string"],
                                key: "string",
                                id: "string",
                                organization_id: "string",
                                project_id: "string",
                                environment_id: "string",
                                resource_id: "string",
                                created_at: "string",
                                updated_at: "string",
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description: "Creates a new action group that can affect the resource.",
                    htmlDescription: "<p>Creates a new action group that can affect the resource.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "get-resource-action-group",
                    method: "GET",
                    id: "get_resource_action_group",
                    name: "Get Resource Action Group",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                            {
                                key: "resource_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the resource, or the URL-friendly key of the resource (i.e: the "slug").',
                            },
                            {
                                key: "action_group_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the action group, or the URL-friendly key of the action group (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/schema/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/resources/",
                            },
                            {
                                type: "pathParameter",
                                value: "resource_id",
                            },
                            {
                                type: "literal",
                                value: "/action_groups/",
                            },
                            {
                                type: "pathParameter",
                                value: "action_group_id",
                            },
                            {
                                type: "literal",
                                value: "",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: undefined,
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:ResourceActionGroupRead",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/schema/string/string/resources/string/action_groups/string",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                                resource_id: "string",
                                action_group_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            responseStatusCode: 200,
                            responseBody: {
                                name: "string",
                                description: "string",
                                attributes: {
                                    string: {},
                                },
                                actions: ["string"],
                                key: "string",
                                id: "string",
                                organization_id: "string",
                                project_id: "string",
                                environment_id: "string",
                                resource_id: "string",
                                created_at: "string",
                                updated_at: "string",
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description: "Gets a single action group defined on the resource, if such action exists.",
                    htmlDescription:
                        "<p>Gets a single action group defined on the resource, if such action exists.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "update-resource-action-group",
                    method: "PATCH",
                    id: "update_resource_action_group",
                    name: "Update Resource Action Group",
                    path: {
                        pathParameters: [
                            {
                                key: "resource_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the resource, or the URL-friendly key of the resource (i.e: the "slug").',
                            },
                            {
                                key: "action_group_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the action group, or the URL-friendly key of the action group (i.e: the "slug").',
                            },
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/schema/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/resources/",
                            },
                            {
                                type: "pathParameter",
                                value: "resource_id",
                            },
                            {
                                type: "literal",
                                value: "/action_groups/",
                            },
                            {
                                type: "pathParameter",
                                value: "action_group_id",
                            },
                            {
                                type: "literal",
                                value: "",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: {
                        type: {
                            type: "object",
                            extends: [],
                            properties: [
                                {
                                    key: "name",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "primitive",
                                            value: {
                                                type: "string",
                                            },
                                        },
                                    },
                                    description: "The name of the action group",
                                },
                                {
                                    key: "description",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "primitive",
                                            value: {
                                                type: "string",
                                            },
                                        },
                                    },
                                    description:
                                        "An optional longer description of what this action group represents in your system",
                                },
                                {
                                    key: "attributes",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "map",
                                            keyType: {
                                                type: "primitive",
                                                value: {
                                                    type: "string",
                                                },
                                            },
                                            valueType: {
                                                type: "unknown",
                                            },
                                        },
                                    },
                                    description:
                                        "optional dictionary of key-value pairs that can be used to store arbitrary metadata about this action group. This metadata can be used to filter action groups using query parameters with attr_ prefix",
                                },
                                {
                                    key: "actions",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "list",
                                            itemType: {
                                                type: "primitive",
                                                value: {
                                                    type: "string",
                                                },
                                            },
                                        },
                                    },
                                    description: undefined,
                                },
                            ],
                        },
                    },
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:ResourceActionGroupRead",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/schema/string/string/resources/string/action_groups/string",
                            pathParameters: {
                                resource_id: "string",
                                action_group_id: "string",
                                proj_id: "string",
                                env_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            requestBody: {},
                            responseStatusCode: 200,
                            responseBody: {
                                name: "string",
                                description: "string",
                                attributes: {
                                    string: {},
                                },
                                actions: ["string"],
                                key: "string",
                                id: "string",
                                organization_id: "string",
                                project_id: "string",
                                environment_id: "string",
                                resource_id: "string",
                                created_at: "string",
                                updated_at: "string",
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description:
                        "Partially updates the action defined on a resource.\nFields that will be provided will be completely overwritten.",
                    htmlDescription:
                        "<p>Partially updates the action defined on a resource.\nFields that will be provided will be completely overwritten.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "delete-resource-action-group",
                    method: "DELETE",
                    id: "delete_resource_action_group",
                    name: "Delete Resource Action Group",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                            {
                                key: "resource_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the resource, or the URL-friendly key of the resource (i.e: the "slug").',
                            },
                            {
                                key: "action_group_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the action group, or the URL-friendly key of the action group (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/schema/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/resources/",
                            },
                            {
                                type: "pathParameter",
                                value: "resource_id",
                            },
                            {
                                type: "literal",
                                value: "/action_groups/",
                            },
                            {
                                type: "pathParameter",
                                value: "action_group_id",
                            },
                            {
                                type: "literal",
                                value: "",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: undefined,
                    response: undefined,
                    examples: [
                        {
                            path: "/v2/schema/string/string/resources/string/action_groups/string",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                                resource_id: "string",
                                action_group_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            responseStatusCode: 200,
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description:
                        "Deletes the action and all its related data.\nThis includes any permissions granted to perform the action.",
                    htmlDescription:
                        "<p>Deletes the action and all its related data.\nThis includes any permissions granted to perform the action.</p>\n",
                    authed: true,
                },
            ],
            types: [],
            subpackages: [],
            pointsTo: undefined,
            urlSlug: "resource-action-groups",
            description: "\nResource Action Groups are groups of actions that are assigned\nto a role as one action.\n",
            htmlDescription:
                "<p>Resource Action Groups are groups of actions that are assigned\nto a role as one action.</p>\n",
        },
        subpackage_resourceRoles: {
            subpackageId: "subpackage_resourceRoles",
            name: "Resource Roles",
            endpoints: [
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "list-resource-roles",
                    method: "GET",
                    id: "list_resource_roles",
                    name: "List Resource Roles",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                            {
                                key: "resource_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the resource, or the URL-friendly key of the resource (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/schema/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/resources/",
                            },
                            {
                                type: "pathParameter",
                                value: "resource_id",
                            },
                            {
                                type: "literal",
                                value: "/roles",
                            },
                        ],
                    },
                    queryParameters: [
                        {
                            key: "page",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "integer",
                                    },
                                },
                            },
                            description: "Page number of the results to fetch, starting at 1.",
                        },
                        {
                            key: "per_page",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "integer",
                                    },
                                },
                            },
                            description: "The number of results per page (max 100).",
                        },
                    ],
                    headers: [],
                    request: undefined,
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "list",
                                itemType: {
                                    type: "id",
                                    value: "type_:ResourceRoleRead",
                                },
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/schema/string/string/resources/string/roles",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                                resource_id: "string",
                            },
                            queryParameters: {
                                page: 0,
                                per_page: 0,
                            },
                            headers: {},
                            responseStatusCode: 200,
                            responseBody: [
                                {
                                    name: "string",
                                    description: "string",
                                    permissions: ["string"],
                                    attributes: {
                                        string: {},
                                    },
                                    extends: ["string"],
                                    key: "string",
                                    id: "string",
                                    organization_id: "string",
                                    project_id: "string",
                                    environment_id: "string",
                                    resource_id: "string",
                                    created_at: "string",
                                    updated_at: "string",
                                },
                            ],
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description: "Lists all the roles defined on the resource.",
                    htmlDescription: "<p>Lists all the roles defined on the resource.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "create-resource-role",
                    method: "POST",
                    id: "create_resource_role",
                    name: "Create Resource Role",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                            {
                                key: "resource_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the resource, or the URL-friendly key of the resource (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/schema/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/resources/",
                            },
                            {
                                type: "pathParameter",
                                value: "resource_id",
                            },
                            {
                                type: "literal",
                                value: "/roles",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: {
                        type: {
                            type: "object",
                            extends: [],
                            properties: [
                                {
                                    key: "key",
                                    valueType: {
                                        type: "primitive",
                                        value: {
                                            type: "string",
                                        },
                                    },
                                    description:
                                        "A URL-friendly name of the role (i.e: slug). You will be able to query later using this key instead of the id (UUID) of the role.",
                                },
                                {
                                    key: "name",
                                    valueType: {
                                        type: "primitive",
                                        value: {
                                            type: "string",
                                        },
                                    },
                                    description: "The name of the role",
                                },
                                {
                                    key: "description",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "primitive",
                                            value: {
                                                type: "string",
                                            },
                                        },
                                    },
                                    description:
                                        "optional description string explaining what this role represents, or what permissions are granted to it.",
                                },
                                {
                                    key: "permissions",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "list",
                                            itemType: {
                                                type: "primitive",
                                                value: {
                                                    type: "string",
                                                },
                                            },
                                        },
                                    },
                                    description:
                                        "list of action keys that define what actions this resource role is permitted to do",
                                },
                                {
                                    key: "attributes",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "map",
                                            keyType: {
                                                type: "primitive",
                                                value: {
                                                    type: "string",
                                                },
                                            },
                                            valueType: {
                                                type: "unknown",
                                            },
                                        },
                                    },
                                    description:
                                        "optional dictionary of key-value pairs that can be used to store arbitrary metadata about this role. This metadata can be used to filter role using query parameters with attr_ prefix, currently supports only 'equals' operator",
                                },
                                {
                                    key: "extends",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "list",
                                            itemType: {
                                                type: "primitive",
                                                value: {
                                                    type: "string",
                                                },
                                            },
                                        },
                                    },
                                    description:
                                        "list of role keys that define what roles this role extends. In other words: this role will automatically inherit all the permissions of the given roles in this list.",
                                },
                            ],
                        },
                    },
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:ResourceRoleRead",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/schema/string/string/resources/string/roles",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                                resource_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            requestBody: {
                                key: "string",
                                name: "string",
                            },
                            responseStatusCode: 200,
                            responseBody: {
                                name: "string",
                                description: "string",
                                permissions: ["string"],
                                attributes: {
                                    string: {},
                                },
                                extends: ["string"],
                                key: "string",
                                id: "string",
                                organization_id: "string",
                                project_id: "string",
                                environment_id: "string",
                                resource_id: "string",
                                created_at: "string",
                                updated_at: "string",
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description: "Creates a new role associated with the resource.",
                    htmlDescription: "<p>Creates a new role associated with the resource.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "get-resource-role",
                    method: "GET",
                    id: "get_resource_role",
                    name: "Get Resource Role",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                            {
                                key: "resource_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the resource, or the URL-friendly key of the resource (i.e: the "slug").',
                            },
                            {
                                key: "role_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the role, or the URL-friendly key of the role (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/schema/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/resources/",
                            },
                            {
                                type: "pathParameter",
                                value: "resource_id",
                            },
                            {
                                type: "literal",
                                value: "/roles/",
                            },
                            {
                                type: "pathParameter",
                                value: "role_id",
                            },
                            {
                                type: "literal",
                                value: "",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: undefined,
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:ResourceRoleRead",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/schema/string/string/resources/string/roles/string",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                                resource_id: "string",
                                role_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            responseStatusCode: 200,
                            responseBody: {
                                name: "string",
                                description: "string",
                                permissions: ["string"],
                                attributes: {
                                    string: {},
                                },
                                extends: ["string"],
                                key: "string",
                                id: "string",
                                organization_id: "string",
                                project_id: "string",
                                environment_id: "string",
                                resource_id: "string",
                                created_at: "string",
                                updated_at: "string",
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description: "Gets a single role defined on the resource, if such role exists.",
                    htmlDescription: "<p>Gets a single role defined on the resource, if such role exists.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "update-resource-role",
                    method: "PATCH",
                    id: "update_resource_role",
                    name: "Update Resource Role",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                            {
                                key: "resource_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the resource, or the URL-friendly key of the resource (i.e: the "slug").',
                            },
                            {
                                key: "role_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the role, or the URL-friendly key of the role (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/schema/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/resources/",
                            },
                            {
                                type: "pathParameter",
                                value: "resource_id",
                            },
                            {
                                type: "literal",
                                value: "/roles/",
                            },
                            {
                                type: "pathParameter",
                                value: "role_id",
                            },
                            {
                                type: "literal",
                                value: "",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: {
                        type: {
                            type: "object",
                            extends: [],
                            properties: [
                                {
                                    key: "name",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "primitive",
                                            value: {
                                                type: "string",
                                            },
                                        },
                                    },
                                    description: "The name of the role",
                                },
                                {
                                    key: "description",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "primitive",
                                            value: {
                                                type: "string",
                                            },
                                        },
                                    },
                                    description:
                                        "optional description string explaining what this role represents, or what permissions are granted to it.",
                                },
                                {
                                    key: "permissions",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "list",
                                            itemType: {
                                                type: "primitive",
                                                value: {
                                                    type: "string",
                                                },
                                            },
                                        },
                                    },
                                    description:
                                        "list of action keys that define what actions this resource role is permitted to do",
                                },
                                {
                                    key: "attributes",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "map",
                                            keyType: {
                                                type: "primitive",
                                                value: {
                                                    type: "string",
                                                },
                                            },
                                            valueType: {
                                                type: "unknown",
                                            },
                                        },
                                    },
                                    description:
                                        "optional dictionary of key-value pairs that can be used to store arbitrary metadata about this role. This metadata can be used to filter role using query parameters with attr_ prefix, currently supports only 'equals' operator",
                                },
                                {
                                    key: "extends",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "list",
                                            itemType: {
                                                type: "primitive",
                                                value: {
                                                    type: "string",
                                                },
                                            },
                                        },
                                    },
                                    description:
                                        "list of role keys that define what roles this role extends. In other words: this role will automatically inherit all the permissions of the given roles in this list.",
                                },
                            ],
                        },
                    },
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:ResourceRoleRead",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/schema/string/string/resources/string/roles/string",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                                resource_id: "string",
                                role_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            requestBody: {},
                            responseStatusCode: 200,
                            responseBody: {
                                name: "string",
                                description: "string",
                                permissions: ["string"],
                                attributes: {
                                    string: {},
                                },
                                extends: ["string"],
                                key: "string",
                                id: "string",
                                organization_id: "string",
                                project_id: "string",
                                environment_id: "string",
                                resource_id: "string",
                                created_at: "string",
                                updated_at: "string",
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description:
                        "Partially updates the role defined on a resource.\nFields that will be provided will be completely overwritten.",
                    htmlDescription:
                        "<p>Partially updates the role defined on a resource.\nFields that will be provided will be completely overwritten.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "delete-resource-role",
                    method: "DELETE",
                    id: "delete_resource_role",
                    name: "Delete Resource Role",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                            {
                                key: "resource_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the resource, or the URL-friendly key of the resource (i.e: the "slug").',
                            },
                            {
                                key: "role_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the role, or the URL-friendly key of the role (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/schema/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/resources/",
                            },
                            {
                                type: "pathParameter",
                                value: "resource_id",
                            },
                            {
                                type: "literal",
                                value: "/roles/",
                            },
                            {
                                type: "pathParameter",
                                value: "role_id",
                            },
                            {
                                type: "literal",
                                value: "",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: undefined,
                    response: undefined,
                    examples: [
                        {
                            path: "/v2/schema/string/string/resources/string/roles/string",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                                resource_id: "string",
                                role_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            responseStatusCode: 200,
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description:
                        "Deletes the role and all its related data.\nThis includes any permissions granted to said role.",
                    htmlDescription:
                        "<p>Deletes the role and all its related data.\nThis includes any permissions granted to said role.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "assign-permissions-to-role",
                    method: "POST",
                    id: "assign_permissions_to_resource_role",
                    name: "Assign Permissions to Role",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                            {
                                key: "resource_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the resource, or the URL-friendly key of the resource (i.e: the "slug").',
                            },
                            {
                                key: "role_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the role, or the URL-friendly key of the role (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/schema/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/resources/",
                            },
                            {
                                type: "pathParameter",
                                value: "resource_id",
                            },
                            {
                                type: "literal",
                                value: "/roles/",
                            },
                            {
                                type: "pathParameter",
                                value: "role_id",
                            },
                            {
                                type: "literal",
                                value: "/permissions",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:AddRolePermissions",
                            },
                        },
                    },
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:ResourceRoleRead",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/schema/string/string/resources/string/roles/string/permissions",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                                resource_id: "string",
                                role_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            requestBody: {
                                permissions: ["string"],
                            },
                            responseStatusCode: 200,
                            responseBody: {
                                name: "string",
                                description: "string",
                                permissions: ["string"],
                                attributes: {
                                    string: {},
                                },
                                extends: ["string"],
                                key: "string",
                                id: "string",
                                organization_id: "string",
                                project_id: "string",
                                environment_id: "string",
                                resource_id: "string",
                                created_at: "string",
                                updated_at: "string",
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description:
                        "Assign permissions to role.\n\nIf some of the permissions specified are already assigned, will skip them.",
                    htmlDescription:
                        "<p>Assign permissions to role.</p>\n<p>If some of the permissions specified are already assigned, will skip them.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "remove-permissions-from-role",
                    method: "DELETE",
                    id: "remove_permissions_from_resource_role",
                    name: "Remove Permissions from Role",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                            {
                                key: "resource_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the resource, or the URL-friendly key of the resource (i.e: the "slug").',
                            },
                            {
                                key: "role_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the role, or the URL-friendly key of the role (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/schema/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/resources/",
                            },
                            {
                                type: "pathParameter",
                                value: "resource_id",
                            },
                            {
                                type: "literal",
                                value: "/roles/",
                            },
                            {
                                type: "pathParameter",
                                value: "role_id",
                            },
                            {
                                type: "literal",
                                value: "/permissions",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:RemoveRolePermissions",
                            },
                        },
                    },
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:ResourceRoleRead",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/schema/string/string/resources/string/roles/string/permissions",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                                resource_id: "string",
                                role_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            requestBody: {
                                permissions: ["string"],
                            },
                            responseStatusCode: 200,
                            responseBody: {
                                name: "string",
                                description: "string",
                                permissions: ["string"],
                                attributes: {
                                    string: {},
                                },
                                extends: ["string"],
                                key: "string",
                                id: "string",
                                organization_id: "string",
                                project_id: "string",
                                environment_id: "string",
                                resource_id: "string",
                                created_at: "string",
                                updated_at: "string",
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description:
                        "Remove permissions from role.\n\nIf some of the permissions specified are already unassigned, will skip them.",
                    htmlDescription:
                        "<p>Remove permissions from role.</p>\n<p>If some of the permissions specified are already unassigned, will skip them.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "get-resource-role-ancestors",
                    method: "GET",
                    id: "get_resource_role_ancestors",
                    name: "Get Resource Role Ancestors",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                            {
                                key: "resource_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the resource, or the URL-friendly key of the resource (i.e: the "slug").',
                            },
                            {
                                key: "role_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the role, or the URL-friendly key of the role (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/schema/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/resources/",
                            },
                            {
                                type: "pathParameter",
                                value: "resource_id",
                            },
                            {
                                type: "literal",
                                value: "/roles/",
                            },
                            {
                                type: "pathParameter",
                                value: "role_id",
                            },
                            {
                                type: "literal",
                                value: "/ancestors",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: undefined,
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:ResourceRoleList",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/schema/string/string/resources/string/roles/string/ancestors",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                                resource_id: "string",
                                role_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            responseStatusCode: 200,
                            responseBody: {
                                roles: [
                                    {
                                        name: "string",
                                        description: "string",
                                        permissions: ["string"],
                                        attributes: {
                                            string: {},
                                        },
                                        extends: ["string"],
                                        key: "string",
                                        id: "string",
                                        organization_id: "string",
                                        project_id: "string",
                                        environment_id: "string",
                                        resource_id: "string",
                                        created_at: "string",
                                        updated_at: "string",
                                    },
                                ],
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description: undefined,
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "get-resource-role-descendants",
                    method: "GET",
                    id: "get_resource_role_descendants",
                    name: "Get Resource Role Descendants",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                            {
                                key: "resource_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the resource, or the URL-friendly key of the resource (i.e: the "slug").',
                            },
                            {
                                key: "role_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the role, or the URL-friendly key of the role (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/schema/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/resources/",
                            },
                            {
                                type: "pathParameter",
                                value: "resource_id",
                            },
                            {
                                type: "literal",
                                value: "/roles/",
                            },
                            {
                                type: "pathParameter",
                                value: "role_id",
                            },
                            {
                                type: "literal",
                                value: "/descendants",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: undefined,
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:ResourceRoleList",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/schema/string/string/resources/string/roles/string/descendants",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                                resource_id: "string",
                                role_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            responseStatusCode: 200,
                            responseBody: {
                                roles: [
                                    {
                                        name: "string",
                                        description: "string",
                                        permissions: ["string"],
                                        attributes: {
                                            string: {},
                                        },
                                        extends: ["string"],
                                        key: "string",
                                        id: "string",
                                        organization_id: "string",
                                        project_id: "string",
                                        environment_id: "string",
                                        resource_id: "string",
                                        created_at: "string",
                                        updated_at: "string",
                                    },
                                ],
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description: undefined,
                    authed: true,
                },
            ],
            types: [],
            subpackages: [],
            pointsTo: undefined,
            urlSlug: "resource-roles",
            description:
                "\nRoles allow you to associate permissions indirectly via a job function.\n\nResource roles allow you to grant roles that are scoped to a resource, thus\nexpressing ownership or arbitrary relationships between an actor (i.e: user) and\na specific object.\n\nThis API allows you to manipulate roles: assign or unassign permissions to a role,\ndefine hierarchy (inheritance) between two roles or define relationships between two roles.\n",
            htmlDescription:
                "<p>Roles allow you to associate permissions indirectly via a job function.</p>\n<p>Resource roles allow you to grant roles that are scoped to a resource, thus\nexpressing ownership or arbitrary relationships between an actor (i.e: user) and\na specific object.</p>\n<p>This API allows you to manipulate roles: assign or unassign permissions to a role,\ndefine hierarchy (inheritance) between two roles or define relationships between two roles.</p>\n",
        },
        subpackage_resourceAttributes: {
            subpackageId: "subpackage_resourceAttributes",
            name: "Resource Attributes",
            endpoints: [
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "list-resource-attributes",
                    method: "GET",
                    id: "list_resource_attributes",
                    name: "List Resource Attributes",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                            {
                                key: "resource_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the resource, or the URL-friendly key of the resource (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/schema/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/resources/",
                            },
                            {
                                type: "pathParameter",
                                value: "resource_id",
                            },
                            {
                                type: "literal",
                                value: "/attributes",
                            },
                        ],
                    },
                    queryParameters: [
                        {
                            key: "page",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "integer",
                                    },
                                },
                            },
                            description: "Page number of the results to fetch, starting at 1.",
                        },
                        {
                            key: "per_page",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "integer",
                                    },
                                },
                            },
                            description: "The number of results per page (max 100).",
                        },
                    ],
                    headers: [],
                    request: undefined,
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "list",
                                itemType: {
                                    type: "id",
                                    value: "type_:ResourceAttributeRead",
                                },
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/schema/string/string/resources/string/attributes",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                                resource_id: "string",
                            },
                            queryParameters: {
                                page: 0,
                                per_page: 0,
                            },
                            headers: {},
                            responseStatusCode: 200,
                            responseBody: [
                                {
                                    type: "bool",
                                    description: "string",
                                    key: "string",
                                    id: "string",
                                    resource_id: "string",
                                    resource_key: "string",
                                    organization_id: "string",
                                    project_id: "string",
                                    environment_id: "string",
                                    created_at: "string",
                                    updated_at: "string",
                                    built_in: true,
                                },
                            ],
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description: "Lists all the attributes defined on the resource.",
                    htmlDescription: "<p>Lists all the attributes defined on the resource.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "create-resource-attribute",
                    method: "POST",
                    id: "create_resource_attribute",
                    name: "Create Resource Attribute",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                            {
                                key: "resource_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the resource, or the URL-friendly key of the resource (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/schema/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/resources/",
                            },
                            {
                                type: "pathParameter",
                                value: "resource_id",
                            },
                            {
                                type: "literal",
                                value: "/attributes",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:ResourceAttributeCreate",
                            },
                        },
                    },
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:ResourceAttributeRead",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/schema/string/string/resources/string/attributes",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                                resource_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            requestBody: {
                                key: "string",
                                type: "bool",
                            },
                            responseStatusCode: 200,
                            responseBody: {
                                type: "bool",
                                description: "string",
                                key: "string",
                                id: "string",
                                resource_id: "string",
                                resource_key: "string",
                                organization_id: "string",
                                project_id: "string",
                                environment_id: "string",
                                created_at: "string",
                                updated_at: "string",
                                built_in: true,
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description: "Creates a new attribute as part of the resource definition.",
                    htmlDescription: "<p>Creates a new attribute as part of the resource definition.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "get-resource-attribute",
                    method: "GET",
                    id: "get_resource_attribute",
                    name: "Get Resource Attribute",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                            {
                                key: "resource_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the resource, or the URL-friendly key of the resource (i.e: the "slug").',
                            },
                            {
                                key: "attribute_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the attribute, or the URL-friendly key of the attribute (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/schema/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/resources/",
                            },
                            {
                                type: "pathParameter",
                                value: "resource_id",
                            },
                            {
                                type: "literal",
                                value: "/attributes/",
                            },
                            {
                                type: "pathParameter",
                                value: "attribute_id",
                            },
                            {
                                type: "literal",
                                value: "",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: undefined,
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:ResourceAttributeRead",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/schema/string/string/resources/string/attributes/string",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                                resource_id: "string",
                                attribute_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            responseStatusCode: 200,
                            responseBody: {
                                type: "bool",
                                description: "string",
                                key: "string",
                                id: "string",
                                resource_id: "string",
                                resource_key: "string",
                                organization_id: "string",
                                project_id: "string",
                                environment_id: "string",
                                created_at: "string",
                                updated_at: "string",
                                built_in: true,
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description: "Gets a single attribute defined on the resource, if such attribute exists.",
                    htmlDescription:
                        "<p>Gets a single attribute defined on the resource, if such attribute exists.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "update-resource-attribute",
                    method: "PATCH",
                    id: "update_resource_attribute",
                    name: "Update Resource Attribute",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                            {
                                key: "resource_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the resource, or the URL-friendly key of the resource (i.e: the "slug").',
                            },
                            {
                                key: "attribute_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the attribute, or the URL-friendly key of the attribute (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/schema/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/resources/",
                            },
                            {
                                type: "pathParameter",
                                value: "resource_id",
                            },
                            {
                                type: "literal",
                                value: "/attributes/",
                            },
                            {
                                type: "pathParameter",
                                value: "attribute_id",
                            },
                            {
                                type: "literal",
                                value: "",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:ResourceAttributeUpdate",
                            },
                        },
                    },
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:ResourceAttributeRead",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/schema/string/string/resources/string/attributes/string",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                                resource_id: "string",
                                attribute_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            requestBody: {},
                            responseStatusCode: 200,
                            responseBody: {
                                type: "bool",
                                description: "string",
                                key: "string",
                                id: "string",
                                resource_id: "string",
                                resource_key: "string",
                                organization_id: "string",
                                project_id: "string",
                                environment_id: "string",
                                created_at: "string",
                                updated_at: "string",
                                built_in: true,
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description:
                        "Partially updates the attribute defined on a resource.\nFields that will be provided will be completely overwritten.",
                    htmlDescription:
                        "<p>Partially updates the attribute defined on a resource.\nFields that will be provided will be completely overwritten.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "delete-resource-attribute",
                    method: "DELETE",
                    id: "delete_resource_attribute",
                    name: "Delete Resource Attribute",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                            {
                                key: "resource_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the resource, or the URL-friendly key of the resource (i.e: the "slug").',
                            },
                            {
                                key: "attribute_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the attribute, or the URL-friendly key of the attribute (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/schema/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/resources/",
                            },
                            {
                                type: "pathParameter",
                                value: "resource_id",
                            },
                            {
                                type: "literal",
                                value: "/attributes/",
                            },
                            {
                                type: "pathParameter",
                                value: "attribute_id",
                            },
                            {
                                type: "literal",
                                value: "",
                            },
                        ],
                    },
                    queryParameters: [
                        {
                            key: "page",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "integer",
                                    },
                                },
                            },
                            description: "Page number of the results to fetch, starting at 1.",
                        },
                        {
                            key: "per_page",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "integer",
                                    },
                                },
                            },
                            description: "The number of results per page (max 100).",
                        },
                    ],
                    headers: [],
                    request: undefined,
                    response: undefined,
                    examples: [
                        {
                            path: "/v2/schema/string/string/resources/string/attributes/string",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                                resource_id: "string",
                                attribute_id: "string",
                            },
                            queryParameters: {
                                page: 0,
                                per_page: 0,
                            },
                            headers: {},
                            responseStatusCode: 200,
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description:
                        "Deletes the attribute and all its related data.\n\nNote: If the attribute is used by policies, removing it will cause the\nattribute to evaluate as `undefined`.",
                    htmlDescription:
                        "<p>Deletes the attribute and all its related data.</p>\n<p>Note: If the attribute is used by policies, removing it will cause the\nattribute to evaluate as <code>undefined</code>.</p>\n",
                    authed: true,
                },
            ],
            types: [],
            subpackages: [],
            pointsTo: undefined,
            urlSlug: "resource-attributes",
            description:
                "\nResource attributes allow you to specify an arbitrary schema attributes that are part\nof the definition of resource and must be included in any of its instances.\n\nAttributes are used to enforce attribute-based access control policies.\n\nFor example, if we are building the github's permissions system, we might want to know\non the `Repository` resource whether the repo is private or now. In such case we will\ndefine a boolean `private` attributes that we can now use in our policies.\n",
            htmlDescription:
                "<p>Resource attributes allow you to specify an arbitrary schema attributes that are part\nof the definition of resource and must be included in any of its instances.</p>\n<p>Attributes are used to enforce attribute-based access control policies.</p>\n<p>For example, if we are building the github&#39;s permissions system, we might want to know\non the <code>Repository</code> resource whether the repo is private or now. In such case we will\ndefine a boolean <code>private</code> attributes that we can now use in our policies.</p>\n",
        },
        subpackage_userAttributes: {
            subpackageId: "subpackage_userAttributes",
            name: "User Attributes",
            endpoints: [
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "list-user-attributes",
                    method: "GET",
                    id: "list_user_attributes",
                    name: "List User Attributes",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/schema/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/users/attributes",
                            },
                        ],
                    },
                    queryParameters: [
                        {
                            key: "resource_id",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                            },
                            description: undefined,
                        },
                        {
                            key: "page",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "integer",
                                    },
                                },
                            },
                            description: "Page number of the results to fetch, starting at 1.",
                        },
                        {
                            key: "per_page",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "integer",
                                    },
                                },
                            },
                            description: "The number of results per page (max 100).",
                        },
                    ],
                    headers: [],
                    request: undefined,
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "list",
                                itemType: {
                                    type: "id",
                                    value: "type_:ResourceAttributeRead",
                                },
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/schema/string/string/users/attributes",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                            },
                            queryParameters: {
                                resource_id: "string",
                                page: 0,
                            },
                            headers: {},
                            responseStatusCode: 200,
                            responseBody: [
                                {
                                    type: "bool",
                                    description: "string",
                                    key: "string",
                                    id: "string",
                                    resource_id: "string",
                                    resource_key: "string",
                                    organization_id: "string",
                                    project_id: "string",
                                    environment_id: "string",
                                    created_at: "string",
                                    updated_at: "string",
                                    built_in: true,
                                },
                            ],
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description: "Lists all the attributes defined on the User resource.",
                    htmlDescription: "<p>Lists all the attributes defined on the User resource.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "create-user-attribute",
                    method: "POST",
                    id: "create_user_attribute",
                    name: "Create User Attribute",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/schema/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/users/attributes",
                            },
                        ],
                    },
                    queryParameters: [
                        {
                            key: "resource_id",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                            },
                            description: undefined,
                        },
                    ],
                    headers: [],
                    request: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:ResourceAttributeCreate",
                            },
                        },
                    },
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:ResourceAttributeRead",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/schema/string/string/users/attributes",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                            },
                            queryParameters: {
                                resource_id: "string",
                            },
                            headers: {},
                            requestBody: {
                                key: "string",
                                type: "bool",
                            },
                            responseStatusCode: 200,
                            responseBody: {
                                type: "bool",
                                description: "string",
                                key: "string",
                                id: "string",
                                resource_id: "string",
                                resource_key: "string",
                                organization_id: "string",
                                project_id: "string",
                                environment_id: "string",
                                created_at: "string",
                                updated_at: "string",
                                built_in: true,
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description: "Creates a new attribute for the User resource.",
                    htmlDescription: "<p>Creates a new attribute for the User resource.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "get-user-attribute",
                    method: "GET",
                    id: "get_user_attribute",
                    name: "Get User Attribute",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                            {
                                key: "attribute_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the attribute, or the URL-friendly key of the attribute (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/schema/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/users/attributes/",
                            },
                            {
                                type: "pathParameter",
                                value: "attribute_id",
                            },
                            {
                                type: "literal",
                                value: "",
                            },
                        ],
                    },
                    queryParameters: [
                        {
                            key: "resource_id",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                            },
                            description: undefined,
                        },
                    ],
                    headers: [],
                    request: undefined,
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:ResourceAttributeRead",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/schema/string/string/users/attributes/string",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                                attribute_id: "string",
                            },
                            queryParameters: {
                                resource_id: "string",
                            },
                            headers: {},
                            responseStatusCode: 200,
                            responseBody: {
                                type: "bool",
                                description: "string",
                                key: "string",
                                id: "string",
                                resource_id: "string",
                                resource_key: "string",
                                organization_id: "string",
                                project_id: "string",
                                environment_id: "string",
                                created_at: "string",
                                updated_at: "string",
                                built_in: true,
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description: "Gets a single attribute defined on the User resource, if such attribute exists.",
                    htmlDescription:
                        "<p>Gets a single attribute defined on the User resource, if such attribute exists.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "update-user-attribute",
                    method: "PATCH",
                    id: "update_user_attribute",
                    name: "Update User Attribute",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                            {
                                key: "attribute_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the attribute, or the URL-friendly key of the attribute (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/schema/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/users/attributes/",
                            },
                            {
                                type: "pathParameter",
                                value: "attribute_id",
                            },
                            {
                                type: "literal",
                                value: "",
                            },
                        ],
                    },
                    queryParameters: [
                        {
                            key: "resource_id",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                            },
                            description: undefined,
                        },
                    ],
                    headers: [],
                    request: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:ResourceAttributeUpdate",
                            },
                        },
                    },
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:ResourceAttributeRead",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/schema/string/string/users/attributes/string",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                                attribute_id: "string",
                            },
                            queryParameters: {
                                resource_id: "string",
                            },
                            headers: {},
                            requestBody: {},
                            responseStatusCode: 200,
                            responseBody: {
                                type: "bool",
                                description: "string",
                                key: "string",
                                id: "string",
                                resource_id: "string",
                                resource_key: "string",
                                organization_id: "string",
                                project_id: "string",
                                environment_id: "string",
                                created_at: "string",
                                updated_at: "string",
                                built_in: true,
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description:
                        "Partially updates the attribute defined on the User resource.\nFields that will be provided will be completely overwritten.",
                    htmlDescription:
                        "<p>Partially updates the attribute defined on the User resource.\nFields that will be provided will be completely overwritten.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "delete-user-attribute",
                    method: "DELETE",
                    id: "delete_user_attribute",
                    name: "Delete User Attribute",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                            {
                                key: "attribute_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the attribute, or the URL-friendly key of the attribute (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/schema/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/users/attributes/",
                            },
                            {
                                type: "pathParameter",
                                value: "attribute_id",
                            },
                            {
                                type: "literal",
                                value: "",
                            },
                        ],
                    },
                    queryParameters: [
                        {
                            key: "resource_id",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                            },
                            description: undefined,
                        },
                        {
                            key: "page",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "integer",
                                    },
                                },
                            },
                            description: "Page number of the results to fetch, starting at 1.",
                        },
                        {
                            key: "per_page",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "integer",
                                    },
                                },
                            },
                            description: "The number of results per page (max 100).",
                        },
                    ],
                    headers: [],
                    request: undefined,
                    response: undefined,
                    examples: [
                        {
                            path: "/v2/schema/string/string/users/attributes/string",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                                attribute_id: "string",
                            },
                            queryParameters: {
                                resource_id: "string",
                                page: 0,
                            },
                            headers: {},
                            responseStatusCode: 200,
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description:
                        "Deletes the attribute and all its related data.\n\nNote: If the attribute is used by policies, removing it will cause the\nattribute to evaluate as `undefined`.",
                    htmlDescription:
                        "<p>Deletes the attribute and all its related data.</p>\n<p>Note: If the attribute is used by policies, removing it will cause the\nattribute to evaluate as <code>undefined</code>.</p>\n",
                    authed: true,
                },
            ],
            types: [],
            subpackages: [],
            pointsTo: undefined,
            urlSlug: "user-attributes",
            description:
                "\nUser attributes allow you to specify an arbitrary schema attributes that are part\nof the definition of the User resource.\n\nAttributes are used to enforce attribute-based access control policies.\n\n*NOTE: A User is a Resource by itself, so basically a user's attribute is an attribute that assigned to the resource called \"user\".*\n\nFor example, if we are building the github's permissions system, we might want to know\nwhether the user is an owner of the organization or not. In such case we will\ndefine a string `owner` attribute that we can now use in our policies.\n",
            htmlDescription:
                "<p>User attributes allow you to specify an arbitrary schema attributes that are part\nof the definition of the User resource.</p>\n<p>Attributes are used to enforce attribute-based access control policies.</p>\n<p><em>NOTE: A User is a Resource by itself, so basically a user&#39;s attribute is an attribute that assigned to the resource called &quot;user&quot;.</em></p>\n<p>For example, if we are building the github&#39;s permissions system, we might want to know\nwhether the user is an owner of the organization or not. In such case we will\ndefine a string <code>owner</code> attribute that we can now use in our policies.</p>\n",
        },
        subpackage_roles: {
            subpackageId: "subpackage_roles",
            name: "Roles",
            endpoints: [
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "list-roles",
                    method: "GET",
                    id: "list_roles",
                    name: "List Roles",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/schema/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/roles",
                            },
                        ],
                    },
                    queryParameters: [
                        {
                            key: "search",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                            },
                            description: "Text search for the roles name or key",
                        },
                        {
                            key: "include_total_count",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "boolean",
                                    },
                                },
                            },
                            description: "Include total count in response",
                        },
                        {
                            key: "page",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "integer",
                                    },
                                },
                            },
                            description: "Page number of the results to fetch, starting at 1.",
                        },
                        {
                            key: "per_page",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "integer",
                                    },
                                },
                            },
                            description: "The number of results per page (max 100).",
                        },
                    ],
                    headers: [],
                    request: undefined,
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:ListRolesResponse",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/schema/string/string/roles",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                            },
                            queryParameters: {
                                search: "string",
                                include_total_count: true,
                            },
                            headers: {},
                            responseStatusCode: 200,
                            responseBody: {
                                data: [
                                    {
                                        name: "string",
                                        description: "string",
                                        permissions: ["string"],
                                        attributes: {
                                            string: {},
                                        },
                                        extends: ["string"],
                                        key: "string",
                                        id: "string",
                                        organization_id: "string",
                                        project_id: "string",
                                        environment_id: "string",
                                        created_at: "string",
                                        updated_at: "string",
                                    },
                                ],
                                total_count: 0,
                                page_count: 0,
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description: "Lists all tenant roles.",
                    htmlDescription: "<p>Lists all tenant roles.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "create-role",
                    method: "POST",
                    id: "create_role",
                    name: "Create Role",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/schema/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/roles",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: {
                        type: {
                            type: "object",
                            extends: [],
                            properties: [
                                {
                                    key: "key",
                                    valueType: {
                                        type: "primitive",
                                        value: {
                                            type: "string",
                                        },
                                    },
                                    description:
                                        "A URL-friendly name of the role (i.e: slug). You will be able to query later using this key instead of the id (UUID) of the role.",
                                },
                                {
                                    key: "name",
                                    valueType: {
                                        type: "primitive",
                                        value: {
                                            type: "string",
                                        },
                                    },
                                    description: "The name of the role",
                                },
                                {
                                    key: "description",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "primitive",
                                            value: {
                                                type: "string",
                                            },
                                        },
                                    },
                                    description:
                                        "optional description string explaining what this role represents, or what permissions are granted to it.",
                                },
                                {
                                    key: "permissions",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "list",
                                            itemType: {
                                                type: "primitive",
                                                value: {
                                                    type: "string",
                                                },
                                            },
                                        },
                                    },
                                    description:
                                        "list of action keys that define what actions this resource role is permitted to do",
                                },
                                {
                                    key: "attributes",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "map",
                                            keyType: {
                                                type: "primitive",
                                                value: {
                                                    type: "string",
                                                },
                                            },
                                            valueType: {
                                                type: "unknown",
                                            },
                                        },
                                    },
                                    description:
                                        "optional dictionary of key-value pairs that can be used to store arbitrary metadata about this role. This metadata can be used to filter role using query parameters with attr_ prefix, currently supports only 'equals' operator",
                                },
                                {
                                    key: "extends",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "list",
                                            itemType: {
                                                type: "primitive",
                                                value: {
                                                    type: "string",
                                                },
                                            },
                                        },
                                    },
                                    description:
                                        "list of role keys that define what roles this role extends. In other words: this role will automatically inherit all the permissions of the given roles in this list.",
                                },
                            ],
                        },
                    },
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:RoleRead",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/schema/string/string/roles",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            requestBody: {
                                key: "string",
                                name: "string",
                            },
                            responseStatusCode: 200,
                            responseBody: {
                                name: "string",
                                description: "string",
                                permissions: ["string"],
                                attributes: {
                                    string: {},
                                },
                                extends: ["string"],
                                key: "string",
                                id: "string",
                                organization_id: "string",
                                project_id: "string",
                                environment_id: "string",
                                created_at: "string",
                                updated_at: "string",
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description: "Creates a new tenant role.",
                    htmlDescription: "<p>Creates a new tenant role.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "get-role",
                    method: "GET",
                    id: "get_role",
                    name: "Get Role",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                            {
                                key: "role_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the role, or the URL-friendly key of the role (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/schema/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/roles/",
                            },
                            {
                                type: "pathParameter",
                                value: "role_id",
                            },
                            {
                                type: "literal",
                                value: "",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: undefined,
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:RoleRead",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/schema/string/string/roles/string",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                                role_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            responseStatusCode: 200,
                            responseBody: {
                                name: "string",
                                description: "string",
                                permissions: ["string"],
                                attributes: {
                                    string: {},
                                },
                                extends: ["string"],
                                key: "string",
                                id: "string",
                                organization_id: "string",
                                project_id: "string",
                                environment_id: "string",
                                created_at: "string",
                                updated_at: "string",
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description: "Gets a single tenant role, if such role exists.",
                    htmlDescription: "<p>Gets a single tenant role, if such role exists.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "update-role",
                    method: "PATCH",
                    id: "update_role",
                    name: "Update Role",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                            {
                                key: "role_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the role, or the URL-friendly key of the role (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/schema/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/roles/",
                            },
                            {
                                type: "pathParameter",
                                value: "role_id",
                            },
                            {
                                type: "literal",
                                value: "",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: {
                        type: {
                            type: "object",
                            extends: [],
                            properties: [
                                {
                                    key: "name",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "primitive",
                                            value: {
                                                type: "string",
                                            },
                                        },
                                    },
                                    description: "The name of the role",
                                },
                                {
                                    key: "description",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "primitive",
                                            value: {
                                                type: "string",
                                            },
                                        },
                                    },
                                    description:
                                        "optional description string explaining what this role represents, or what permissions are granted to it.",
                                },
                                {
                                    key: "permissions",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "list",
                                            itemType: {
                                                type: "primitive",
                                                value: {
                                                    type: "string",
                                                },
                                            },
                                        },
                                    },
                                    description:
                                        "list of action keys that define what actions this resource role is permitted to do",
                                },
                                {
                                    key: "attributes",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "map",
                                            keyType: {
                                                type: "primitive",
                                                value: {
                                                    type: "string",
                                                },
                                            },
                                            valueType: {
                                                type: "unknown",
                                            },
                                        },
                                    },
                                    description:
                                        "optional dictionary of key-value pairs that can be used to store arbitrary metadata about this role. This metadata can be used to filter role using query parameters with attr_ prefix, currently supports only 'equals' operator",
                                },
                                {
                                    key: "extends",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "list",
                                            itemType: {
                                                type: "primitive",
                                                value: {
                                                    type: "string",
                                                },
                                            },
                                        },
                                    },
                                    description:
                                        "list of role keys that define what roles this role extends. In other words: this role will automatically inherit all the permissions of the given roles in this list.",
                                },
                            ],
                        },
                    },
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:RoleRead",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/schema/string/string/roles/string",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                                role_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            requestBody: {},
                            responseStatusCode: 200,
                            responseBody: {
                                name: "string",
                                description: "string",
                                permissions: ["string"],
                                attributes: {
                                    string: {},
                                },
                                extends: ["string"],
                                key: "string",
                                id: "string",
                                organization_id: "string",
                                project_id: "string",
                                environment_id: "string",
                                created_at: "string",
                                updated_at: "string",
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description:
                        "Partially updates a tenant role.\nFields that will be provided will be completely overwritten.",
                    htmlDescription:
                        "<p>Partially updates a tenant role.\nFields that will be provided will be completely overwritten.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "delete-role",
                    method: "DELETE",
                    id: "delete_role",
                    name: "Delete Role",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                            {
                                key: "role_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the role, or the URL-friendly key of the role (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/schema/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/roles/",
                            },
                            {
                                type: "pathParameter",
                                value: "role_id",
                            },
                            {
                                type: "literal",
                                value: "",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: undefined,
                    response: undefined,
                    examples: [
                        {
                            path: "/v2/schema/string/string/roles/string",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                                role_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            responseStatusCode: 200,
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description:
                        "Deletes a tenant role and all its related data.\nThis includes any permissions granted to said role.",
                    htmlDescription:
                        "<p>Deletes a tenant role and all its related data.\nThis includes any permissions granted to said role.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "assign-permissions-to-role",
                    method: "POST",
                    id: "assign_permissions_to_role",
                    name: "Assign Permissions To Role",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                            {
                                key: "role_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the role, or the URL-friendly key of the role (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/schema/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/roles/",
                            },
                            {
                                type: "pathParameter",
                                value: "role_id",
                            },
                            {
                                type: "literal",
                                value: "/permissions",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:AddRolePermissions",
                            },
                        },
                    },
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:RoleRead",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/schema/string/string/roles/string/permissions",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                                role_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            requestBody: {
                                permissions: ["string"],
                            },
                            responseStatusCode: 200,
                            responseBody: {
                                name: "string",
                                description: "string",
                                permissions: ["string"],
                                attributes: {
                                    string: {},
                                },
                                extends: ["string"],
                                key: "string",
                                id: "string",
                                organization_id: "string",
                                project_id: "string",
                                environment_id: "string",
                                created_at: "string",
                                updated_at: "string",
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description:
                        "Assign permissions to role.\n\nIf some of the permissions specified are already assigned, will skip them.",
                    htmlDescription:
                        "<p>Assign permissions to role.</p>\n<p>If some of the permissions specified are already assigned, will skip them.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "remove-permissions-from-role",
                    method: "DELETE",
                    id: "remove_permissions_from_role",
                    name: "Remove Permissions From Role",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                            {
                                key: "role_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the role, or the URL-friendly key of the role (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/schema/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/roles/",
                            },
                            {
                                type: "pathParameter",
                                value: "role_id",
                            },
                            {
                                type: "literal",
                                value: "/permissions",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:RemoveRolePermissions",
                            },
                        },
                    },
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:RoleRead",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/schema/string/string/roles/string/permissions",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                                role_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            requestBody: {
                                permissions: ["string"],
                            },
                            responseStatusCode: 200,
                            responseBody: {
                                name: "string",
                                description: "string",
                                permissions: ["string"],
                                attributes: {
                                    string: {},
                                },
                                extends: ["string"],
                                key: "string",
                                id: "string",
                                organization_id: "string",
                                project_id: "string",
                                environment_id: "string",
                                created_at: "string",
                                updated_at: "string",
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description:
                        "Remove permissions from role.\n\nIf some of the permissions specified are already unassigned, will skip them.",
                    htmlDescription:
                        "<p>Remove permissions from role.</p>\n<p>If some of the permissions specified are already unassigned, will skip them.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "get-role-ancestors",
                    method: "GET",
                    id: "get_role_ancestors",
                    name: "Get Role Ancestors",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                            {
                                key: "role_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the role, or the URL-friendly key of the role (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/schema/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/roles/",
                            },
                            {
                                type: "pathParameter",
                                value: "role_id",
                            },
                            {
                                type: "literal",
                                value: "/ancestors",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: undefined,
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:RoleList",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/schema/string/string/roles/string/ancestors",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                                role_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            responseStatusCode: 200,
                            responseBody: {
                                roles: [
                                    {
                                        name: "string",
                                        description: "string",
                                        permissions: ["string"],
                                        attributes: {
                                            string: {},
                                        },
                                        extends: ["string"],
                                        key: "string",
                                        id: "string",
                                        organization_id: "string",
                                        project_id: "string",
                                        environment_id: "string",
                                        created_at: "string",
                                        updated_at: "string",
                                    },
                                ],
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description: undefined,
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "get-role-descendants",
                    method: "GET",
                    id: "get_role_descendants",
                    name: "Get Role Descendants",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                            {
                                key: "role_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the role, or the URL-friendly key of the role (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/schema/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/roles/",
                            },
                            {
                                type: "pathParameter",
                                value: "role_id",
                            },
                            {
                                type: "literal",
                                value: "/descendants",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: undefined,
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:RoleList",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/schema/string/string/roles/string/descendants",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                                role_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            responseStatusCode: 200,
                            responseBody: {
                                roles: [
                                    {
                                        name: "string",
                                        description: "string",
                                        permissions: ["string"],
                                        attributes: {
                                            string: {},
                                        },
                                        extends: ["string"],
                                        key: "string",
                                        id: "string",
                                        organization_id: "string",
                                        project_id: "string",
                                        environment_id: "string",
                                        created_at: "string",
                                        updated_at: "string",
                                    },
                                ],
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description: undefined,
                    authed: true,
                },
            ],
            types: [],
            subpackages: [],
            pointsTo: undefined,
            urlSlug: "roles",
            description:
                "\nRoles allow you to associate permissions indirectly via a job function.\n\nThe Roles API allows you to manipulate roles: assign or unassign permissions to a role,\ndefine hierarchy between roles or define relationships between resource roles.\n\nRoles manipulated by this API are **tenant roles**, meaning when they are assigned, they are\nassigned on a tenant.\n",
            htmlDescription:
                "<p>Roles allow you to associate permissions indirectly via a job function.</p>\n<p>The Roles API allows you to manipulate roles: assign or unassign permissions to a role,\ndefine hierarchy between roles or define relationships between resource roles.</p>\n<p>Roles manipulated by this API are <strong>tenant roles</strong>, meaning when they are assigned, they are\nassigned on a tenant.</p>\n",
        },
        subpackage_conditionSets: {
            subpackageId: "subpackage_conditionSets",
            name: "Condition Sets",
            endpoints: [
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "list-condition-sets",
                    method: "GET",
                    id: "list_condition_sets",
                    name: "List Condition Sets",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/schema/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/condition_sets",
                            },
                        ],
                    },
                    queryParameters: [
                        {
                            key: "search",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                            },
                            description: "Text search for the condition sets name or key",
                        },
                        {
                            key: "type",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "id",
                                    value: "type_:ConditionSetType",
                                },
                            },
                            description:
                                "if provided, will return only the condition sets of the specified type. e.g: only user sets.",
                        },
                        {
                            key: "include_total_count",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "boolean",
                                    },
                                },
                            },
                            description: "Include total count in response",
                        },
                        {
                            key: "page",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "integer",
                                    },
                                },
                            },
                            description: "Page number of the results to fetch, starting at 1.",
                        },
                        {
                            key: "per_page",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "integer",
                                    },
                                },
                            },
                            description: "The number of results per page (max 100).",
                        },
                    ],
                    headers: [],
                    request: undefined,
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:ListConditionSetsResponse",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/schema/string/string/condition_sets",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                            },
                            queryParameters: {
                                search: "string",
                                type: "userset",
                            },
                            headers: {},
                            responseStatusCode: 200,
                            responseBody: {
                                data: [
                                    {
                                        key: "string",
                                        type: "userset",
                                        autogenerated: true,
                                        resource_id: "string",
                                        id: "string",
                                        organization_id: "string",
                                        project_id: "string",
                                        environment_id: "string",
                                        created_at: "string",
                                        updated_at: "string",
                                        resource: {
                                            key: "string",
                                            id: "string",
                                            organization_id: "string",
                                            project_id: "string",
                                            environment_id: "string",
                                            created_at: "string",
                                            updated_at: "string",
                                            name: "string",
                                            urn: "string",
                                            description: "string",
                                            actions: {
                                                string: {
                                                    name: "string",
                                                    description: "string",
                                                    attributes: {
                                                        string: {},
                                                    },
                                                    id: "string",
                                                    key: "string",
                                                },
                                            },
                                            attributes: {
                                                string: {
                                                    type: "bool",
                                                    description: "string",
                                                    id: "string",
                                                    key: "string",
                                                },
                                            },
                                            action_groups: {
                                                string: ["string"],
                                            },
                                        },
                                        name: "string",
                                        description: "string",
                                        conditions: {
                                            string: {},
                                        },
                                        parent_id: "string",
                                    },
                                ],
                                total_count: 0,
                                page_count: 0,
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description: "Lists all condition sets matching a filter.",
                    htmlDescription: "<p>Lists all condition sets matching a filter.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "create-condition-set",
                    method: "POST",
                    id: "create_condition_set",
                    name: "Create Condition Set",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/schema/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/condition_sets",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: {
                        type: {
                            type: "object",
                            extends: [],
                            properties: [
                                {
                                    key: "key",
                                    valueType: {
                                        type: "primitive",
                                        value: {
                                            type: "string",
                                        },
                                    },
                                    description:
                                        'A unique id by which Permit will identify the condition set. The key will be used as the generated rego rule name. <span style="white-space: nowrap">`non-empty`</span> ',
                                },
                                {
                                    key: "type",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "id",
                                            value: "type_:ConditionSetType",
                                        },
                                    },
                                    description: "the type of the set: UserSet or ResourceSet",
                                },
                                {
                                    key: "autogenerated",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "primitive",
                                            value: {
                                                type: "boolean",
                                            },
                                        },
                                    },
                                    description: "whether the set was autogenerated by the system.",
                                },
                                {
                                    key: "resource_id",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "id",
                                            value: "type_:ConditionSetCreateResourceId",
                                        },
                                    },
                                    description: "For ResourceSets, the id of the base resource.",
                                },
                                {
                                    key: "name",
                                    valueType: {
                                        type: "primitive",
                                        value: {
                                            type: "string",
                                        },
                                    },
                                    description:
                                        "A descriptive name for the set, i.e: 'US based employees' or 'Users behind VPN'",
                                },
                                {
                                    key: "description",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "primitive",
                                            value: {
                                                type: "string",
                                            },
                                        },
                                    },
                                    description: "an optional longer description of the set",
                                },
                                {
                                    key: "conditions",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "map",
                                            keyType: {
                                                type: "primitive",
                                                value: {
                                                    type: "string",
                                                },
                                            },
                                            valueType: {
                                                type: "unknown",
                                            },
                                        },
                                    },
                                    description:
                                        "a boolean expression that consists of multiple conditions, with and/or logic.",
                                },
                                {
                                    key: "parent_id",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "id",
                                            value: "type_:ConditionSetCreateParentId",
                                        },
                                    },
                                    description: "Parent Condition Set",
                                },
                            ],
                        },
                    },
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:ConditionSetRead",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/schema/string/string/condition_sets",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            requestBody: {
                                key: "string",
                                name: "string",
                            },
                            responseStatusCode: 200,
                            responseBody: {
                                key: "string",
                                type: "userset",
                                autogenerated: true,
                                resource_id: "string",
                                id: "string",
                                organization_id: "string",
                                project_id: "string",
                                environment_id: "string",
                                created_at: "string",
                                updated_at: "string",
                                resource: {
                                    key: "string",
                                    id: "string",
                                    organization_id: "string",
                                    project_id: "string",
                                    environment_id: "string",
                                    created_at: "string",
                                    updated_at: "string",
                                    name: "string",
                                    urn: "string",
                                    description: "string",
                                    actions: {
                                        string: {
                                            name: "string",
                                            description: "string",
                                            attributes: {
                                                string: {},
                                            },
                                            id: "string",
                                            key: "string",
                                        },
                                    },
                                    attributes: {
                                        string: {
                                            type: "bool",
                                            description: "string",
                                            id: "string",
                                            key: "string",
                                        },
                                    },
                                    action_groups: {
                                        string: ["string"],
                                    },
                                },
                                name: "string",
                                description: "string",
                                conditions: {
                                    string: {},
                                },
                                parent_id: "string",
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description: "Creates a new condition set (can be either a user set or a resource set).",
                    htmlDescription:
                        "<p>Creates a new condition set (can be either a user set or a resource set).</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "get-condition-set",
                    method: "GET",
                    id: "get_condition_set",
                    name: "Get Condition Set",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                            {
                                key: "condition_set_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the condition set, or the URL-friendly key of the condition set (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/schema/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/condition_sets/",
                            },
                            {
                                type: "pathParameter",
                                value: "condition_set_id",
                            },
                            {
                                type: "literal",
                                value: "",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: undefined,
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:ConditionSetRead",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/schema/string/string/condition_sets/string",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                                condition_set_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            responseStatusCode: 200,
                            responseBody: {
                                key: "string",
                                type: "userset",
                                autogenerated: true,
                                resource_id: "string",
                                id: "string",
                                organization_id: "string",
                                project_id: "string",
                                environment_id: "string",
                                created_at: "string",
                                updated_at: "string",
                                resource: {
                                    key: "string",
                                    id: "string",
                                    organization_id: "string",
                                    project_id: "string",
                                    environment_id: "string",
                                    created_at: "string",
                                    updated_at: "string",
                                    name: "string",
                                    urn: "string",
                                    description: "string",
                                    actions: {
                                        string: {
                                            name: "string",
                                            description: "string",
                                            attributes: {
                                                string: {},
                                            },
                                            id: "string",
                                            key: "string",
                                        },
                                    },
                                    attributes: {
                                        string: {
                                            type: "bool",
                                            description: "string",
                                            id: "string",
                                            key: "string",
                                        },
                                    },
                                    action_groups: {
                                        string: ["string"],
                                    },
                                },
                                name: "string",
                                description: "string",
                                conditions: {
                                    string: {},
                                },
                                parent_id: "string",
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description: "Gets a single condition set, if such condition set exists.",
                    htmlDescription: "<p>Gets a single condition set, if such condition set exists.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "update-condition-set",
                    method: "PATCH",
                    id: "update_condition_set",
                    name: "Update Condition Set",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                            {
                                key: "condition_set_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the condition set, or the URL-friendly key of the condition set (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/schema/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/condition_sets/",
                            },
                            {
                                type: "pathParameter",
                                value: "condition_set_id",
                            },
                            {
                                type: "literal",
                                value: "",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: {
                        type: {
                            type: "object",
                            extends: [],
                            properties: [
                                {
                                    key: "name",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "primitive",
                                            value: {
                                                type: "string",
                                            },
                                        },
                                    },
                                    description:
                                        "A descriptive name for the set, i.e: 'US based employees' or 'Users behind VPN'",
                                },
                                {
                                    key: "description",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "primitive",
                                            value: {
                                                type: "string",
                                            },
                                        },
                                    },
                                    description: "an optional longer description of the set",
                                },
                                {
                                    key: "conditions",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "map",
                                            keyType: {
                                                type: "primitive",
                                                value: {
                                                    type: "string",
                                                },
                                            },
                                            valueType: {
                                                type: "unknown",
                                            },
                                        },
                                    },
                                    description:
                                        "a boolean expression that consists of multiple conditions, with and/or logic.",
                                },
                                {
                                    key: "parent_id",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "id",
                                            value: "type_:ConditionSetUpdateParentId",
                                        },
                                    },
                                    description: "Parent Condition Set",
                                },
                            ],
                        },
                    },
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:ConditionSetRead",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/schema/string/string/condition_sets/string",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                                condition_set_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            requestBody: {},
                            responseStatusCode: 200,
                            responseBody: {
                                key: "string",
                                type: "userset",
                                autogenerated: true,
                                resource_id: "string",
                                id: "string",
                                organization_id: "string",
                                project_id: "string",
                                environment_id: "string",
                                created_at: "string",
                                updated_at: "string",
                                resource: {
                                    key: "string",
                                    id: "string",
                                    organization_id: "string",
                                    project_id: "string",
                                    environment_id: "string",
                                    created_at: "string",
                                    updated_at: "string",
                                    name: "string",
                                    urn: "string",
                                    description: "string",
                                    actions: {
                                        string: {
                                            name: "string",
                                            description: "string",
                                            attributes: {
                                                string: {},
                                            },
                                            id: "string",
                                            key: "string",
                                        },
                                    },
                                    attributes: {
                                        string: {
                                            type: "bool",
                                            description: "string",
                                            id: "string",
                                            key: "string",
                                        },
                                    },
                                    action_groups: {
                                        string: ["string"],
                                    },
                                },
                                name: "string",
                                description: "string",
                                conditions: {
                                    string: {},
                                },
                                parent_id: "string",
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description:
                        "Partially updates a condition set.\nFields that will be provided will be completely overwritten.",
                    htmlDescription:
                        "<p>Partially updates a condition set.\nFields that will be provided will be completely overwritten.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "delete-condition-set",
                    method: "DELETE",
                    id: "delete_condition_set",
                    name: "Delete Condition Set",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                            {
                                key: "condition_set_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the condition set, or the URL-friendly key of the condition set (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/schema/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/condition_sets/",
                            },
                            {
                                type: "pathParameter",
                                value: "condition_set_id",
                            },
                            {
                                type: "literal",
                                value: "",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: undefined,
                    response: undefined,
                    examples: [
                        {
                            path: "/v2/schema/string/string/condition_sets/string",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                                condition_set_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            responseStatusCode: 200,
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description:
                        "Deletes a condition set and all its related data.\nThis includes any permissions granted to said condition set (i.e: any matching condition set rules).",
                    htmlDescription:
                        "<p>Deletes a condition set and all its related data.\nThis includes any permissions granted to said condition set (i.e: any matching condition set rules).</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "get-condition-set-ancestors",
                    method: "GET",
                    id: "get_condition_set_ancestors",
                    name: "Get Condition Set Ancestors",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                            {
                                key: "condition_set_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the condition set, or the URL-friendly key of the condition set (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/schema/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/condition_sets/",
                            },
                            {
                                type: "pathParameter",
                                value: "condition_set_id",
                            },
                            {
                                type: "literal",
                                value: "/ancestors",
                            },
                        ],
                    },
                    queryParameters: [
                        {
                            key: "page",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "integer",
                                    },
                                },
                            },
                            description: "Page number of the results to fetch, starting at 1.",
                        },
                        {
                            key: "per_page",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "integer",
                                    },
                                },
                            },
                            description: "The number of results per page (max 100).",
                        },
                    ],
                    headers: [],
                    request: undefined,
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "list",
                                itemType: {
                                    type: "id",
                                    value: "type_:ConditionSetRead",
                                },
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/schema/string/string/condition_sets/string/ancestors",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                                condition_set_id: "string",
                            },
                            queryParameters: {
                                page: 0,
                                per_page: 0,
                            },
                            headers: {},
                            responseStatusCode: 200,
                            responseBody: [
                                {
                                    key: "string",
                                    type: "userset",
                                    autogenerated: true,
                                    resource_id: "string",
                                    id: "string",
                                    organization_id: "string",
                                    project_id: "string",
                                    environment_id: "string",
                                    created_at: "string",
                                    updated_at: "string",
                                    resource: {
                                        key: "string",
                                        id: "string",
                                        organization_id: "string",
                                        project_id: "string",
                                        environment_id: "string",
                                        created_at: "string",
                                        updated_at: "string",
                                        name: "string",
                                        urn: "string",
                                        description: "string",
                                        actions: {
                                            string: {
                                                name: "string",
                                                description: "string",
                                                attributes: {
                                                    string: {},
                                                },
                                                id: "string",
                                                key: "string",
                                            },
                                        },
                                        attributes: {
                                            string: {
                                                type: "bool",
                                                description: "string",
                                                id: "string",
                                                key: "string",
                                            },
                                        },
                                        action_groups: {
                                            string: ["string"],
                                        },
                                    },
                                    name: "string",
                                    description: "string",
                                    conditions: {
                                        string: {},
                                    },
                                    parent_id: "string",
                                },
                            ],
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description: "Gets all ancestors (parent, parent of parent, and so on)",
                    htmlDescription: "<p>Gets all ancestors (parent, parent of parent, and so on)</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "get-condition-set-descendants",
                    method: "GET",
                    id: "get_condition_set_descendants",
                    name: "Get Condition Set Descendants",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                            {
                                key: "condition_set_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the condition set, or the URL-friendly key of the condition set (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/schema/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/condition_sets/",
                            },
                            {
                                type: "pathParameter",
                                value: "condition_set_id",
                            },
                            {
                                type: "literal",
                                value: "/descendants",
                            },
                        ],
                    },
                    queryParameters: [
                        {
                            key: "page",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "integer",
                                    },
                                },
                            },
                            description: "Page number of the results to fetch, starting at 1.",
                        },
                        {
                            key: "per_page",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "integer",
                                    },
                                },
                            },
                            description: "The number of results per page (max 100).",
                        },
                    ],
                    headers: [],
                    request: undefined,
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "list",
                                itemType: {
                                    type: "id",
                                    value: "type_:ConditionSetRead",
                                },
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/schema/string/string/condition_sets/string/descendants",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                                condition_set_id: "string",
                            },
                            queryParameters: {
                                page: 0,
                                per_page: 0,
                            },
                            headers: {},
                            responseStatusCode: 200,
                            responseBody: [
                                {
                                    key: "string",
                                    type: "userset",
                                    autogenerated: true,
                                    resource_id: "string",
                                    id: "string",
                                    organization_id: "string",
                                    project_id: "string",
                                    environment_id: "string",
                                    created_at: "string",
                                    updated_at: "string",
                                    resource: {
                                        key: "string",
                                        id: "string",
                                        organization_id: "string",
                                        project_id: "string",
                                        environment_id: "string",
                                        created_at: "string",
                                        updated_at: "string",
                                        name: "string",
                                        urn: "string",
                                        description: "string",
                                        actions: {
                                            string: {
                                                name: "string",
                                                description: "string",
                                                attributes: {
                                                    string: {},
                                                },
                                                id: "string",
                                                key: "string",
                                            },
                                        },
                                        attributes: {
                                            string: {
                                                type: "bool",
                                                description: "string",
                                                id: "string",
                                                key: "string",
                                            },
                                        },
                                        action_groups: {
                                            string: ["string"],
                                        },
                                    },
                                    name: "string",
                                    description: "string",
                                    conditions: {
                                        string: {},
                                    },
                                    parent_id: "string",
                                },
                            ],
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description: "Gets all descendants (children, children of children, and so on)",
                    htmlDescription: "<p>Gets all descendants (children, children of children, and so on)</p>\n",
                    authed: true,
                },
            ],
            types: [],
            subpackages: [],
            pointsTo: undefined,
            urlSlug: "condition-sets",
            description:
                "\nCondition sets are sets of objects that are dynamically defined based on conditions on the objects' attributes.\nConditions sets allows you the flexibility of ABAC with the simplicity of RBAC.\n\nThere are currently two types of condition sets at the moment:\n1) user set = the set of users that match all the specified conditions.\n2) resource set = the set of resources that match all the specified conditions.\n\nExamples:\n\n- `us_based_employees` = {U1, ..., Un} = {all **users** who are *located in the US* and are *assigned the employee role*}\n- `private_repos` = {R1, ..., Rn} = {all **resources** *of type repository* that *are private*}\n\nWe can then picture a **matrix** of assignment between *user sets* and *resource sets*.\n\nExample:\nIf we check the checkbox where `us_based_employees` and `private_repos->clone` action intersect, we are setting a rule:\n*all US based employees can clone private repos*.\n",
            htmlDescription:
                "<p>Condition sets are sets of objects that are dynamically defined based on conditions on the objects&#39; attributes.\nConditions sets allows you the flexibility of ABAC with the simplicity of RBAC.</p>\n<p>There are currently two types of condition sets at the moment:</p>\n<ol>\n<li>user set = the set of users that match all the specified conditions.</li>\n<li>resource set = the set of resources that match all the specified conditions.</li>\n</ol>\n<p>Examples:</p>\n<ul>\n<li><code>us_based_employees</code> = {U1, ..., Un} = {all <strong>users</strong> who are <em>located in the US</em> and are <em>assigned the employee role</em>}</li>\n<li><code>private_repos</code> = {R1, ..., Rn} = {all <strong>resources</strong> <em>of type repository</em> that <em>are private</em>}</li>\n</ul>\n<p>We can then picture a <strong>matrix</strong> of assignment between <em>user sets</em> and <em>resource sets</em>.</p>\n<p>Example:\nIf we check the checkbox where <code>us_based_employees</code> and <code>private_repos-&gt;clone</code> action intersect, we are setting a rule:\n<em>all US based employees can clone private repos</em>.</p>\n",
        },
        subpackage_users: {
            subpackageId: "subpackage_users",
            name: "Users",
            endpoints: [
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "list-users",
                    method: "GET",
                    id: "list_users",
                    name: "List Users",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/facts/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/users",
                            },
                        ],
                    },
                    queryParameters: [
                        {
                            key: "search",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                            },
                            description: "Text search for the email field",
                        },
                        {
                            key: "role",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                            },
                            description: "Match users with a specific role",
                        },
                        {
                            key: "page",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "integer",
                                    },
                                },
                            },
                            description: "Page number of the results to fetch, starting at 1.",
                        },
                        {
                            key: "per_page",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "integer",
                                    },
                                },
                            },
                            description: "The number of results per page (max 100).",
                        },
                    ],
                    headers: [],
                    request: undefined,
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:PaginatedResultUserRead",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/facts/string/string/users",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                            },
                            queryParameters: {
                                search: "string",
                                role: "string",
                            },
                            headers: {},
                            responseStatusCode: 200,
                            responseBody: {
                                data: [
                                    {
                                        key: "string",
                                        id: "string",
                                        organization_id: "string",
                                        project_id: "string",
                                        environment_id: "string",
                                        associated_tenants: [
                                            {
                                                tenant: "string",
                                                roles: ["string"],
                                                status: "active",
                                            },
                                        ],
                                        roles: [
                                            {
                                                role: "string",
                                                tenant: "string",
                                            },
                                        ],
                                        email: "string",
                                        first_name: "string",
                                        last_name: "string",
                                        attributes: {
                                            string: {},
                                        },
                                    },
                                ],
                                total_count: 0,
                                page_count: 0,
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description: "Lists all the users defined within an environment.",
                    htmlDescription: "<p>Lists all the users defined within an environment.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "create-user",
                    method: "POST",
                    id: "create_user",
                    name: "Create User",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/facts/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/users",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:UserCreate",
                            },
                        },
                    },
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:UserRead",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/facts/string/string/users",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            requestBody: {
                                key: "string",
                            },
                            responseStatusCode: 200,
                            responseBody: {
                                key: "string",
                                id: "string",
                                organization_id: "string",
                                project_id: "string",
                                environment_id: "string",
                                associated_tenants: [
                                    {
                                        tenant: "string",
                                        roles: ["string"],
                                        status: "active",
                                    },
                                ],
                                roles: [
                                    {
                                        role: "string",
                                        tenant: "string",
                                    },
                                ],
                                email: "string",
                                first_name: "string",
                                last_name: "string",
                                attributes: {
                                    string: {},
                                },
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description:
                        "Creates a new user inside the Permit.io system, from that point forward\nyou may run permission checks on that user.\n\nIf the user is already created: will return 200 instead of 201,\nand will return the existing user object in the response body.",
                    htmlDescription:
                        "<p>Creates a new user inside the Permit.io system, from that point forward\nyou may run permission checks on that user.</p>\n<p>If the user is already created: will return 200 instead of 201,\nand will return the existing user object in the response body.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "get-user",
                    method: "GET",
                    id: "get_user",
                    name: "Get User",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                            {
                                key: "user_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the user, or the URL-friendly key of the user (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/facts/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/users/",
                            },
                            {
                                type: "pathParameter",
                                value: "user_id",
                            },
                            {
                                type: "literal",
                                value: "",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: undefined,
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:UserRead",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/facts/string/string/users/string",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                                user_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            responseStatusCode: 200,
                            responseBody: {
                                key: "string",
                                id: "string",
                                organization_id: "string",
                                project_id: "string",
                                environment_id: "string",
                                associated_tenants: [
                                    {
                                        tenant: "string",
                                        roles: ["string"],
                                        status: "active",
                                    },
                                ],
                                roles: [
                                    {
                                        role: "string",
                                        tenant: "string",
                                    },
                                ],
                                email: "string",
                                first_name: "string",
                                last_name: "string",
                                attributes: {
                                    string: {},
                                },
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description: "Gets a user, if such user exists. Otherwise returns 404.",
                    htmlDescription: "<p>Gets a user, if such user exists. Otherwise returns 404.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "replace-user",
                    method: "PUT",
                    id: "replace_user",
                    name: "Replace User",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                            {
                                key: "user_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the user, or the URL-friendly key of the user (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/facts/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/users/",
                            },
                            {
                                type: "pathParameter",
                                value: "user_id",
                            },
                            {
                                type: "literal",
                                value: "",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:UserCreate",
                            },
                        },
                    },
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:UserRead",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/facts/string/string/users/string",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                                user_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            requestBody: {
                                key: "string",
                            },
                            responseStatusCode: 200,
                            responseBody: {
                                key: "string",
                                id: "string",
                                organization_id: "string",
                                project_id: "string",
                                environment_id: "string",
                                associated_tenants: [
                                    {
                                        tenant: "string",
                                        roles: ["string"],
                                        status: "active",
                                    },
                                ],
                                roles: [
                                    {
                                        role: "string",
                                        tenant: "string",
                                    },
                                ],
                                email: "string",
                                first_name: "string",
                                last_name: "string",
                                attributes: {
                                    string: {},
                                },
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description: undefined,
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "update-user",
                    method: "PATCH",
                    id: "update_user",
                    name: "Update User",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                            {
                                key: "user_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the user, or the URL-friendly key of the user (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/facts/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/users/",
                            },
                            {
                                type: "pathParameter",
                                value: "user_id",
                            },
                            {
                                type: "literal",
                                value: "",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: {
                        type: {
                            type: "object",
                            extends: [],
                            properties: [
                                {
                                    key: "email",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "primitive",
                                            value: {
                                                type: "string",
                                            },
                                        },
                                    },
                                    description:
                                        "The email of the user. If synced, will be unique inside the environment.",
                                },
                                {
                                    key: "first_name",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "primitive",
                                            value: {
                                                type: "string",
                                            },
                                        },
                                    },
                                    description: "First name of the user.",
                                },
                                {
                                    key: "last_name",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "primitive",
                                            value: {
                                                type: "string",
                                            },
                                        },
                                    },
                                    description: "Last name of the user.",
                                },
                                {
                                    key: "attributes",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "map",
                                            keyType: {
                                                type: "primitive",
                                                value: {
                                                    type: "string",
                                                },
                                            },
                                            valueType: {
                                                type: "unknown",
                                            },
                                        },
                                    },
                                    description:
                                        "Arbitrary user attributes that will be used to enforce attribute-based access control policies.",
                                },
                            ],
                        },
                    },
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:UserRead",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/facts/string/string/users/string",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                                user_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            requestBody: {},
                            responseStatusCode: 200,
                            responseBody: {
                                key: "string",
                                id: "string",
                                organization_id: "string",
                                project_id: "string",
                                environment_id: "string",
                                associated_tenants: [
                                    {
                                        tenant: "string",
                                        roles: ["string"],
                                        status: "active",
                                    },
                                ],
                                roles: [
                                    {
                                        role: "string",
                                        tenant: "string",
                                    },
                                ],
                                email: "string",
                                first_name: "string",
                                last_name: "string",
                                attributes: {
                                    string: {},
                                },
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description:
                        "Partially updates the user definition.\nFields that will be provided will be completely overwritten.",
                    htmlDescription:
                        "<p>Partially updates the user definition.\nFields that will be provided will be completely overwritten.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "delete-user",
                    method: "DELETE",
                    id: "delete_user",
                    name: "Delete User",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                            {
                                key: "user_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the user, or the URL-friendly key of the user (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/facts/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/users/",
                            },
                            {
                                type: "pathParameter",
                                value: "user_id",
                            },
                            {
                                type: "literal",
                                value: "",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: undefined,
                    response: undefined,
                    examples: [
                        {
                            path: "/v2/facts/string/string/users/string",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                                user_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            responseStatusCode: 200,
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description: "Deletes the user and all its related data.",
                    htmlDescription: "<p>Deletes the user and all its related data.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "assign-role-to-user",
                    method: "POST",
                    id: "assign_role_to_user",
                    name: "Assign Role To User",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                            {
                                key: "user_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the user, or the URL-friendly key of the user (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/facts/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/users/",
                            },
                            {
                                type: "pathParameter",
                                value: "user_id",
                            },
                            {
                                type: "literal",
                                value: "/roles",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: {
                        type: {
                            type: "object",
                            extends: [],
                            properties: [
                                {
                                    key: "role",
                                    valueType: {
                                        type: "primitive",
                                        value: {
                                            type: "string",
                                        },
                                    },
                                    description:
                                        "the role that will be assigned (accepts either the role id or the role key)",
                                },
                                {
                                    key: "tenant",
                                    valueType: {
                                        type: "primitive",
                                        value: {
                                            type: "string",
                                        },
                                    },
                                    description:
                                        "the tenant the role is associated with (accepts either the tenant id or the tenant key)",
                                },
                            ],
                        },
                    },
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:RoleAssignmentRead",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/facts/string/string/users/string/roles",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                                user_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            requestBody: {
                                role: "string",
                                tenant: "string",
                            },
                            responseStatusCode: 200,
                            responseBody: {
                                id: "string",
                                user: "string",
                                role: "string",
                                tenant: "string",
                                user_id: "string",
                                role_id: "string",
                                tenant_id: "string",
                                organization_id: "string",
                                project_id: "string",
                                environment_id: "string",
                                created_at: "string",
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description:
                        "Assigns a role to the user within the tenant.\n\nThe tenant defines the scope of the assignment. In other words, the role is effective only within the tenant.",
                    htmlDescription:
                        "<p>Assigns a role to the user within the tenant.</p>\n<p>The tenant defines the scope of the assignment. In other words, the role is effective only within the tenant.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "unassign-role-from-user",
                    method: "DELETE",
                    id: "unassign_role_from_user",
                    name: "Unassign Role From User",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                            {
                                key: "user_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the user, or the URL-friendly key of the user (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/facts/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/users/",
                            },
                            {
                                type: "pathParameter",
                                value: "user_id",
                            },
                            {
                                type: "literal",
                                value: "/roles",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: {
                        type: {
                            type: "object",
                            extends: [],
                            properties: [
                                {
                                    key: "role",
                                    valueType: {
                                        type: "primitive",
                                        value: {
                                            type: "string",
                                        },
                                    },
                                    description:
                                        "the role that will be unassigned (accepts either the role id or the role key)",
                                },
                                {
                                    key: "tenant",
                                    valueType: {
                                        type: "primitive",
                                        value: {
                                            type: "string",
                                        },
                                    },
                                    description:
                                        "the tenant the role is associated with (accepts either the tenant id or the tenant key)",
                                },
                            ],
                        },
                    },
                    response: undefined,
                    examples: [
                        {
                            path: "/v2/facts/string/string/users/string/roles",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                                user_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            requestBody: {
                                role: "string",
                                tenant: "string",
                            },
                            responseStatusCode: 200,
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description:
                        "Unassigns the role from the user within the tenant.\n\nThe tenant defines the scope of the assignment. In other words, the role is effective only within the tenant.\n\nIf the role is not actually assigned, will return 404.",
                    htmlDescription:
                        "<p>Unassigns the role from the user within the tenant.</p>\n<p>The tenant defines the scope of the assignment. In other words, the role is effective only within the tenant.</p>\n<p>If the role is not actually assigned, will return 404.</p>\n",
                    authed: true,
                },
            ],
            types: [],
            subpackages: [],
            pointsTo: undefined,
            urlSlug: "users",
            description:
                "\nUsers represent human end-users of your applications that you'd like to enforce permissions on.\n\nYou must create a user object in Permit.io prior to trying to enforce permissions for that user.\nA user is identified by its key, and you can only create one user with the same key inside a Permit environment.\nYou can place users within tenants via role assignments in order to enforce multi-tenancy in your app.\n\nYou may create users via the API (shown below), with one of the SDKs, or via the Permit cloud console.\n",
            htmlDescription:
                "<p>Users represent human end-users of your applications that you&#39;d like to enforce permissions on.</p>\n<p>You must create a user object in Permit.io prior to trying to enforce permissions for that user.\nA user is identified by its key, and you can only create one user with the same key inside a Permit environment.\nYou can place users within tenants via role assignments in order to enforce multi-tenancy in your app.</p>\n<p>You may create users via the API (shown below), with one of the SDKs, or via the Permit cloud console.</p>\n",
        },
        subpackage_tenants: {
            subpackageId: "subpackage_tenants",
            name: "Tenants",
            endpoints: [
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "list-tenant-users",
                    method: "GET",
                    id: "list_tenant_users",
                    name: "List Tenant Users",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "tenant_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the tenant, or the URL-friendly key of the tenant (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/facts/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/tenants/",
                            },
                            {
                                type: "pathParameter",
                                value: "tenant_id",
                            },
                            {
                                type: "literal",
                                value: "/users",
                            },
                        ],
                    },
                    queryParameters: [
                        {
                            key: "search",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                            },
                            description: "Text search for the email field",
                        },
                        {
                            key: "role",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                            },
                            description: "Match users with a specific role",
                        },
                        {
                            key: "page",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "integer",
                                    },
                                },
                            },
                            description: "Page number of the results to fetch, starting at 1.",
                        },
                        {
                            key: "per_page",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "integer",
                                    },
                                },
                            },
                            description: "The number of results per page (max 100).",
                        },
                    ],
                    headers: [],
                    request: undefined,
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:PaginatedResultUserRead",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/facts/string/string/tenants/string/users",
                            pathParameters: {
                                proj_id: "string",
                                tenant_id: "string",
                                env_id: "string",
                            },
                            queryParameters: {
                                search: "string",
                                role: "string",
                            },
                            headers: {},
                            responseStatusCode: 200,
                            responseBody: {
                                data: [
                                    {
                                        key: "string",
                                        id: "string",
                                        organization_id: "string",
                                        project_id: "string",
                                        environment_id: "string",
                                        associated_tenants: [
                                            {
                                                tenant: "string",
                                                roles: ["string"],
                                                status: "active",
                                            },
                                        ],
                                        roles: [
                                            {
                                                role: "string",
                                                tenant: "string",
                                            },
                                        ],
                                        email: "string",
                                        first_name: "string",
                                        last_name: "string",
                                        attributes: {
                                            string: {},
                                        },
                                    },
                                ],
                                total_count: 0,
                                page_count: 0,
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description: undefined,
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "list-tenants",
                    method: "GET",
                    id: "list_tenants",
                    name: "List Tenants",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/facts/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/tenants",
                            },
                        ],
                    },
                    queryParameters: [
                        {
                            key: "search",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                            },
                            description: "Text search for the tenant name or key",
                        },
                        {
                            key: "include_total_count",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "boolean",
                                    },
                                },
                            },
                            description: "Include total count in response",
                        },
                        {
                            key: "page",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "integer",
                                    },
                                },
                            },
                            description: "Page number of the results to fetch, starting at 1.",
                        },
                        {
                            key: "per_page",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "integer",
                                    },
                                },
                            },
                            description: "The number of results per page (max 100).",
                        },
                    ],
                    headers: [],
                    request: undefined,
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:ListTenantsResponse",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/facts/string/string/tenants",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                            },
                            queryParameters: {
                                search: "string",
                                include_total_count: true,
                            },
                            headers: {},
                            responseStatusCode: 200,
                            responseBody: {
                                data: [
                                    {
                                        key: "string",
                                        id: "string",
                                        organization_id: "string",
                                        project_id: "string",
                                        environment_id: "string",
                                        created_at: "string",
                                        updated_at: "string",
                                        last_action_at: "string",
                                        name: "string",
                                        description: "string",
                                        attributes: {
                                            string: {},
                                        },
                                    },
                                ],
                                total_count: 0,
                                page_count: 0,
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description: "Lists all the tenants defined within an environment.",
                    htmlDescription: "<p>Lists all the tenants defined within an environment.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "create-tenant",
                    method: "POST",
                    id: "create_tenant",
                    name: "Create Tenant",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/facts/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/tenants",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:TenantCreate",
                            },
                        },
                    },
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:TenantRead",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/facts/string/string/tenants",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            requestBody: {
                                key: "string",
                                name: "string",
                            },
                            responseStatusCode: 200,
                            responseBody: {
                                key: "string",
                                id: "string",
                                organization_id: "string",
                                project_id: "string",
                                environment_id: "string",
                                created_at: "string",
                                updated_at: "string",
                                last_action_at: "string",
                                name: "string",
                                description: "string",
                                attributes: {
                                    string: {},
                                },
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description:
                        "Creates a new tenant inside the Permit.io system.\n\nIf the tenant is already created: will return 200 instead of 201,\nand will return the existing tenant object in the response body.",
                    htmlDescription:
                        "<p>Creates a new tenant inside the Permit.io system.</p>\n<p>If the tenant is already created: will return 200 instead of 201,\nand will return the existing tenant object in the response body.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "get-tenant",
                    method: "GET",
                    id: "get_tenant",
                    name: "Get Tenant",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                            {
                                key: "tenant_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the tenant, or the URL-friendly key of the tenant (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/facts/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/tenants/",
                            },
                            {
                                type: "pathParameter",
                                value: "tenant_id",
                            },
                            {
                                type: "literal",
                                value: "",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: undefined,
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:TenantRead",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/facts/string/string/tenants/string",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                                tenant_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            responseStatusCode: 200,
                            responseBody: {
                                key: "string",
                                id: "string",
                                organization_id: "string",
                                project_id: "string",
                                environment_id: "string",
                                created_at: "string",
                                updated_at: "string",
                                last_action_at: "string",
                                name: "string",
                                description: "string",
                                attributes: {
                                    string: {},
                                },
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description: "Gets a tenant, if such tenant exists. Otherwise returns 404.",
                    htmlDescription: "<p>Gets a tenant, if such tenant exists. Otherwise returns 404.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "update-tenant",
                    method: "PATCH",
                    id: "update_tenant",
                    name: "Update Tenant",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                            {
                                key: "tenant_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the tenant, or the URL-friendly key of the tenant (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/facts/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/tenants/",
                            },
                            {
                                type: "pathParameter",
                                value: "tenant_id",
                            },
                            {
                                type: "literal",
                                value: "",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: {
                        type: {
                            type: "object",
                            extends: [],
                            properties: [
                                {
                                    key: "name",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "primitive",
                                            value: {
                                                type: "string",
                                            },
                                        },
                                    },
                                    description: "A descriptive name for the tenant",
                                },
                                {
                                    key: "description",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "primitive",
                                            value: {
                                                type: "string",
                                            },
                                        },
                                    },
                                    description: "an optional longer description of the tenant",
                                },
                                {
                                    key: "attributes",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "map",
                                            keyType: {
                                                type: "primitive",
                                                value: {
                                                    type: "string",
                                                },
                                            },
                                            valueType: {
                                                type: "unknown",
                                            },
                                        },
                                    },
                                    description:
                                        "Arbitraty tenant attributes that will be used to enforce attribute-based access control policies.",
                                },
                            ],
                        },
                    },
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:TenantRead",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/facts/string/string/tenants/string",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                                tenant_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            requestBody: {},
                            responseStatusCode: 200,
                            responseBody: {
                                key: "string",
                                id: "string",
                                organization_id: "string",
                                project_id: "string",
                                environment_id: "string",
                                created_at: "string",
                                updated_at: "string",
                                last_action_at: "string",
                                name: "string",
                                description: "string",
                                attributes: {
                                    string: {},
                                },
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description:
                        "Partially updates the tenant definition.\nFields that will be provided will be completely overwritten.",
                    htmlDescription:
                        "<p>Partially updates the tenant definition.\nFields that will be provided will be completely overwritten.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "delete-tenant",
                    method: "DELETE",
                    id: "delete_tenant",
                    name: "Delete Tenant",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                            {
                                key: "tenant_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the tenant, or the URL-friendly key of the tenant (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/facts/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/tenants/",
                            },
                            {
                                type: "pathParameter",
                                value: "tenant_id",
                            },
                            {
                                type: "literal",
                                value: "",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: undefined,
                    response: undefined,
                    examples: [
                        {
                            path: "/v2/facts/string/string/tenants/string",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                                tenant_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            responseStatusCode: 200,
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description: "Deletes the tenant and all its related data.",
                    htmlDescription: "<p>Deletes the tenant and all its related data.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "delete-tenant-user",
                    method: "DELETE",
                    id: "delete_tenant_user",
                    name: "Delete Tenant User",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                            {
                                key: "tenant_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the tenant, or the URL-friendly key of the tenant (i.e: the "slug").',
                            },
                            {
                                key: "user_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the user, or the URL-friendly key of the user (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/facts/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/tenants/",
                            },
                            {
                                type: "pathParameter",
                                value: "tenant_id",
                            },
                            {
                                type: "literal",
                                value: "/users/",
                            },
                            {
                                type: "pathParameter",
                                value: "user_id",
                            },
                            {
                                type: "literal",
                                value: "",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: undefined,
                    response: undefined,
                    examples: [
                        {
                            path: "/v2/facts/string/string/tenants/string/users/string",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                                tenant_id: "string",
                                user_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            responseStatusCode: 200,
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description: "Deletes a user under a tenant.",
                    htmlDescription: "<p>Deletes a user under a tenant.</p>\n",
                    authed: true,
                },
            ],
            types: [],
            subpackages: [],
            pointsTo: undefined,
            urlSlug: "tenants",
            description:
                "\nA tenant is a group of users that share a common organizational identity.\n\nEach tenant is a silo that can enforce strict boundaries between your customers.\nYou can associate your protected objects with a specific tenant, and only users\nbelonging to that tenant may access these resources (pending on adequate permissions).\n\nUsually, each tenant will represent one of the end-customer companies in your product\n(i.e. the company that you sell to). Through the tenant feature we enable you to have\nmulti-tenancy straight out of the box.\n",
            htmlDescription:
                "<p>A tenant is a group of users that share a common organizational identity.</p>\n<p>Each tenant is a silo that can enforce strict boundaries between your customers.\nYou can associate your protected objects with a specific tenant, and only users\nbelonging to that tenant may access these resources (pending on adequate permissions).</p>\n<p>Usually, each tenant will represent one of the end-customer companies in your product\n(i.e. the company that you sell to). Through the tenant feature we enable you to have\nmulti-tenancy straight out of the box.</p>\n",
        },
        subpackage_roleAssignments: {
            subpackageId: "subpackage_roleAssignments",
            name: "Role Assignments",
            endpoints: [
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "list-role-assignments",
                    method: "GET",
                    id: "list_role_assignments",
                    name: "List Role Assignments",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/facts/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/role_assignments",
                            },
                        ],
                    },
                    queryParameters: [
                        {
                            key: "user",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                            },
                            description:
                                "optional user filter, will only return role assignments granted to this user.",
                        },
                        {
                            key: "role",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                            },
                            description: "optional role filter, will only return role assignments granting this role.",
                        },
                        {
                            key: "tenant",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                            },
                            description:
                                "optional tenant filter, will only return role assignments granted in that tenant.",
                        },
                        {
                            key: "page",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "integer",
                                    },
                                },
                            },
                            description: "Page number of the results to fetch, starting at 1.",
                        },
                        {
                            key: "per_page",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "integer",
                                    },
                                },
                            },
                            description: "The number of results per page (max 100).",
                        },
                    ],
                    headers: [],
                    request: undefined,
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "list",
                                itemType: {
                                    type: "id",
                                    value: "type_:RoleAssignmentRead",
                                },
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/facts/string/string/role_assignments",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                            },
                            queryParameters: {
                                user: "string",
                                role: "string",
                            },
                            headers: {},
                            responseStatusCode: 200,
                            responseBody: [
                                {
                                    id: "string",
                                    user: "string",
                                    role: "string",
                                    tenant: "string",
                                    user_id: "string",
                                    role_id: "string",
                                    tenant_id: "string",
                                    organization_id: "string",
                                    project_id: "string",
                                    environment_id: "string",
                                    created_at: "string",
                                },
                            ],
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description:
                        "Lists the role assignments defined within an environment.\n\n- If the `user` filter is present, will only return the role assignments of that user.\n- If the `tenant` filter is present, will only return the role assignments in that tenant.\n- If the `role` filter is present, will only return role assignments that are granting that role.",
                    htmlDescription:
                        "<p>Lists the role assignments defined within an environment.</p>\n<ul>\n<li>If the <code>user</code> filter is present, will only return the role assignments of that user.</li>\n<li>If the <code>tenant</code> filter is present, will only return the role assignments in that tenant.</li>\n<li>If the <code>role</code> filter is present, will only return role assignments that are granting that role.</li>\n</ul>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "assign-role",
                    method: "POST",
                    id: "assign_role",
                    name: "Assign Role",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/facts/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/role_assignments",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:RoleAssignmentCreate",
                            },
                        },
                    },
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:RoleAssignmentRead",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/facts/string/string/role_assignments",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            requestBody: {
                                role: "string",
                                tenant: "string",
                                user: "string",
                            },
                            responseStatusCode: 200,
                            responseBody: {
                                id: "string",
                                user: "string",
                                role: "string",
                                tenant: "string",
                                user_id: "string",
                                role_id: "string",
                                tenant_id: "string",
                                organization_id: "string",
                                project_id: "string",
                                environment_id: "string",
                                created_at: "string",
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description:
                        "Assigns a role to a user within a tenant.\n\nThe tenant defines the scope of the assignment. In other words, the role is effective only within the tenant.",
                    htmlDescription:
                        "<p>Assigns a role to a user within a tenant.</p>\n<p>The tenant defines the scope of the assignment. In other words, the role is effective only within the tenant.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "unassign-role",
                    method: "DELETE",
                    id: "unassign_role",
                    name: "Unassign Role",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/facts/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/role_assignments",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:RoleAssignmentRemove",
                            },
                        },
                    },
                    response: undefined,
                    examples: [
                        {
                            path: "/v2/facts/string/string/role_assignments",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            requestBody: {
                                role: "string",
                                tenant: "string",
                                user: "string",
                            },
                            responseStatusCode: 200,
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description:
                        "Unassigns a user role within a tenant.\n\nThe tenant defines the scope of the assignment. In other words, the role is effective only within the tenant.\n\nIf the role is not actually assigned, will return 404.",
                    htmlDescription:
                        "<p>Unassigns a user role within a tenant.</p>\n<p>The tenant defines the scope of the assignment. In other words, the role is effective only within the tenant.</p>\n<p>If the role is not actually assigned, will return 404.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "bulk-assign-role",
                    method: "POST",
                    id: "bulk_assign_role",
                    name: "Bulk Assign Role",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/facts/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/role_assignments/bulk",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: {
                        type: {
                            type: "reference",
                            value: {
                                type: "list",
                                itemType: {
                                    type: "id",
                                    value: "type_:RoleAssignmentCreate",
                                },
                            },
                        },
                    },
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:BulkRoleAssignmentReport",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/facts/string/string/role_assignments/bulk",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            requestBody: [
                                {
                                    role: "string",
                                    tenant: "string",
                                    user: "string",
                                },
                            ],
                            responseStatusCode: 200,
                            responseBody: {
                                assignments_created: 0,
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description: undefined,
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "bulk-unassign-role",
                    method: "DELETE",
                    id: "bulk_unassign_role",
                    name: "Bulk Unassign Role",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/facts/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/role_assignments/bulk",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: {
                        type: {
                            type: "reference",
                            value: {
                                type: "list",
                                itemType: {
                                    type: "id",
                                    value: "type_:RoleAssignmentRemove",
                                },
                            },
                        },
                    },
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:BulkRoleUnAssignmentReport",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/facts/string/string/role_assignments/bulk",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            requestBody: [
                                {
                                    role: "string",
                                    tenant: "string",
                                    user: "string",
                                },
                            ],
                            responseStatusCode: 200,
                            responseBody: {
                                assignments_removed: 0,
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description: undefined,
                    authed: true,
                },
            ],
            types: [],
            subpackages: [],
            pointsTo: undefined,
            urlSlug: "role-assignments",
            description:
                "\nRole Assignments are RBAC-constructs that state that a actor (i.e: user) is assigned a role within a tenant.\n\nWith role assignments you can assign or unassign roles to a user.\nRole assignment define the relationship between users and tenants.\n",
            htmlDescription:
                "<p>Role Assignments are RBAC-constructs that state that a actor (i.e: user) is assigned a role within a tenant.</p>\n<p>With role assignments you can assign or unassign roles to a user.\nRole assignment define the relationship between users and tenants.</p>\n",
        },
        subpackage_conditionSetRules: {
            subpackageId: "subpackage_conditionSetRules",
            name: "Condition Set Rules",
            endpoints: [
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "list-set-permissions",
                    method: "GET",
                    id: "list_set_permissions",
                    name: "List Set Permissions",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/facts/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/set_rules",
                            },
                        ],
                    },
                    queryParameters: [
                        {
                            key: "user_set",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                            },
                            description:
                                "optional user set filter, will only return rules where the permission is granted to this user set",
                        },
                        {
                            key: "permission",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                            },
                            description:
                                "optional permission filter, will only return condition set rules granting this permission",
                        },
                        {
                            key: "resource_set",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                            },
                            description:
                                "optional resource set filter, will only return rules where the permission is granted on this resource set",
                        },
                        {
                            key: "page",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "integer",
                                    },
                                },
                            },
                            description: "Page number of the results to fetch, starting at 1.",
                        },
                        {
                            key: "per_page",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "integer",
                                    },
                                },
                            },
                            description: "The number of results per page (max 100).",
                        },
                    ],
                    headers: [],
                    request: undefined,
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "list",
                                itemType: {
                                    type: "id",
                                    value: "type_:ConditionSetRuleRead",
                                },
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/facts/string/string/set_rules",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                            },
                            queryParameters: {
                                user_set: "string",
                                permission: "string",
                            },
                            headers: {},
                            responseStatusCode: 200,
                            responseBody: [
                                {
                                    id: "string",
                                    key: "string",
                                    user_set: "string",
                                    permission: "string",
                                    resource_set: "string",
                                    organization_id: "string",
                                    project_id: "string",
                                    environment_id: "string",
                                    created_at: "string",
                                    updated_at: "string",
                                },
                            ],
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description:
                        "Lists the condition set rules matching the filter.\n- If the `user_set` filter is present, will only return the permissions set of that user set.\n- If the `permission` filter is present, will only return the permissions sets that equals to the queried permission.\n- If the `resource_set` filter is present, will only return the permissions set of that resource set.",
                    htmlDescription:
                        "<p>Lists the condition set rules matching the filter.</p>\n<ul>\n<li>If the <code>user_set</code> filter is present, will only return the permissions set of that user set.</li>\n<li>If the <code>permission</code> filter is present, will only return the permissions sets that equals to the queried permission.</li>\n<li>If the <code>resource_set</code> filter is present, will only return the permissions set of that resource set.</li>\n</ul>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "assign-set-permissions",
                    method: "POST",
                    id: "assign_set_permissions",
                    name: "Assign Set Permissions",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/facts/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/set_rules",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: {
                        type: {
                            type: "object",
                            extends: [],
                            properties: [
                                {
                                    key: "user_set",
                                    valueType: {
                                        type: "primitive",
                                        value: {
                                            type: "string",
                                        },
                                    },
                                    description:
                                        "The userset that will be given permission, i.e: all the users matching this rule will be given the specified permission",
                                },
                                {
                                    key: "permission",
                                    valueType: {
                                        type: "primitive",
                                        value: {
                                            type: "string",
                                        },
                                    },
                                    description:
                                        'The permission that will be granted to the userset *on* the resourceset. The permission can be either a resource action id, or `{resource_key}:{action_key}`, i.e: the "permission name".',
                                },
                                {
                                    key: "resource_set",
                                    valueType: {
                                        type: "primitive",
                                        value: {
                                            type: "string",
                                        },
                                    },
                                    description:
                                        "The resourceset that represents the resources that are granted for access, i.e: all the resources matching this rule can be accessed by the userset to perform the granted *permission*",
                                },
                                {
                                    key: "is_role",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "primitive",
                                            value: {
                                                type: "boolean",
                                            },
                                        },
                                    },
                                    description:
                                        "if True, will set the condition set rule to the role's autogen user-set.",
                                },
                                {
                                    key: "is_resource",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "primitive",
                                            value: {
                                                type: "boolean",
                                            },
                                        },
                                    },
                                    description:
                                        "if True, will set the condition set rule to the resource's autogen resource-set.",
                                },
                            ],
                        },
                    },
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "list",
                                itemType: {
                                    type: "id",
                                    value: "type_:ConditionSetRuleRead",
                                },
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/facts/string/string/set_rules",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            requestBody: {
                                user_set: "string",
                                permission: "string",
                                resource_set: "string",
                            },
                            responseStatusCode: 200,
                            responseBody: [
                                {
                                    id: "string",
                                    key: "string",
                                    user_set: "string",
                                    permission: "string",
                                    resource_set: "string",
                                    organization_id: "string",
                                    project_id: "string",
                                    environment_id: "string",
                                    created_at: "string",
                                    updated_at: "string",
                                },
                            ],
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description:
                        "Grant permissions to a user set *on* a resource set.\n\nIf the permission is already granted, it is skipped.",
                    htmlDescription:
                        "<p>Grant permissions to a user set <em>on</em> a resource set.</p>\n<p>If the permission is already granted, it is skipped.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "unassign-set-permissions",
                    method: "DELETE",
                    id: "unassign_set_permissions",
                    name: "Unassign Set Permissions",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/facts/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/set_rules",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: {
                        type: {
                            type: "object",
                            extends: [],
                            properties: [
                                {
                                    key: "user_set",
                                    valueType: {
                                        type: "primitive",
                                        value: {
                                            type: "string",
                                        },
                                    },
                                    description:
                                        "The userset that will be unassigned these permission, i.e: all the users matching this rule will lose the specified permission",
                                },
                                {
                                    key: "permission",
                                    valueType: {
                                        type: "primitive",
                                        value: {
                                            type: "string",
                                        },
                                    },
                                    description:
                                        'The permission that will be removed from the userset *on* the resourceset. The permission can be either a resource action id, or `{resource_key}:{action_key}`, i.e: the "permission name".',
                                },
                                {
                                    key: "resource_set",
                                    valueType: {
                                        type: "primitive",
                                        value: {
                                            type: "string",
                                        },
                                    },
                                    description:
                                        "The resourceset that represents the resources that are no longer granted for access, i.e: all the resources matching this rule can no longer be accessed by the userset, and will be revoked the specified *permission*",
                                },
                                {
                                    key: "is_role",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "primitive",
                                            value: {
                                                type: "boolean",
                                            },
                                        },
                                    },
                                    description:
                                        "if True, will set the condition set rule to the role's autogen user-set.",
                                },
                                {
                                    key: "is_resource",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "primitive",
                                            value: {
                                                type: "boolean",
                                            },
                                        },
                                    },
                                    description:
                                        "if True, will set the condition set rule to the resource's autogen resource-set.",
                                },
                            ],
                        },
                    },
                    response: undefined,
                    examples: [
                        {
                            path: "/v2/facts/string/string/set_rules",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            requestBody: {
                                user_set: "string",
                                permission: "string",
                                resource_set: "string",
                            },
                            responseStatusCode: 200,
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description:
                        "Revokes permissions to a user set *on* a resource set.\n\nIf the permission is not granted, it is skipped.",
                    htmlDescription:
                        "<p>Revokes permissions to a user set <em>on</em> a resource set.</p>\n<p>If the permission is not granted, it is skipped.</p>\n",
                    authed: true,
                },
            ],
            types: [],
            subpackages: [],
            pointsTo: undefined,
            urlSlug: "condition-set-rules",
            description:
                '\nRepresents a "mini" ABAC rule comprised of (UserSet, Action, ResourceSet).\n\nIf such tuple exists, it means all users matching the UserSet\ncan perform the Action on the resources matching ResourceSet.\n\nExample:\n(`us_based_employees`, `repository:clone`, `private_repos`) where:\n- `us_based_employees` is a user set\n- `repository:clone` is an action\n- `private_repos` is a resource set\n',
            htmlDescription:
                "<p>Represents a &quot;mini&quot; ABAC rule comprised of (UserSet, Action, ResourceSet).</p>\n<p>If such tuple exists, it means all users matching the UserSet\ncan perform the Action on the resources matching ResourceSet.</p>\n<p>Example:\n(<code>us_based_employees</code>, <code>repository:clone</code>, <code>private_repos</code>) where:</p>\n<ul>\n<li><code>us_based_employees</code> is a user set</li>\n<li><code>repository:clone</code> is an action</li>\n<li><code>private_repos</code> is a resource set</li>\n</ul>\n",
        },
        subpackage_resourceInstances: {
            subpackageId: "subpackage_resourceInstances",
            name: "Resource Instances",
            endpoints: [
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "list-resource-instances",
                    method: "GET",
                    id: "list_resource_instances",
                    name: "List Resource Instances",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/facts/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/resource_instances",
                            },
                        ],
                    },
                    queryParameters: [
                        {
                            key: "page",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "integer",
                                    },
                                },
                            },
                            description: "Page number of the results to fetch, starting at 1.",
                        },
                        {
                            key: "per_page",
                            type: {
                                type: "optional",
                                itemType: {
                                    type: "primitive",
                                    value: {
                                        type: "integer",
                                    },
                                },
                            },
                            description: "The number of results per page (max 100).",
                        },
                    ],
                    headers: [],
                    request: undefined,
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "list",
                                itemType: {
                                    type: "id",
                                    value: "type_:ResourceInstanceRead",
                                },
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/facts/string/string/resource_instances",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                            },
                            queryParameters: {
                                page: 0,
                                per_page: 0,
                            },
                            headers: {},
                            responseStatusCode: 200,
                            responseBody: [
                                {
                                    key: "string",
                                    tenant: "string",
                                    resource: "string",
                                    id: "string",
                                    organization_id: "string",
                                    project_id: "string",
                                    environment_id: "string",
                                    created_at: "string",
                                    updated_at: "string",
                                    resource_id: "string",
                                    tenant_id: "string",
                                    attributes: {
                                        string: {},
                                    },
                                },
                            ],
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description: "Lists all the resource instances defined within an environment.",
                    htmlDescription: "<p>Lists all the resource instances defined within an environment.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "create-resource-instance",
                    method: "POST",
                    id: "create_resource_instance",
                    name: "Create Resource Instance",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/facts/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/resource_instances",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: {
                        type: {
                            type: "object",
                            extends: [],
                            properties: [
                                {
                                    key: "key",
                                    valueType: {
                                        type: "primitive",
                                        value: {
                                            type: "string",
                                        },
                                    },
                                    description:
                                        "A unique identifier by which Permit will identify the resource instance for permission checks. You will later pass this identifier to the `permit.check()` API. A key can be anything: for example the resource db id, a url slug, a UUID or anything else as long as it's unique on your end. The resource instance key must be url-friendly.",
                                },
                                {
                                    key: "tenant",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "primitive",
                                            value: {
                                                type: "string",
                                            },
                                        },
                                    },
                                    description:
                                        "the *key* of the tenant that this resource belongs to, used to enforce tenant boundaries in multi-tenant apps.",
                                },
                                {
                                    key: "resource",
                                    valueType: {
                                        type: "primitive",
                                        value: {
                                            type: "string",
                                        },
                                    },
                                    description:
                                        "the *key* of the resource (type) of this resource instance. For example: if this resource instance is the annual budget document, the key of the resource might be `document`.",
                                },
                                {
                                    key: "attributes",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "map",
                                            keyType: {
                                                type: "primitive",
                                                value: {
                                                    type: "string",
                                                },
                                            },
                                            valueType: {
                                                type: "unknown",
                                            },
                                        },
                                    },
                                    description:
                                        "Arbitraty resource attributes that will be used to enforce attribute-based access control policies.",
                                },
                            ],
                        },
                    },
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:ResourceInstanceRead",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/facts/string/string/resource_instances",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            requestBody: {
                                key: "string",
                                resource: "string",
                            },
                            responseStatusCode: 200,
                            responseBody: {
                                key: "string",
                                tenant: "string",
                                resource: "string",
                                id: "string",
                                organization_id: "string",
                                project_id: "string",
                                environment_id: "string",
                                created_at: "string",
                                updated_at: "string",
                                resource_id: "string",
                                tenant_id: "string",
                                attributes: {
                                    string: {},
                                },
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description:
                        "Creates a new instance inside the Permit.io system.\n\nIf the instance is already created: will return 200 instead of 201,\nand will return the existing instance object in the response body.",
                    htmlDescription:
                        "<p>Creates a new instance inside the Permit.io system.</p>\n<p>If the instance is already created: will return 200 instead of 201,\nand will return the existing instance object in the response body.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "get-resource-instance",
                    method: "GET",
                    id: "get_resource_instance",
                    name: "Get Resource Instance",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                            {
                                key: "instance_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the resource instance, or the URL-friendly key of the resource instance (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/facts/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/resource_instances/",
                            },
                            {
                                type: "pathParameter",
                                value: "instance_id",
                            },
                            {
                                type: "literal",
                                value: "",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: undefined,
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:ResourceInstanceRead",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/facts/string/string/resource_instances/string",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                                instance_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            responseStatusCode: 200,
                            responseBody: {
                                key: "string",
                                tenant: "string",
                                resource: "string",
                                id: "string",
                                organization_id: "string",
                                project_id: "string",
                                environment_id: "string",
                                created_at: "string",
                                updated_at: "string",
                                resource_id: "string",
                                tenant_id: "string",
                                attributes: {
                                    string: {},
                                },
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description: "Gets a instance, if such instance exists. Otherwise returns 404.",
                    htmlDescription: "<p>Gets a instance, if such instance exists. Otherwise returns 404.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "update-resource-instance",
                    method: "PATCH",
                    id: "update_resource_instance",
                    name: "Update Resource Instance",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                            {
                                key: "instance_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the resource instance, or the URL-friendly key of the resource instance (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/facts/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/resource_instances/",
                            },
                            {
                                type: "pathParameter",
                                value: "instance_id",
                            },
                            {
                                type: "literal",
                                value: "",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: {
                        type: {
                            type: "object",
                            extends: [],
                            properties: [
                                {
                                    key: "attributes",
                                    valueType: {
                                        type: "optional",
                                        itemType: {
                                            type: "map",
                                            keyType: {
                                                type: "primitive",
                                                value: {
                                                    type: "string",
                                                },
                                            },
                                            valueType: {
                                                type: "unknown",
                                            },
                                        },
                                    },
                                    description:
                                        "Arbitraty resource attributes that will be used to enforce attribute-based access control policies.",
                                },
                            ],
                        },
                    },
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:ResourceInstanceRead",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/facts/string/string/resource_instances/string",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                                instance_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            requestBody: {},
                            responseStatusCode: 200,
                            responseBody: {
                                key: "string",
                                tenant: "string",
                                resource: "string",
                                id: "string",
                                organization_id: "string",
                                project_id: "string",
                                environment_id: "string",
                                created_at: "string",
                                updated_at: "string",
                                resource_id: "string",
                                tenant_id: "string",
                                attributes: {
                                    string: {},
                                },
                            },
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description:
                        "Partially updates the instance definition.\nFields that will be provided will be completely overwritten.",
                    htmlDescription:
                        "<p>Partially updates the instance definition.\nFields that will be provided will be completely overwritten.</p>\n",
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "delete-resource-instance",
                    method: "DELETE",
                    id: "delete_resource_instance",
                    name: "Delete Resource Instance",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                            {
                                key: "instance_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the resource instance, or the URL-friendly key of the resource instance (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/facts/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/resource_instances/",
                            },
                            {
                                type: "pathParameter",
                                value: "instance_id",
                            },
                            {
                                type: "literal",
                                value: "",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: undefined,
                    response: undefined,
                    examples: [
                        {
                            path: "/v2/facts/string/string/resource_instances/string",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                                instance_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            responseStatusCode: 200,
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description: "Deletes the instance and all its related data.",
                    htmlDescription: "<p>Deletes the instance and all its related data.</p>\n",
                    authed: true,
                },
            ],
            types: [],
            subpackages: [],
            pointsTo: undefined,
            urlSlug: "resource-instances",
            description:
                "\nResource instances are instances of resource types.\n\nAn instance represents **a single object** in your system on which you'd want to enforce authorization.\nYou can use this API to store tenancy data (tenant) and arbitraty data (attributes).\n",
            htmlDescription:
                "<p>Resource instances are instances of resource types.</p>\n<p>An instance represents <strong>a single object</strong> in your system on which you&#39;d want to enforce authorization.\nYou can use this API to store tenancy data (tenant) and arbitraty data (attributes).</p>\n",
        },
        subpackage_bulkOperations: {
            subpackageId: "subpackage_bulkOperations",
            name: "Bulk Operations",
            endpoints: [
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "bulk-create-users",
                    method: "POST",
                    id: "bulk_create_users",
                    name: "Bulk Create Users",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/facts/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/bulk/users",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: {
                        type: {
                            type: "object",
                            extends: [],
                            properties: [
                                {
                                    key: "operations",
                                    valueType: {
                                        type: "list",
                                        itemType: {
                                            type: "id",
                                            value: "type_:UserCreate",
                                        },
                                    },
                                    description: undefined,
                                },
                            ],
                        },
                    },
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:UserCreateBulkOperationResult",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/facts/string/string/bulk/users",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            requestBody: {
                                operations: [
                                    {
                                        key: "string",
                                    },
                                ],
                            },
                            responseStatusCode: 200,
                            responseBody: {},
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description: undefined,
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "bulk-replace-users",
                    method: "PUT",
                    id: "bulk_replace_users",
                    name: "Bulk Replace Users",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/facts/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/bulk/users",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: {
                        type: {
                            type: "object",
                            extends: [],
                            properties: [
                                {
                                    key: "operations",
                                    valueType: {
                                        type: "list",
                                        itemType: {
                                            type: "id",
                                            value: "type_:UserCreate",
                                        },
                                    },
                                    description: undefined,
                                },
                            ],
                        },
                    },
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:UserReplaceBulkOperationResult",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/facts/string/string/bulk/users",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            requestBody: {
                                operations: [
                                    {
                                        key: "string",
                                    },
                                ],
                            },
                            responseStatusCode: 200,
                            responseBody: {},
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description: undefined,
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "bulk-delete-users",
                    method: "DELETE",
                    id: "bulk_delete_users",
                    name: "Bulk Delete Users",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/facts/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/bulk/users",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: {
                        type: {
                            type: "object",
                            extends: [],
                            properties: [
                                {
                                    key: "idents",
                                    valueType: {
                                        type: "list",
                                        itemType: {
                                            type: "primitive",
                                            value: {
                                                type: "string",
                                            },
                                        },
                                    },
                                    description: undefined,
                                },
                            ],
                        },
                    },
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:UserDeleteBulkOperationResult",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/facts/string/string/bulk/users",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            requestBody: {
                                idents: ["string"],
                            },
                            responseStatusCode: 200,
                            responseBody: {},
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description: undefined,
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "bulk-create-tenants",
                    method: "POST",
                    id: "bulk_create_tenants",
                    name: "Bulk Create Tenants",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/facts/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/bulk/tenants",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: {
                        type: {
                            type: "object",
                            extends: [],
                            properties: [
                                {
                                    key: "operations",
                                    valueType: {
                                        type: "list",
                                        itemType: {
                                            type: "id",
                                            value: "type_:TenantCreate",
                                        },
                                    },
                                    description: undefined,
                                },
                            ],
                        },
                    },
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:TenantCreateBulkOperationResult",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/facts/string/string/bulk/tenants",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            requestBody: {
                                operations: [
                                    {
                                        key: "string",
                                        name: "string",
                                    },
                                ],
                            },
                            responseStatusCode: 200,
                            responseBody: {},
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description: undefined,
                    authed: true,
                },
                {
                    environments: [
                        {
                            id: "default",
                            baseUrl: "https://api.permit.io",
                        },
                    ],
                    defaultEnvironment: "default",
                    urlSlug: "bulk-delete-tenants",
                    method: "DELETE",
                    id: "bulk_delete_tenants",
                    name: "Bulk Delete Tenants",
                    path: {
                        pathParameters: [
                            {
                                key: "proj_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the project, or the URL-friendly key of the project (i.e: the "slug").',
                            },
                            {
                                key: "env_id",
                                type: {
                                    type: "primitive",
                                    value: {
                                        type: "string",
                                    },
                                },
                                description:
                                    'Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the "slug").',
                            },
                        ],
                        parts: [
                            {
                                type: "literal",
                                value: "",
                            },
                            {
                                type: "literal",
                                value: "/v2/facts/",
                            },
                            {
                                type: "pathParameter",
                                value: "proj_id",
                            },
                            {
                                type: "literal",
                                value: "/",
                            },
                            {
                                type: "pathParameter",
                                value: "env_id",
                            },
                            {
                                type: "literal",
                                value: "/bulk/tenants",
                            },
                        ],
                    },
                    queryParameters: [],
                    headers: [],
                    request: {
                        type: {
                            type: "object",
                            extends: [],
                            properties: [
                                {
                                    key: "idents",
                                    valueType: {
                                        type: "list",
                                        itemType: {
                                            type: "primitive",
                                            value: {
                                                type: "string",
                                            },
                                        },
                                    },
                                    description: undefined,
                                },
                            ],
                        },
                    },
                    response: {
                        type: {
                            type: "reference",
                            value: {
                                type: "id",
                                value: "type_:TenantDeleteBulkOperationResult",
                            },
                        },
                    },
                    examples: [
                        {
                            path: "/v2/facts/string/string/bulk/tenants",
                            pathParameters: {
                                proj_id: "string",
                                env_id: "string",
                            },
                            queryParameters: {},
                            headers: {},
                            requestBody: {
                                idents: ["string"],
                            },
                            responseStatusCode: 200,
                            responseBody: {},
                            codeExamples: {
                                nodeAxios: "",
                            },
                        },
                    ],
                    description: undefined,
                    authed: true,
                },
            ],
            types: [],
            subpackages: [],
            pointsTo: undefined,
            urlSlug: "bulk-operations",
            description: "None",
            htmlDescription: "<p>None</p>\n",
        },
    },
    auth: {
        type: "bearerAuth",
        tokenName: "token",
    },
};
