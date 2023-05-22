const VENUS_URL_ENV_VAR = "VENUS_URL";
const AWS_ACCESS_KEY_ENV_VAR = "AWS_ACCESS_KEY_ID";
const AWS_SECRET_KEY_ENV_VAR = "AWS_SECRET_ACCESS_KEY";
const S3_BUCKET_NAME_ENV_VAR = "S3_BUCKET_NAME";
const S3_BUCKET_REGION_ENV_VAR = "S3_BUCKET_REGION";
const S3_URL_OVERRIDE_ENV_VAR = "S3_URL_OVERRIDE";
const ROUTE53_BUCKET_REGION_ENV_VAR = "ROUTE_53_REGION";
const ROUTE53_HOSTED_ZONE_ID_ENV_VAR = "ROUTE_53_HOSTED_ZONE_ID";
const ROUTE53_DOCS_DOMAIN_SUFFIX_ENV_VAR = "ROUTE53_DOCS_DOMAIN_SUFFIX";

export interface FdrConfig {
    venusUrl: string;
    awsAccessKey: string;
    awsSecretKey: string;
    s3BucketName: string;
    s3BucketRegion: string;
    s3UrlOverride: string | undefined;
    route53Region: string;
    route53HostedZoneId: string;
    /* For dev it might be -dev.buildwithfern.com. 
       For prod it might be buildwithfern.com. */
    route53DocsDomainSuffix: string;
}

export function getConfig(): FdrConfig {
    return {
        venusUrl: getEnvironmentVariableOrThrow(VENUS_URL_ENV_VAR),
        awsAccessKey: getEnvironmentVariableOrThrow(AWS_ACCESS_KEY_ENV_VAR),
        awsSecretKey: getEnvironmentVariableOrThrow(AWS_SECRET_KEY_ENV_VAR),
        s3BucketName: getEnvironmentVariableOrThrow(S3_BUCKET_NAME_ENV_VAR),
        s3BucketRegion: getEnvironmentVariableOrThrow(S3_BUCKET_REGION_ENV_VAR),
        s3UrlOverride: process.env[S3_URL_OVERRIDE_ENV_VAR],
        route53Region: getEnvironmentVariableOrThrow(ROUTE53_BUCKET_REGION_ENV_VAR),
        route53HostedZoneId: getEnvironmentVariableOrThrow(ROUTE53_HOSTED_ZONE_ID_ENV_VAR),
        route53DocsDomainSuffix: getEnvironmentVariableOrThrow(ROUTE53_DOCS_DOMAIN_SUFFIX_ENV_VAR),
    };
}

function getEnvironmentVariableOrThrow(environmentVariable: string): string {
    const value = process.env[environmentVariable];
    if (value == null) {
        throw new Error(`Environment variable ${environmentVariable} not found`);
    }
    return value;
}
