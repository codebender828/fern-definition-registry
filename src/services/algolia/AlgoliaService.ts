import algolia, { type SearchClient } from "algoliasearch";
import type { FdrApplication } from "../../app";
import type * as FernRegistryDocsRead from "../../generated/api/resources/docs/resources/v1/resources/read";

type WithObjectId<T> = { objectID: string } & T;

export type SearchRecord = WithObjectId<FernRegistryDocsRead.AlgoliaRecord>;

export interface AlgoliaService {
    deleteIndex(indexName: string): Promise<void>;

    indexRecords(indexName: string, records: SearchRecord[]): Promise<void>;
}

export class AlgoliaServiceImpl implements AlgoliaService {
    private readonly client: SearchClient;

    public constructor(app: FdrApplication) {
        const { config } = app;
        this.client = algolia(config.algoliaAppId, config.algoliaAdminApiKey);
    }

    public async deleteIndex(indexName: string) {
        await this.client.initIndex(indexName).delete();
    }

    public async indexRecords(indexName: string, records: SearchRecord[]) {
        await this.client.initIndex(indexName).saveObjects(records).wait();
    }
}
