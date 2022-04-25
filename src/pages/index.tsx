import Intro from "../components/Intro";
import Head from "next/head";
import Posts from "../components/Posts";
import Disclaimer from "../components/Disclaimer";
import {getPosts} from "../lib/posts";
import History from "../components/History";

export default function Home({posts, gitHash}: any) {
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

export async function getStaticProps() {
	const posts = getPosts();
	return {
		props: {
			posts,
		},
	};
}
