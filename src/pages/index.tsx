import Intro from "../components/Intro";
import Head from "next/head";
import Posts from "../components/Posts";
import Disclaimer from "../components/Disclaimer";
import History from "../components/History";
import {prisma} from "../lib/prisma";

export default function Home({posts}: any) {
	return (
		<>
			<Head>
				<title>Home • Goethe Gymnasium</title>
			</Head>
			<Intro />
			<History />
			<Posts posts={posts} />
			<Disclaimer />
		</>
	);
}

export async function getServerSideProps() {
	const posts = await prisma.post.findMany({take: 3, orderBy: {id: "desc"}});
	return {
		props: {
			posts,
		},
	};
}
