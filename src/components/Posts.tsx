import Link from "next/link";

export default function Posts({posts}: any) {
	return (
		<>
			<div id="posts" className="bg-white text-center xl:text-left">
				<div className="py-5 xl:px-32">
					<h1 className="relative text-3xl md:text-4xl font-title mb-6 uppercase opacity-75">
						Letzte Beiträge
					</h1>
					<div className="w-full md:inline-grid grid-cols-3 md:gap-x-6 px-20 xl:px-0">
						{posts.map((post: any) => (
							<Link href={`/post/${post.slug}`} key={post.slug}>
								<a key={post.slug}>
									<div className="w-full xl:w-72 mb-5 md:m-0 border border-[#00000020] rounded-lg shadow transition-transform hover:scale-[102%]">
										<div
											className="h-24 md:h-32 bg-center bg-cover w-full rounded-t"
											style={{backgroundImage: `url("${post.head.thumbnailUrl}")`}}
										/>
										<div className="px-16 xl:px-5 pt-3 pb-6">
											<p className="text-sm text-gray-500">{post.head.date}</p>
											<h1 className="text-xl uppercase font-bold text-ggorange">
												{post.head.title}
											</h1>
											<p
												className="text-sm w-44 md:w-full truncate"
												dangerouslySetInnerHTML={{
													__html: post.body,
												}}
											/>
										</div>
									</div>
								</a>
							</Link>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
