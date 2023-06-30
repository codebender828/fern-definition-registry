import { PrismaClient } from "@prisma/client";
import cors from "cors";
import express from "express";
import { AuthUtilsImpl } from "./AuthUtils";
import { getConfig } from "./config";
import { FdrServerApplication } from "./FdrServerApplication";
import { register } from "./generated";
import { S3UtilsImpl } from "./S3Utils";
import { getReadApiService } from "./services/api/getApiReadService";
import { getRegisterApiService } from "./services/api/getRegisterApiService";
import { getDocsReadService } from "./services/docs/getDocsReadService";
import { getDocsReadV2Service } from "./services/docs/getDocsReadV2Service";
import { getDocsWriteService } from "./services/docs/getDocsWriteService";
import { getDocsWriteV2Service } from "./services/docs/getDocsWriteV2Service";

const PORT = 8080;

void main();

async function main() {
    try {
        const config = getConfig();

        const expressApp = express();

        expressApp.use(cors());

        expressApp.get("/health", (_req, res) => {
            res.sendStatus(200);
        });

        const app = new FdrServerApplication(config);

        const prisma = new PrismaClient({
            log: ["info", "warn", "error"],
        });

        const authUtils = new AuthUtilsImpl(config);
        const s3Utils = new S3UtilsImpl(config);

        expressApp.use(express.json({ limit: "50mb" }));
        register(expressApp, {
            docs: {
                v1: {
                    read: {
                        _root: getDocsReadService(prisma, s3Utils),
                    },
                    write: {
                        _root: getDocsWriteService(prisma, authUtils, s3Utils),
                    },
                },
                v2: {
                    read: {
                        _root: getDocsReadV2Service(prisma, s3Utils),
                    },
                    write: {
                        _root: getDocsWriteV2Service(app, prisma, authUtils, s3Utils, config),
                    },
                },
            },
            api: {
                v1: {
                    read: {
                        _root: getReadApiService(prisma),
                    },
                    register: {
                        _root: getRegisterApiService(prisma, authUtils),
                    },
                },
            },
        });

        console.log(`Listening for requests on port ${PORT}`);
        expressApp.listen(PORT);
    } catch (e) {
        console.error("Server failed to start...", e);
    }
}
