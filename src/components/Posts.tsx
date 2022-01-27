import Link from "next/link";
import useSWR from "swr";
import {fetcher} from "../../utils/fetcher";

export default function Posts() {
	const {error, data} = useSWR(`/api/posts`, fetcher);

	return (
		<>
			<div
				id="posts"
				className="flex flex-row items-center justify-center bg-wave1 bg-cover bg-no-repeat w-full bg-white h-[500px] text-center xl:text-left"
			>
				<div>
					<h1 className="relative text-2xl md:text-4xl font-title mb-6 uppercase opacity-75 before:bg-[#fbad04de] before:z-[-1] before:w-[28vw] xl:before:w-[315px] before:h-[13px] before:absolute before:bottom-0 before:left-[40%] xl:before:left-[40px]">
						Letzte Beiträge
					</h1>
					<div className="w-full xl:inline-grid grid-cols-3 gap-x-6">
						{data ? (
							data.map((post: any) => (
								<div
									className="w-full pl-16 pr-16 md:p-0 xl:w-[20vw] mb-5 md:m-0"
									key={post.head.slug}
								>
									<p className="text-sm text-gray-500">{post.head.date}</p>
									<Link href={`/post/${post.slug}`}>
										<a>
											<h1 className="text-xl uppercase font-bold text-ggorange">
												{post.head.title}
											</h1>
										</a>
									</Link>
									<p
										className="text-sm"
										dangerouslySetInnerHTML={{
											__html: `${post.body.substr(0, 200)} ${post.body.length > 200 ? "..." : ""}`,
										}}
									/>
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
