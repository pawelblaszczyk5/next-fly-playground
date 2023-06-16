import type { PostgresJsDatabase } from "drizzle-orm/postgres-js";

import { pgTable, text, uuid } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

export const entries = pgTable("entries", {
	id: uuid("id").defaultRandom().primaryKey(),
	region: text("region").notNull(),
	text: text("text").notNull(),
	username: text("username").notNull(),
});

let localDb: PostgresJsDatabase | undefined;

export const db = () => {
	if (localDb) return localDb;
	const queryClient = postgres(process.env["DATABASE_URL"]!);

	localDb = drizzle(queryClient);

	return localDb;
};
