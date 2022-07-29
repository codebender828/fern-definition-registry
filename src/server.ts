import { PrismaClient } from "@prisma/client";
import express from "express";
import { initializeDirectories } from "./initializeDirectories";

void main();

async function main() {
  try {
    await initializeDirectories();
    console.log("Initialized Directories...");

    console.log(process.env);

    const app = express();
    app.get("/health", (_req, res) => {
      res.status(200).send("Ok");
    });
    // app.use(
    //   DefinitionRegistryService.expressMiddleware(getRegistryService(prisma))
    // );

    console.log("Listening for requests...");
    app.listen(8080);

    const prisma = new PrismaClient({
      log: ["query", "info", "warn", "error"],
    });
    console.log("Initialized Prisma Client...");
  } catch (e) {
    console.error("Server failed to start...", e);
  }
}
