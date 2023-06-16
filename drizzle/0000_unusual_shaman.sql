CREATE TABLE IF NOT EXISTS "entries" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"region" text NOT NULL,
	"text" text NOT NULL,
	"username" text NOT NULL
);
