import {useEffect, useState} from "react";
import {supabase} from "../utils/supaclient";
import Link from "next/link";

interface Post {
	id: number;
	title: string;
	body: string;
	created_at: Date;
}
export default function Posts() {
	const [posts, setPosts] = useState<Post[] | null>();

	useEffect(() => {
		const getPosts = async () => {
			let {data: response, error} = await supabase.from("posts").select("*").limit(3);

			if (error) console.log("An error occoured while fetching the posts");
			else setPosts(response);
		};
		getPosts();
	}, []);

	return (
		<>
			<div
				id="posts"
				className="flex flex-row items-center justify-center bg-wave1 bg-cover bg-no-repeat w-full h-[50vh]"
			>
				<div>
					<h1 className="text-4xl font-title mb-6 uppercase opacity-75">Letzte Beiträge</h1>
					<div className="w-full md:inline-grid grid-cols-3 gap-x-4">
						{posts ? (
							posts.map(post => (
								<div className="w-full md:w-[20vw] mb-5" key={post.id}>
									<p className="text-sm text-gray-500">
										{new Date(post.created_at).toLocaleString("default", {
											day: "numeric",
											month: "long",
											year: "numeric",
											hour: "numeric",
											minute: "numeric",
										})}
									</p>
									<Link href={`/post/${post.id}`}>
										<a>
											<h1 className="text-xl uppercase font-bold text-[#fbac04]">{post.title}</h1>
										</a>
									</Link>
									<p>{post.body}</p>
								</div>
							))
						) : (
							<h1>Loading...</h1>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
