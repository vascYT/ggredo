import "tailwindcss/tailwind.css";
import "../css/index.css";
import React from "react";
import {AppProps} from "next/app";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Footer from "../components/Footer";

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

			<div className="h-screen bg-white">
				<Navbar />
				<Component {...pageProps} />
				<Footer />
			</div>
		</>
	);
}
