import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";

// Make a footer component
export default function Footer() {
	return (
		<>
			<img className="w-full" src="/wave3.svg" />
			<footer className="bg-gray-900">
				<div className="container mx-auto px-10 pb-8">
					<div className="flex flex-col md:flex-row">
						<div className="md:mr-8 w-full md:w-[30%]">
							<h1 className="text-2xl font-title font-bold text-white mb-3">Goethe-Gymnasium</h1>
							<div className="inline-flex space-x-3">
								<a
									href="https://twitter.com"
									className="text-gray-400 hover:text-gray-200 text-2xl"
								>
									<FaTwitter />
								</a>
								<a
									href="https://facebook.com"
									className="text-gray-400 hover:text-gray-200 text-2xl"
								>
									<FaFacebook />
								</a>
								<a
									href="https://instagram.com"
									className="text-gray-400 hover:text-gray-200 text-2xl"
								>
									<FaInstagram />
								</a>
							</div>
						</div>
						<div className="flex flex-col md:flex-row items-center justify-center mt-5 md:mt-0 md:text-center text-white w-[70%]">
							<span className="w-full text-gray-400">
								<a href="/kontakt" className="hover:text-gray-200">
									Kontakt
								</a>
							</span>
							<span className="w-full text-gray-400">
								<a href="/impressum" className="hover:text-gray-200">
									Impressum
								</a>
							</span>
							<span className="w-full text-gray-400">
								<a href="/datenschutz" className="hover:text-gray-200">
									Datenschutzerklärung
								</a>
							</span>
							<span className="w-full text-gray-400">
								<a href="/partner" className="hover:text-gray-200">
									Partner
								</a>
							</span>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
