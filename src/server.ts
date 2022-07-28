import express from "express";
import { initializeDirectories } from "./initializeDirectories";
import { registryService } from "./services/registry";

void main();

async function main() {
  await initializeDirectories();

  const app = express();

  app.use(registryService);

  app.get("/health", (_req, res) => {
    res.status(200).send("Ok");
  });

  console.log("Listening for requests...");
  app.listen(8080);
}
