//@ts-expect-error
import { PrismaClient } from "@prismax/client";
import express from "express";
import { initializeDirectories } from "./initializeDirectories";

console.log("Before main!!");

void main();

console.log("After main!!");

async function main() {
  try {
    await initializeDirectories();
    console.log("Initialized Directories...");

    console.log(process.env);

    const app = express();
    app.get("/health", (_req, res) => {
      res.status(200).send("Ok");
    });

    // new PrismaClient({
    //   log: ["query", "info", "warn", "error"],
    // });
    // app.use(
    //   DefinitionRegistryService.expressMiddleware(getRegistryService(prisma))
    // );

    console.log("Listening for requests...");
    app.listen(8080);
  } catch (e) {
    console.error("Server failed to start...", e);
  }
}
