export default function History() {
	return (
		<>
			<div id="history" className="bg-white text-center xl:text-left">
				<div>
					<img src="/wave1.svg" className="w-full" />
					<div className="py-5 px-32">
						<h1 className="relative text-3xl md:text-4xl font-title mb-6 uppercase opacity-75">
							Unsere Geschichte
						</h1>
						<div className="flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-3">
							<div className="w-44 h-44 bg-red-400" />
							<div className="w-44 h-44 bg-red-400" />
							<div className="w-44 h-44 bg-red-400" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
