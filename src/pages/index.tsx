import Intro from "../components/Intro";
import Head from "next/head";
import Posts from "../components/Posts";
import Disclaimer from "../components/Disclaimer";

export default function Home() {
	return (
		<>
			<Head>
				<title>Home - Goethe Gymnasium</title>
			</Head>
			<Intro />
			<Posts />
			<Disclaimer />
		</>
	);
}
