import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export const GET = () => {
	console.log("health check");

	return NextResponse.json(null, { status: 200 });
};
