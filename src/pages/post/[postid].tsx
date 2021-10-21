import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {supabase} from "../../utils/supaclient";

export default function Post() {
	const router = useRouter();
	const {postid} = router.query;

	const [post, setPost] = useState<Post>();

	useEffect(() => {
		const getPosts = async () => {
			if (postid) {
				let {data: response, error} = await supabase.from("posts").select("*").eq("id", postid);

				if (error || !response) console.log("An error occoured while fetching the posts");
				else setPost(response[0]);
			}
		};
		getPosts();
	}, [postid]); // Rerun on postid change

	if (!post) {
		return "";
	}

	return (
		<div className="bg-white w-full">
			<div className="bg-wave2 bg-cover bg-no-repeat w-full h-[250px]">
				<div className="flex flex-col justify-center h-[80%] pl-[25vw] pr-[25vw]">
					<p className="text-base text-gray-200">
						{new Date(post.created_at).toLocaleString("default", {
							day: "numeric",
							month: "long",
							year: "numeric",
							hour: "numeric",
							minute: "numeric",
						})}
					</p>
					<h1 className="text-white font-title text-7xl font-bold uppercase">{post.title}</h1>
				</div>
			</div>
			<div className="pl-[25vw] pr-[25vw]">
				<span>{post.body}</span>
			</div>
		</div>
	);
}
