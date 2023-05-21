import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { v4 as uuidv4 } from "uuid";
import { FdrConfig } from "./config";
import { FilePath, FileS3UploadUrl } from "./generated/api/resources/docs/resources/v1/resources/write";

export interface S3Utils {
    getPresignedUrls({
        domain,
        filepaths,
    }: {
        domain: string;
        filepaths: FilePath[];
    }): Promise<Record<FilePath, FileS3UploadUrl>>;
}

export class S3UtilsImpl implements S3Utils {
    private config: FdrConfig;
    private client: S3Client;

    constructor(config: FdrConfig) {
        this.config = config;
        this.client = new S3Client({
            region: config.s3BucketRegion,
            credentials: {
                accessKeyId: config.awsAccessKey,
                secretAccessKey: config.awsSecretKey,
            },
        });
    }

    async getPresignedUrls({
        domain,
        filepaths,
    }: {
        domain: string;
        filepaths: FilePath[];
    }): Promise<Record<FilePath, FileS3UploadUrl>> {
        const result: Record<FilePath, FileS3UploadUrl> = {};
        const time: string = new Date().toISOString();
        for (const filepath of filepaths) {
            result[filepath] = {
                fileId: uuidv4(),
                uploadUrl: await this.createPresignedUrlWithClient({ domain, time, filepath }),
            };
        }
        return result;
    }

    async createPresignedUrlWithClient({
        domain,
        time,
        filepath,
    }: {
        domain: string;
        time: string;
        filepath: FilePath;
    }): Promise<string> {
        const command = new PutObjectCommand({
            Bucket: this.config.s3BucketName,
            Key: this.constructS3Key({ domain, time, filepath }),
        });
        return await getSignedUrl(this.client, command, { expiresIn: 3600 });
    }

    constructS3Key({ domain, time, filepath }: { domain: string; time: string; filepath: FilePath }): string {
        return `${domain}/${time}/${filepath}`;
    }
}
