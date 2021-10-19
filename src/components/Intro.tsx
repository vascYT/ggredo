import dynamic from "next/dynamic";

const ModelWithNoSSR = dynamic(() => import("./Model"), {ssr: false});

export default function Intro() {
	return (
		<>
			<div className="flex flex-col items-center md:items-start md:flex-row h-[90vh] w-full bg-[#fbac04] text-white">
				<div className="w-full block md:hidden">
					<div className="mt-[15vh]">
						<ModelWithNoSSR />
					</div>
				</div>
				<div className="md:w-[50%] font-intro h-full w-full">
					<div className="flex flex-col ml-[2vw] items-center justify-center h-full">
						<div className="w-full">
							<h1 className="text-5xl md:text-[5vw] leading-none font-bold">
								<span>Goethe</span>
								<br />
								<span className="ml-[7vw]">Gymnasium</span>
							</h1>
						</div>
						<div className="w-full">
							<p className="text-2xl md:text-[1.75vw] opacity-60 text-right">FÜR DEINE ZUKUNFT</p>
						</div>
					</div>
				</div>
				<div className="hidden md:flex flex-col mr-[2vw] items-center justify-center h-full w-full">
					<ModelWithNoSSR />
				</div>
			</div>
		</>
	);
}
