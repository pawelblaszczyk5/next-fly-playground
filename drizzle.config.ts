import type { Config } from "drizzle-kit";

export default {
	out: "./drizzle",
	schema: "./lib/db.ts",
} satisfies Config;
