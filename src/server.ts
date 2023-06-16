import { PrismaClient } from "@prisma/client";
import cors from "cors";
import express from "express";
import { AuthUtilsImpl } from "./AuthUtils";
import { getConfig } from "./config";
import { register } from "./generated";
import { S3UtilsImpl } from "./S3Utils";
import { getReadApiService } from "./services/api/getApiReadService";
import { getRegisterApiService } from "./services/api/getRegisterApiService";
import { getDocsReadService } from "./services/docs/getDocsReadService";
import { getDocsReadV2Service, registerDocsReadV2Service } from "./services/docs/getDocsReadV2Service";
import { getDocsWriteService } from "./services/docs/getDocsWriteService";
import { getDocsWriteV2Service } from "./services/docs/getDocsWriteV2Service";

const PORT = 8080;

void main();

async function main() {
    try {
        const config = getConfig();

        const app = express();

        app.use(cors());

        app.get("/health", (_req, res) => {
            res.sendStatus(200);
        });

        const prisma = new PrismaClient({
            log: ["info", "warn", "error"],
        });

        const authUtils = new AuthUtilsImpl(config);
        const s3Utils = new S3UtilsImpl(config);

        app.use(express.json({ limit: "50mb" }));
        register(app, {
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
                        _root: getDocsReadV2Service(),
                    },
                    write: {
                        _root: getDocsWriteV2Service(prisma, authUtils, s3Utils, config),
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

        // manually register read docs v2 to avoid zurg's slowness
        registerDocsReadV2Service(app, prisma, s3Utils);

        console.log(`Listening for requests on port ${PORT}`);
        app.listen(PORT);
    } catch (e) {
        console.error("Server failed to start...", e);
    }
}
