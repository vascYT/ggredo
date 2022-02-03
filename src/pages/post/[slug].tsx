import Head from "next/head";
import {getAllPostIds, getPost} from "../../../lib/posts";

export default function Post({post}: any) {
	return (
		<>
			<Head>
				<title>{post.head.title} - Goethe Gymnasium</title>
			</Head>
			<div className="bg-white w-full">
				<div className="bg-wave2 bg-cover bg-no-repeat w-full h-[250px] bg-center">
					<div className="flex flex-col justify-center h-[80%] pl-[25vw] pr-[25vw]">
						{/* TODO: Center title on mobile */}
						<p className="text-base text-gray-200">{post.head.date}</p>
						<h1 className="text-white font-title text-7xl font-bold uppercase">
							{post.head.title}
						</h1>
					</div>
				</div>
				<div className="pl-[15%] pr-[15%]" dangerouslySetInnerHTML={{__html: post.body}} />
			</div>
		</>
	);
}

export async function getStaticPaths() {
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({params}: any) {
	const post = getPost(params.slug);
	return {
		props: {
			post,
		},
	};
}
