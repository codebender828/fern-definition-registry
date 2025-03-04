import { v4 as uuid } from "uuid";
import type { FernRegistry } from "../../generated";
import { convertMarkdownToText } from "../../util";
import { type AlgoliaSearchRecord } from "./AlgoliaService";

type ApiDefinitionLoader = (apiDefinitionId: string) => Promise<FernRegistry.api.v1.db.DbApiDefinition | null>;

export async function generateAlgoliaRecords(
    docsDefinition: FernRegistry.docs.v1.db.DocsDefinitionDb.V2,
    loadApiDefinition: ApiDefinitionLoader
) {
    const records = await Promise.all(
        docsDefinition.config.navigation.items.map((item) =>
            generateAlgoliaRecordsForNavigationItem(docsDefinition, loadApiDefinition, [], [], item)
        )
    );
    return records.flat(1);
}

async function generateAlgoliaRecordsForNavigationItem(
    docsDefinition: FernRegistry.docs.v1.db.DocsDefinitionDb.V2,
    loadApiDefinition: ApiDefinitionLoader,
    cumulativeSlugs: string[],
    cumulativeRecords: AlgoliaSearchRecord[],
    item: FernRegistry.docs.v1.read.NavigationItem
) {
    if (item.type === "section") {
        const section = item;
        await Promise.all(
            section.items.map(async (item) => {
                return await generateAlgoliaRecordsForNavigationItem(
                    docsDefinition,
                    loadApiDefinition,
                    [...cumulativeSlugs, section.urlSlug],
                    cumulativeRecords,
                    item
                );
            })
        );
    } else if (item.type === "api") {
        const api = item;
        const apiId = api.api;
        const apiDef = await loadApiDefinition(apiId);
        if (apiDef) {
            const apiRecords = generateAlgoliaRecordsForApiDefinition([...cumulativeSlugs, item.urlSlug], apiDef);
            cumulativeRecords.push(...apiRecords);
        }
    } else {
        const page = item;
        const pageContent = docsDefinition.pages[page.id];
        if (pageContent) {
            const path = [...cumulativeSlugs, page.urlSlug].join("/");
            const processedContent = convertMarkdownToText(pageContent.markdown);
            cumulativeRecords.push({
                objectID: uuid(),
                type: "page",
                path,
                title: page.title,
                subtitle: processedContent,
            });
        }
    }
    return cumulativeRecords;
}

function generateAlgoliaRecordsForApiDefinition(
    cumulativeSlugs: string[],
    apiDef: FernRegistry.api.v1.db.DbApiDefinition
): AlgoliaSearchRecord[] {
    const { rootPackage, subpackages } = apiDef;
    const records: AlgoliaSearchRecord[] = [];

    rootPackage.endpoints.forEach((e) => {
        const endpointRecords = generateAlgoliaRecordsForEndpointDefinition(cumulativeSlugs, e);
        records.push(...endpointRecords);
    });

    Object.values(subpackages).forEach((subpackage) => {
        subpackage.endpoints.forEach((e) => {
            const endpointRecords = generateAlgoliaRecordsForEndpointDefinition(
                [...cumulativeSlugs, subpackage.urlSlug],
                e
            );
            records.push(...endpointRecords);
        });
    });

    return records;
}

function generateAlgoliaRecordsForEndpointDefinition(
    cumulativeSlugs: string[],
    endpointDef: FernRegistry.api.v1.db.DbEndpointDefinition
): AlgoliaSearchRecord[] {
    const records: AlgoliaSearchRecord[] = [];
    if (endpointDef.name || endpointDef.description) {
        const path = [...cumulativeSlugs, endpointDef.urlSlug].join("/");
        const processedDescription = endpointDef.description ? convertMarkdownToText(endpointDef.description) : "";
        records.push({
            objectID: uuid(),
            type: "endpoint",
            title: endpointDef.name ?? "",
            subtitle: processedDescription,
            path,
        });
    }
    // Add records for query parameters, request/response body etc.
    return records;
}
