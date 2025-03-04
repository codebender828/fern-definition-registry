const VENUS_URL_ENV_VAR = "VENUS_URL";
const AWS_ACCESS_KEY_ENV_VAR = "AWS_ACCESS_KEY_ID";
const AWS_SECRET_KEY_ENV_VAR = "AWS_SECRET_ACCESS_KEY";
const S3_BUCKET_NAME_ENV_VAR = "S3_BUCKET_NAME";
const S3_BUCKET_REGION_ENV_VAR = "S3_BUCKET_REGION";
const S3_URL_OVERRIDE_ENV_VAR = "S3_URL_OVERRIDE";
const DOMAIN_SUFFIX_ENV_VAR = "DOMAIN_SUFFIX";
const ALGOLIA_APP_ID_ENV_VAR = "ALGOLIA_APP_ID";
const ALGOLIA_ADMIN_API_KEY_ENV_VAR = "ALGOLIA_ADMIN_API_KEY";

export interface FdrConfig {
    venusUrl: string;
    awsAccessKey: string;
    awsSecretKey: string;
    s3BucketName: string;
    s3BucketRegion: string;
    s3UrlOverride: string | undefined;
    domainSuffix: string;
    algoliaAppId: string;
    algoliaAdminApiKey: string;
}

export function getConfig(): FdrConfig {
    return {
        venusUrl: getEnvironmentVariableOrThrow(VENUS_URL_ENV_VAR),
        awsAccessKey: getEnvironmentVariableOrThrow(AWS_ACCESS_KEY_ENV_VAR),
        awsSecretKey: getEnvironmentVariableOrThrow(AWS_SECRET_KEY_ENV_VAR),
        s3BucketName: getEnvironmentVariableOrThrow(S3_BUCKET_NAME_ENV_VAR),
        s3BucketRegion: getEnvironmentVariableOrThrow(S3_BUCKET_REGION_ENV_VAR),
        s3UrlOverride: process.env[S3_URL_OVERRIDE_ENV_VAR],
        domainSuffix: getEnvironmentVariableOrThrow(DOMAIN_SUFFIX_ENV_VAR),
        algoliaAppId: getEnvironmentVariableOrThrow(ALGOLIA_APP_ID_ENV_VAR),
        algoliaAdminApiKey: getEnvironmentVariableOrThrow(ALGOLIA_ADMIN_API_KEY_ENV_VAR),
    };
}

function getEnvironmentVariableOrThrow(environmentVariable: string): string {
    const value = process.env[environmentVariable];
    if (value == null) {
        throw new Error(`Environment variable ${environmentVariable} not found`);
    }
    return value;
}
