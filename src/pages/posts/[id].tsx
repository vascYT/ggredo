import type {Post} from "@prisma/client";
import PageWrapper from "../../components/PageWrapper";
import {prisma} from "../../lib/prisma";
// @ts-ignore
import absolutify from "absolutify";

export default function Post({post}: {post: Post}) {
	return (
		<>
			<div className="bg-white w-full min-h-screen">
				<PageWrapper title={post.title} desc={post.category}>
					<div
						dangerouslySetInnerHTML={{
							__html: post.body,
						}}
					/>
				</PageWrapper>
			</div>
		</>
	);
}

export async function getServerSideProps({params}: any) {
	const post = await prisma.post.findFirst({
		where: {id: Number.parseInt(params.id ? params.id : "1")},
	});
	return {
		props: {
			post: {
				...post,
				body: absolutify(post?.body, "https://www.astgasse.net"),
			},
		},
	};
}
