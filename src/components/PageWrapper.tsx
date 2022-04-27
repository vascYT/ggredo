import {PropsWithChildren} from "react";
import Head from "next/head";

export default function PageWrapper(props: PropsWithChildren<{title: string; desc?: string}>) {
	return (
		<>
			<Head>
				<title>{props.title} • Goethe Gymnasium</title>
			</Head>
			<div className="bg-white w-full min-h-screen">
				<div className="bg-wave2 bg-cover bg-no-repeat bg-center w-full h-[190px]">
					<div className="flex flex-col justify-center items-center h-[70%]">
						<h1 className="font-title text-7xl text-white font-bold uppercase">{props.title}</h1>
						{props.desc && <p className="text-base text-white text-opacity-95">{props.desc}</p>}
					</div>
				</div>
				<div className="pl-[15%] pr-[15%]">{props.children}</div>
			</div>
		</>
	);
}
