import Link from "next/link";
import {useEffect, useState} from "react";

export default function Posts({posts}: any) {
	return (
		<>
			<div
				id="posts"
				className="flex flex-row items-center justify-center bg-wave1 bg-cover bg-no-repeat bg-white h-[1000px] md:h-[500px] text-center xl:text-left"
			>
				<div>
					<h1 className="relative text-3xl md:text-4xl font-title mb-6 uppercase opacity-75">
						Letzte Beiträge
					</h1>
					<div className="w-full md:inline-grid grid-cols-3 md:gap-x-6 md:px-20">
						{posts.map((post: any) => (
							<Link href={`/post/${post.slug}`} key={post.head.slug}>
								<a
									className="w-full xl:w-[20vw] mb-5 md:m-0 bg-[#00000010] border border-[#00000020] rounded-lg shadow transition-transform hover:scale-[102%]"
									key={post.slug}
								>
									<div
										className="h-24 md:h-32 bg-center bg-cover w-full rounded-t"
										style={{backgroundImage: `url("${post.head.thumbnailUrl}")`}}
									/>
									<div className="pl-16 pr-16 pt-3 pb-6">
										<p className="text-sm text-gray-500">{post.head.date}</p>
										<h1 className="text-xl uppercase font-bold text-ggorange">{post.head.title}</h1>
										<p
											className="text-sm w-44 md:w-full truncate"
											dangerouslySetInnerHTML={{
												__html: post.body,
											}}
										/>
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
