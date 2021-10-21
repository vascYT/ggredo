import "tailwindcss/tailwind.css";
import "../css/index.css";
import React from "react";
import {AppProps} from "next/app";
import Navbar from "../components/Navbar";
import Head from "next/head";

export default function App({Component, pageProps}: AppProps) {
	return (
		<>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
				<link
					href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<Navbar />
			<div className="h-screen bg-white">
				{/* Fill blank space with white color as default */}
				<Component {...pageProps} />
			</div>
		</>
	);
}
