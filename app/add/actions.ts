"use server";

import { redirect } from "next/navigation";

import { db, entries } from "~/lib/db";

export const addEntry = async (data: FormData) => {
	const text = data.get("text") as string;
	const username = data.get("username") as string;

	await db()
		.insert(entries)
		.values({
			region: process.env["FLY_REGION"] ?? "loc",
			text,
			username,
		});

	redirect("/");
};
