import type {Post} from "@prisma/client";
import Link from "next/link";
import {IoIosArrowForward} from "react-icons/io";

export default function Posts({posts}: any) {
	return (
		<>
			<div id="posts" className="bg-white text-center xl:text-left">
				<div className="py-5 xl:px-32">
					<h1 className="relative text-3xl md:text-4xl font-title mb-6 uppercase opacity-75">
						Letzte Beiträge
					</h1>
					<div className="w-full flex justify-center">
						<div className="md:inline-grid grid-cols-3 md:gap-x-3 px-20 xl:px-10">
							{posts.map((post: Post) => (
								<Link href={`/posts/${post.id}`} key={post.id}>
									<a key={post.id}>
										<div className="w-full xl:w-72 mb-5 md:m-0 border border-[#00000020] rounded-lg shadow transition-transform hover:scale-[102%]">
											{/* <div
											className="h-24 md:h-32 bg-center bg-cover w-full rounded-t"
											style={{backgroundImage: `url("${post.head.thumbnailUrl}")`}}
										/> */}
											<div className="px-16 xl:px-5 pt-3 pb-6">
												<p className="text-sm text-gray-500">{post.category}</p>
												<h1 className="text-xl font-bold text-ggorange">{post.title}</h1>
											</div>
										</div>
									</a>
								</Link>
							))}
						</div>
					</div>
					<div className="flex justify-center mt-4">
						<Link href="/posts">
							<a className="text-ggorange">
								Mehr Beiträge <IoIosArrowForward className="inline-flex h-[15px]" />
							</a>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
