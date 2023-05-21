import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";
import { AuthUtils } from "../../AuthUtils";
import { OrgId } from "../../generated/api";
import {
    DocsRegistrationId,
    FilePath,
    FileS3UploadUrl,
} from "../../generated/api/resources/docs/resources/v1/resources/write";
import { DocsRegistrationIdNotFound } from "../../generated/api/resources/docs/resources/v1/resources/write/errors/DocsRegistrationIdNotFound";
import { WriteService } from "../../generated/api/resources/docs/resources/v1/resources/write/service/WriteService";
import * as FernSerializers from "../../generated/serialization";
import { S3Utils } from "../../s3Utils";
import { writeBuffer } from "../../serdeUtils";
import { transformWriteDocsDefinitionToDb } from "./transformDocsDefinitionToDb";

const DOCS_REGISTRATIONS: Record<DocsRegistrationId, DocsRegistrationInfo> = {};

interface DocsRegistrationInfo {
    domain: string;
    orgId: OrgId;
    presignedUrls: Record<FilePath, FileS3UploadUrl>;
}

export function getDocsWriteService(prisma: PrismaClient, authUtils: AuthUtils, s3Utils: S3Utils): WriteService {
    return new WriteService({
        startDocsRegister: async (req, res) => {
            await authUtils.checkUserBelongsToOrg({ authHeader: req.headers.authorization, orgId: req.body.orgId });
            const docsRegistrationId = uuidv4();
            const presignedUrls = await s3Utils.getPresignedUrls({
                domain: req.body.domain,
                filepaths: req.body.filepaths,
            });
            DOCS_REGISTRATIONS[docsRegistrationId] = {
                domain: req.body.domain,
                orgId: req.body.orgId,
                presignedUrls,
            };
            return res.send({
                docsRegistrationId,
                uploadUrls: presignedUrls,
            });
        },
        finishDocsRegister: async (req, res) => {
            const docsRegistrationInfo = DOCS_REGISTRATIONS[req.params.docsRegistrationId];
            if (docsRegistrationInfo == null) {
                throw new DocsRegistrationIdNotFound();
            }
            await authUtils.checkUserBelongsToOrg({
                authHeader: req.headers.authorization,
                orgId: docsRegistrationInfo.orgId,
            });
            const dbDocsDefinition = transformWriteDocsDefinitionToDb(req.body.docsDefinition);
            console.log(
                `Docs for ${docsRegistrationInfo.orgId} has references to apis ${Array.from(
                    dbDocsDefinition.referencedApis
                ).join(", ")}`
            );
            const jsonDocsDefinition = await FernSerializers.docs.v1.read.DocsDefinitionDb.jsonOrThrow(
                dbDocsDefinition
            );
            await prisma.docs.upsert({
                create: {
                    url: docsRegistrationInfo.domain,
                    docsDefinition: writeBuffer(jsonDocsDefinition),
                },
                update: {
                    docsDefinition: writeBuffer(jsonDocsDefinition),
                },
                where: {
                    url: docsRegistrationInfo.domain,
                },
            });
            return res.send();
        },
    });
}
