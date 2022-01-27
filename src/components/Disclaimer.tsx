export default function Disclaimer() {
	const commitId = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA?.slice(0, 7);

	return (
		<>
			<div className="fixed bottom-1 left-0 w-full">
				<p className="uppercase text-[#ffffff50] text-md ml-2">
					Prototype {commitId && `(${commitId})`}
				</p>
			</div>
		</>
	);
}
