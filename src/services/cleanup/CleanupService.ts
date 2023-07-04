import type { FdrApplication } from "../../app";

interface DeleteOldIndicesParams {
    olderThanDays?: number;
    limit?: number;
}

export interface CleanupService {
    deleteOldIndices(params: DeleteOldIndicesParams): Promise<number>;
}

export class CleanupServiceImpl implements CleanupService {
    private get db() {
        return this.app.services.db;
    }

    private get algolia() {
        return this.app.services.algolia;
    }

    constructor(private readonly app: FdrApplication) {}

    public async deleteOldIndices(params: DeleteOldIndicesParams) {
        const { limit, olderThanDays = 2 } = params;
        const records = await this.db.prisma.overwrittenAlgoliaIndex.findMany({
            take: limit,
            where: {
                overwrittenTime: {
                    lte: new Date(Date.now() - olderThanDays * 24 * 60 * 60 * 1_000),
                },
            },
        });
        await Promise.all(
            records.map(async ({ indexId }) => {
                await this.algolia.deleteIndex(indexId);
                await this.db.prisma.overwrittenAlgoliaIndex.delete({
                    where: { indexId },
                });
            })
        );
        return records.length;
    }
}
