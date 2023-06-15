import SqliteDatabase from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const entries = sqliteTable("entries", {
	id: text("id").primaryKey(),
	region: text("region").notNull(),
	text: text("text").notNull(),
	username: text("username").notNull(),
});

const sqlite = new SqliteDatabase(process.env["DATABASE_PATH"]!);

export const db = drizzle(sqlite);
