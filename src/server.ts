import { PrismaClient } from "@prisma/client";
import express from "express";
import { register } from "./generated";
import { initializeDirectories } from "./initializeDirectories";
import { getRegistryService } from "./services/registry";

const PORT = 8080;

void main();

async function main() {
	try {
		await initializeDirectories();
		console.log("Initialized directories.");

		const app = express();
		app.get("/health", (_req, res) => {
			res.sendStatus(200);
		});

		const prisma = new PrismaClient({
			log: ["info", "warn", "error"],
		});

		register(app, {
			registry: getRegistryService(prisma),
		});

		console.log(`Listening for requests on port ${PORT}`);
		app.listen(PORT);
	} catch (e) {
		console.error("Server failed to start...", e);
	}
}
