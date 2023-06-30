import { PrismaClient } from "@prisma/client";
import type { FernRegistry } from "./generated";

export interface DatabaseUtils {
    getApiDefinition(id: string): Promise<FernRegistry.api.v1.db.DbApiDefinition | null>;
}

export class DatabaseUtilsImpl implements DatabaseUtils {
    public readonly prisma: PrismaClient;

    public constructor() {
        this.prisma = new PrismaClient({
            log: ["info", "warn", "error"],
        });
    }

    public async getApiDefinition(id: string) {
        const record = await this.prisma.apiDefinitionsV2.findFirst({
            where: {
                apiDefinitionId: id,
            },
        });
        if (!record) return null;
        try {
            return JSON.parse(record.definition.toString()) as FernRegistry.api.v1.db.DbApiDefinition;
        } catch {
            return null;
        }
    }
}
