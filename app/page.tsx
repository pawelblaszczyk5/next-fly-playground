import { db, entries } from "~/lib/db";

export const dynamic = "force-dynamic";

const HomePage = async () => {
	const result = await db().select().from(entries);

	return (
		<main>
			<h1>Hello world from fly.io</h1>
			<h2>Current region: {process.env["FLY_REGION"] ?? "Local"}</h2>
			{result.map(result => (
				<li className="flex gap-4" key={result.id}>
					<span>ID: {result.id}</span>
					<span>Username: {result.username}</span>
					<span>Text: {result.text}</span>
					<span>Region: {result.region}</span>
				</li>
			))}
		</main>
	);
};

export default HomePage;
