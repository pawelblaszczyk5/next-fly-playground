"use server";

import { createId } from "@paralleldrive/cuid2";
import { redirect } from "next/navigation";

import { db, entries } from "~/lib/db";

export const addEntry = async (data: FormData) => {
	const text = data.get("text") as string;
	const username = data.get("username") as string;

	db()
		.insert(entries)
		.values({
			id: createId(),
			region: process.env["FLY_REGION"] ?? "loc",
			text,
			username,
		})
		.run();

	redirect("/");
};
