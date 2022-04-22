import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
	return (
		<>
			<footer className="bg-gray-900">
				<img className="w-full" src="/wave3.svg" alt="" />
				<div className="container mx-auto px-10 pb-8 bg-gray-900">
					<div className="flex flex-col md:flex-row">
						<div className="md:mr-8 w-full md:w-[30%]">
							<h1 className="text-2xl font-title font-bold text-white mb-3">Goethe-Gymnasium</h1>
							<div className="inline-flex space-x-3">
								<a
									href="https://twitter.com"
									className="transition text-gray-400 hover:text-gray-200 text-2xl"
								>
									<FaTwitter />
								</a>
								<a
									href="https://facebook.com"
									className="transition text-gray-400 hover:text-gray-200 text-2xl"
								>
									<FaFacebook />
								</a>
								<a
									href="https://instagram.com"
									className="transition text-gray-400 hover:text-gray-200 text-2xl"
								>
									<FaInstagram />
								</a>
							</div>
						</div>
						<div className="flex flex-col md:flex-row items-center justify-center mt-5 md:mt-0 md:text-center text-white w-[70%]">
							<span className="w-full">
								<Link href="/kontakt">
									<a className="transition text-gray-400 hover:text-gray-200">Kontakt</a>
								</Link>
							</span>
							<span className="w-full">
								<Link href="/impressum">
									<a className="transition text-gray-400 hover:text-gray-200">Impressum</a>
								</Link>
							</span>
							<span className="w-full">
								<Link href="/datenschutz">
									<a className="transition text-gray-400 hover:text-gray-200">Datenschutz</a>
								</Link>
							</span>
							<span className="w-full">
								<Link href="/partner">
									<a className="transition text-gray-400 hover:text-gray-200">Partner</a>
								</Link>
							</span>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
