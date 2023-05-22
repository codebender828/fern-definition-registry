import {
    ChangeResourceRecordSetsCommand,
    ListResourceRecordSetsCommand,
    Route53Client,
} from "@aws-sdk/client-route-53";
import { FdrConfig } from "./config";

export interface Route53Utils {
    registerDomain({ domain }: { domain: string }): Promise<{ successful: boolean }>;
}

export class Route53UtilsImpl implements Route53Utils {
    private config: FdrConfig;
    private client: Route53Client;

    constructor(config: FdrConfig) {
        this.config = config;
        if (config.s3UrlOverride != null) {
            this.client = new Route53Client({
                region: config.route53Region,
                credentials: {
                    accessKeyId: config.awsAccessKey,
                    secretAccessKey: config.awsSecretKey,
                },
            });
        } else {
            this.client = new Route53Client({
                region: config.route53Region,
                credentials: {
                    accessKeyId: config.awsAccessKey,
                    secretAccessKey: config.awsSecretKey,
                },
            });
        }
    }

    async registerDomain({ domain }: { domain: string }): Promise<{ successful: boolean }> {
        const domainAlreadyRegistered = await this.isDomainAlreadyRegistered({ domain });
        if (domainAlreadyRegistered) {
            return { successful: true };
        }
        const route53RecordName = this.getRoute53RecordName({ domain });
        const command = new ChangeResourceRecordSetsCommand({
            HostedZoneId: this.config.route53HostedZoneId,
            ChangeBatch: {
                Changes: [{
                    Action: "CREATE",
                    ResourceRecordSet: {
                        Name: route53RecordName,
                        Type: "A"
                    }
                }]
            }
        });
        const response = await this.client.send(command);

        return { successful: true };
    }

    async isDomainAlreadyRegistered({ domain }: { domain: string }): Promise<boolean> {
        const route53RecordName = this.getRoute53RecordName({ domain });
        const command = new ListResourceRecordSetsCommand({
            HostedZoneId: this.config.route53HostedZoneId,
            StartRecordName: route53RecordName,
            StartRecordType: "A",
            MaxItems: 1,
        });
        const response = await this.client.send(command);
        return response.ResourceRecordSets != null && response.ResourceRecordSets.length > 0;
    }

    getRoute53RecordName({ domain }: { domain: string }): string {
        return `${domain}${this.config.route53DocsDomainSuffix}`;
    }
}
