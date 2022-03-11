import {getAllPostIds, getPost} from "../../../lib/posts";
import PageWrapper from "../../components/PageWrapper";

export default function Post({post}: any) {
	return (
		<>
			<div className="bg-white w-full min-h-screen">
				<PageWrapper title={post.head.title} desc={`Posted at ${post.head.date}`}>
					<div dangerouslySetInnerHTML={{__html: post.body}} />
				</PageWrapper>
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
