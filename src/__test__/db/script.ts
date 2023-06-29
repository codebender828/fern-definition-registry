import { FernRegistry } from "../../generated";
import { API_DEFINITION_DB, DOCS_DEFINITION_DB } from "./constants";

function indexIntoAlgolia({
    docsDbDefinition,
    apiDbDefinition,
}: {
    docsDbDefinition: FernRegistry.docs.v1.db.DocsDefinitionDb;
    apiDbDefinition: Record<string, FernRegistry.api.v1.db.DbApiDefinition>;
}): void {
    console.log(docsDbDefinition);
    console.log(apiDbDefinition);
}

indexIntoAlgolia({
    docsDbDefinition: DOCS_DEFINITION_DB,
    apiDbDefinition: { [API_DEFINITION_DB.id]: API_DEFINITION_DB },
});
