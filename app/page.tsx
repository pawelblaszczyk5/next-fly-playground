export const dynamic = "force-dynamic";

const HomePage = () => {
	console.log("DB_PATH", process.env["DATABASE_PATH"]);
	console.log("REGION", process.env["FLY_REGION"]);

	return (
		<main>
			<h1>Hello world from fly.io</h1>
		</main>
	);
};

export default HomePage;
