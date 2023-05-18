import { kebabCase } from "lodash-es";
import path from "path";
import { FernRegistry } from "src/generated";

export function transformDocsDefinitionForReading(
    writeShape: FernRegistry.docs.v1.write.DocsDefinition
): FernRegistry.docs.v1.read.DocsDefinition {
    return {
        ...writeShape,
        config: {
            ...writeShape.config,
            navigation: {
                items: writeShape.config.navigation.items.map((item) => transformNavigationItemForReading(item)),
            },
        },
    };
}

export function transformNavigationItemForReading(
    writeShape: FernRegistry.docs.v1.write.NavigationItem
): FernRegistry.docs.v1.read.NavigationItem {
    switch (writeShape.type) {
        case "api":
            writeShape.title; // kebab case of title
            return {
                ...writeShape,
                urlSlug: "",
            };
        case "page":
            return {
                type: "page",
                id: writeShape.value,
                urlSlug: path.basename(writeShape.value, ".md"), // remove extension
            };
        case "section":
            writeShape.title; // kebab case of title
            return {
                type: "section",
                title: writeShape.title,
                urlSlug: kebabCase(writeShape.title),
                items: writeShape.items.map((item) => transformNavigationItemForReading(item)),
            };
    }
}
