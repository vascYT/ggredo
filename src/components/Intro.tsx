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
				<div className="w-full md:w-[50%]">
					<div className="flex items-center justify-center">
						<h1 className="text-5xl md:text-[5vw] leading-none font-bold font-intro mt-[5vh] md:mt-[20vh]">
							<span>Goethe</span>
							<br />
							<span className="ml-[7vw]">Gymnasium</span>
						</h1>
					</div>
				</div>
				<div className="w-[50%] hidden md:block">
					<div className="mt-[15vh]">
						<ModelWithNoSSR />
					</div>
				</div>
			</div>
		</>
	);
}
