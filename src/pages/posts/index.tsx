import type {Post} from "@prisma/client";
import Link from "next/link";
import {PropsWithChildren} from "react";
import PageWrapper from "../../components/PageWrapper";
import {prisma} from "../../lib/prisma";

interface PostCardProps {
	id: number;
	title: string;
	category: string;
}
function PostCard(props: PropsWithChildren<PostCardProps>) {
	return (
		<div className="bg-gray-200 w-full md:w-2/3 rounded-lg p-5 shadow-md">
			<p className="text-sm opacity-90">{props.category}</p>
			<Link href={`/posts/${props.id}`}>
				<a>
					<h1 className="font-title text-2xl font-semibold">{props.title}</h1>
				</a>
			</Link>
		</div>
	);
}

export default function Posts({posts}: {posts: Post[]}) {
	return (
		<>
			<PageWrapper title="Beiträge">
				<div className="flex flex-col space-y-3 items-center justify-center">
					{posts.map(post => (
						<PostCard key={post.id} id={post.id} title={post.title} category={post.category} />
					))}
				</div>
			</PageWrapper>
		</>
	);
}

export async function getServerSideProps({params, query}: any) {
	const skip = query.skip ? Number.parseInt(query.skip) : 0;

	const posts = await prisma.post.findMany({
		// take: 10,
		orderBy: {
			id: "desc",
		},
		skip,
	});

	return {
		props: {
			posts,
		},
	};
}
