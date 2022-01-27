import Link from "next/link";
import {useEffect, useState} from "react";

export default function Posts({posts}: any) {
	const [showBody, setShowBody] = useState(true);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768 && !showBody) {
				setShowBody(true);
			} else if (window.innerWidth < 768 && showBody) {
				setShowBody(false);
			}
		};

		window.addEventListener("resize", handleResize);
	});

	return (
		<>
			<div
				id="posts"
				className="flex flex-row items-center justify-center bg-wave1 bg-cover bg-no-repeat w-full bg-white h-[400px] md:h-[500px] text-center xl:text-left"
			>
				<div>
					<h1 className="relative text-3xl md:text-4xl font-title mb-6 uppercase opacity-75">
						Letzte Beiträge
					</h1>
					<div className="w-full md:inline-grid grid-cols-3 md:gap-x-6 px-20">
						{posts.map((post: any) => (
							<div
								className="w-full pl-16 pr-16 md:p-0 xl:w-[20vw] mb-5 md:m-0"
								key={post.head.slug}
							>
								<p className="text-sm text-gray-500">{post.head.date}</p>
								<Link href={`/post/${post.slug}`}>
									<a>
										<h1 className="text-xl uppercase font-bold text-ggorange">{post.head.title}</h1>
									</a>
								</Link>
								{showBody && (
									<p
										className="text-sm"
										dangerouslySetInnerHTML={{
											__html: `${post.body.substr(0, 200)} ${post.body.length > 200 ? "..." : ""}`,
										}}
									/>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
