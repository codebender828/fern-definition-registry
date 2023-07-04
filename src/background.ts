import * as cron from "node-cron";
import { type FdrApplication } from "./app";

export function registerBackgroundTasks(app: FdrApplication) {
    // Runs every hour
    cron.schedule("0 * * * *", async () => {
        try {
            const deletedIndexCount = await app.services.cleanup.deleteOldIndices({
                limit: 100,
                olderThanDays: 2,
            });

            console.log(`Successfully deleted ${deletedIndexCount} old indices.`);
        } catch (e) {
            console.log(`Error while deleting old indices.`, e);
        }
    });
}
