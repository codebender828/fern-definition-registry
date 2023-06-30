import { AlgoliaUtilsImpl, type AlgoliaUtils } from "./AlgoliaUtils";
import { AuthUtilsImpl, type AuthUtils } from "./AuthUtils";
import type { FdrConfig } from "./config";
import { DatabaseUtilsImpl, type DatabaseUtils } from "./DatabaseUtils";
import { S3UtilsImpl, type S3Utils } from "./S3Utils";

class FdrServices {
    public readonly auth: AuthUtils;
    public readonly db: DatabaseUtils;
    public readonly algolia: AlgoliaUtils;
    public readonly s3: S3Utils;

    public constructor(app: FdrServerApplication) {
        this.auth = new AuthUtilsImpl(app.config);
        this.db = new DatabaseUtilsImpl();
        this.algolia = new AlgoliaUtilsImpl(app);
        this.s3 = new S3UtilsImpl(app.config);
    }
}

export class FdrServerApplication {
    public readonly services: FdrServices;

    public constructor(public readonly config: FdrConfig) {
        this.services = new FdrServices(this);
    }
}
