import Head from "next/head";

export default function Home({posts, gitHash}: any) {
	return (
		<>
			<Head>
				<title>Team - Goethe Gymnasium</title>
			</Head>
			<h1>Team</h1>
		</>
	);
}
