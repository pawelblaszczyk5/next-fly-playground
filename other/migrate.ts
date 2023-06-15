import SqliteDatabase from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";

// TODO: It's not working locally
const sqlite = new SqliteDatabase(process.env["DATABASE_PATH"]!);

const db = drizzle(sqlite);

migrate(db, { migrationsFolder: "./drizzle" });
