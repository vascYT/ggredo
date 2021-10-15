import "tailwindcss/tailwind.css";
import React from "react";
import {AppProps} from "next/app";
import Navbar from "../components/Navbar";

export default function App({Component, pageProps}: AppProps) {
	return (
		<>
			<Navbar />
			<Component {...pageProps} />
		</>
	);
}
