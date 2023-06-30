import { FdrConfig } from "./config";

export interface AlgoliaUtils {
    index(): Promise<void>;
}

export class AlgoliaUtilsImpl implements AlgoliaUtils {
    public constructor(config: FdrConfig) {}

    index(): Promise<void> {
        throw new Error("Method not implemented.");
    }
}
