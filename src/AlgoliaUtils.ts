import { v4 as uuid } from "uuid";
import type { FdrServerApplication } from "./FdrServerApplication";
import type { FernRegistry } from "./generated";
import { WithoutQuestionMarks } from "./WithoutQuestionMarks";

interface AlgoliaRecord {
    objectID: string;
    type: "page" | "endpoint";
    title: string;
    subtitle: string;
    path: string;
}

export interface AlgoliaUtils {
    buildRecordsForDocs(
        docsDefinition: WithoutQuestionMarks<FernRegistry.docs.v1.db.DocsDefinitionDb.V2>
    ): Promise<AlgoliaRecord[]>;
}

export class AlgoliaUtilsImpl implements AlgoliaUtils {
    private get db() {
        return this.app.services.db;
    }

    public constructor(private readonly app: FdrServerApplication) {}

    public async buildRecordsForDocs(
        docsDefinition: WithoutQuestionMarks<FernRegistry.docs.v1.db.DocsDefinitionDb.V2>
    ) {
        const records = await Promise.all(
            docsDefinition.config.navigation.items.map((item) =>
                this.buildRecordsForNavigationItem(docsDefinition, [], [], item)
            )
        );
        return records.flat(1);
    }

    private async buildRecordsForNavigationItem(
        docsDefinition: WithoutQuestionMarks<FernRegistry.docs.v1.db.DocsDefinitionDb.V2>,
        cumulativeSlugs: string[],
        cumulativeRecords: AlgoliaRecord[],
        item: FernRegistry.docs.v1.read.NavigationItem
    ) {
        if (item.type === "section") {
            const section = item;
            await Promise.all(
                section.items.map(async (item) => {
                    return await this.buildRecordsForNavigationItem(
                        docsDefinition,
                        [...cumulativeSlugs, section.urlSlug],
                        cumulativeRecords,
                        item
                    );
                })
            );
        } else if (item.type === "api") {
            const api = item;
            const apiId = api.api;
            const apiDef = await this.db.getApiDefinition(apiId);
            if (apiDef) {
                const apiRecords = this.buildRecordsForApiDefinition([...cumulativeSlugs, item.urlSlug], apiDef);
                cumulativeRecords.push(...apiRecords);
            }
        } else {
            const page = item;
            const pageContent = docsDefinition.pages[page.id];
            if (pageContent) {
                const path = [...cumulativeSlugs, page.urlSlug].join("/");
                cumulativeRecords.push({
                    objectID: uuid(),
                    type: "page",
                    path,
                    title: page.title,
                    subtitle: pageContent.markdown,
                });
            }
        }
        return cumulativeRecords;
    }

    private buildRecordsForApiDefinition(
        cumulativeSlugs: string[],
        apiDef: FernRegistry.api.v1.db.DbApiDefinition
    ): AlgoliaRecord[] {
        const apiUrlSlug = cumulativeSlugs.join("/");
        const { subpackages } = apiDef;
        const records: AlgoliaRecord[] = [];
        Object.keys(subpackages).forEach((subpackageId) => {
            const subpackage = subpackages[subpackageId]!;
            subpackage.endpoints.forEach((endpoint) => {
                if (endpoint.name || endpoint.description) {
                    const path = [apiUrlSlug, subpackage.urlSlug, endpoint.urlSlug].join("/");
                    records.push({
                        objectID: uuid(),
                        type: "endpoint",
                        title: endpoint.name ?? "",
                        subtitle: endpoint.description ?? "",
                        path,
                    });
                }
            });
        });
        return records;
    }
}
