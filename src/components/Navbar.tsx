import {useEffect, useState} from "react";
import Dropdown from "./Dropdown";

export default function Navbar() {
	const [styles, setStyles] = useState("bg-[#fbac04] text-white");

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.pageYOffset > 0) {
				setStyles("bg-white text-black");
			} else {
				setStyles("bg-[#fbac04] text-white");
			}
		});
	}, []);

	return (
		<>
			<section className="sticky top-0 z-50 mx-auto">
				<nav className={`flex justify-between w-full h-[10vh] transition ${styles}`}>
					<div className="px-5 xl:px-12 py-6 flex w-full items-center">
						<a className="text-3xl font-bold font-heading" href="/">
							{/* <img className="h-[5vh]" src="/logo-scuffed.png" alt="goethe logo" /> */}
							<p className="text-5xl">GG</p>
						</a>
						<ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
							<li>
								<Dropdown name="Test1" items={[{name: "test1", href: "#test1"}]} />
							</li>
							<li>
								<a className="hover:text-gray-200" href="#">
									<Dropdown name="Test2" items={[{name: "test2", href: "#test2"}]} />
								</a>
							</li>
							<li>
								<Dropdown name="Test3" items={[{name: "test3", href: "#test3"}]} />
							</li>
						</ul>
						<div className="hidden xl:flex space-x-5 items-center">
							<a className="flex items-center hover:text-gray-200" href="#">
								<img src="/icons/search.svg" />
							</a>
						</div>
					</div>
					<a className="navbar-burger self-center mr-6 xl:hidden" href="#">
						<img src="/icons/search.svg" />
					</a>
					<a className="navbar-burger self-center mr-12 xl:hidden" href="#">
						<img src="/icons/menu.svg" />
					</a>
				</nav>
			</section>
		</>
	);
}
