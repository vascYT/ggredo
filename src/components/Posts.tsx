import Link from "next/link";
import {useEffect, useState} from "react";

export default function Posts({posts}: any) {
	return (
		<>
			<div
				id="posts"
				className="flex flex-row items-center justify-center bg-wave1 bg-cover bg-no-repeat w-full bg-white h-[500px] md:h-[350px] text-center xl:text-left"
			>
				<div>
					<h1 className="relative text-3xl md:text-4xl font-title mb-6 uppercase opacity-75">
						Letzte Beiträge
					</h1>
					<div className="w-full md:inline-grid grid-cols-3 md:gap-x-6 md:px-20">
						{posts.map((post: any) => (
							<div
								className="w-full pl-16 pr-16 md:p-0 xl:w-[20vw] mb-5 md:m-0"
								key={post.head.slug}
							>
								<p className="text-sm text-gray-500">{post.head.date}</p>
								<Link href={`/post/${post.slug}`}>
									<a>
										<h1 className="transition ease-in-out text-xl uppercase font-bold text-ggorange hover:text-yellow-600">
											{post.head.title}
										</h1>
									</a>
								</Link>
								<p
									className="text-sm w-44 md:w-full truncate"
									dangerouslySetInnerHTML={{
										__html: post.body,
									}}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
