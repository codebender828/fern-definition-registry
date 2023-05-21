const VENUS_URL_ENV_VAR = "VENUS_URL";
const AWS_ACCESS_KEY_ENV_VAR = "AWS_ACCESS_KEY_ID";
const AWS_SECRET_KEY_ENV_VAR = "AWS_SECRET_ACCESS_KEY";
const S3_BUCKET_NAME_ENV_VAR = "S3_BUCKET_NAME";
const S3_BUCKET_REGION_ENV_VAR = "S3_BUCKET_REGION";

export interface FdrConfig {
    venusUrl: string;
    awsAccessKey: string;
    awsSecretKey: string;
    s3BucketName: string;
    s3BucketRegion: string;
}

export function getConfig(): FdrConfig {
    return {
        venusUrl: getEnvironmentVariableOrThrow(VENUS_URL_ENV_VAR),
        awsAccessKey: getEnvironmentVariableOrThrow(AWS_ACCESS_KEY_ENV_VAR),
        awsSecretKey: getEnvironmentVariableOrThrow(AWS_SECRET_KEY_ENV_VAR),
        s3BucketName: getEnvironmentVariableOrThrow(S3_BUCKET_NAME_ENV_VAR),
        s3BucketRegion: getEnvironmentVariableOrThrow(S3_BUCKET_REGION_ENV_VAR),
    };
}

function getEnvironmentVariableOrThrow(environmentVariable: string): string {
    const value = process.env[environmentVariable];
    if (value == null) {
        throw new Error(`Environment variable ${environmentVariable} not found`);
    }
    return value;
}
