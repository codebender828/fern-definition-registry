import { PrismaClient } from "@prisma/client";

export const FDR_PRISMA_CLIENT = new PrismaClient({
  log: ["query", "info", "warn", "error"],
});
