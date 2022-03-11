import "tailwindcss/tailwind.css";
import "../css/index.css";
import React from "react";
import {AppProps} from "next/app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EasterEgg from "../components/EasterEgg";

export default function App({Component, pageProps}: AppProps) {
	return (
		<>
			<EasterEgg />
			<Navbar />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}
