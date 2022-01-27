import {useEffect, useState} from "react";
import Dropdown from "./Dropdown";
import {FaSearch, FaBars} from "react-icons/fa";
import Link from "next/link";
import {AnimatePresence, motion} from "framer-motion";

export default function Navbar() {
	const [styles, setStyles] = useState("bg-none border-[#00000000]");
	const [search, setSearch] = useState("");
	const [showMobileItems, setShowMobileItems] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.pageYOffset > 0) {
				setStyles("bg-[#00000050] backdrop-blur border-[#00000025]");
			} else {
				setStyles("bg-none border-[#00000000]");
			}
		});
	}, []);

	const toggleMobileItems = () => {
		setShowMobileItems(!showMobileItems);
	};

	return (
		<>
			<section className="sticky top-0 z-30 mx-auto bg-ggorange">
				<nav
					className={`transition-colors duration-300 flex justify-between w-full h-[9vh] text-white border-b-[1px] ${styles}`}
				>
					<div className="px-5 xl:px-12 py-6 flex w-full items-center">
						<Link href="/">
							<a className="text-3xl font-bold font-heading">
								{/* <img className="h-[5vh]" src="/logo-scuffed.png" alt="goethe logo" /> */}
								<p className="text-5xl">GG</p>
							</a>
						</Link>
						<ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
							<li>
								<Dropdown name="Test1" items={[{name: "test1", href: "#test1"}]} />
							</li>
							<li>
								<Dropdown name="Test2" items={[{name: "test2", href: "#test2"}]} />
							</li>
							<li>
								<Dropdown name="Test3" items={[{name: "test3", href: "#test3"}]} />
							</li>
						</ul>
						<div className="hidden xl:flex space-x-5 items-center">
							<a className="flex items-center hover:text-gray-200" href="#">
								<FaSearch />
							</a>
						</div>
					</div>
					<FaSearch className="navbar-burger self-center mr-5 xl:hidden hover:cursor-pointer" />
					<FaBars
						onClick={toggleMobileItems}
						className="navbar-burger self-center mr-5 md:hidden hover:cursor-pointer"
					/>
				</nav>
			</section>
			<AnimatePresence>
				{showMobileItems && (
					<>
						<motion.div
							key="mobile-items"
							initial={{x: 310}}
							animate={{x: 0}}
							transition={{duration: 0.4, ease: "backInOut"}}
							exit={{x: 310}}
							className="fixed bg-white w-[300px] h-full top-0 right-0 z-50 overflow-hidden rounded-md"
						>
							<button onClick={toggleMobileItems}>Close</button>
							<p>WIP</p>
						</motion.div>
						<motion.div /* Dimmed Background */
							key="dimmed-bg"
							initial={{opacity: 0}}
							animate={{opacity: 0.5}}
							transition={{duration: 0.4}}
							exit={{opacity: 0}}
							className="fixed top-0 left-0 h-full w-full bg-black z-40"
						></motion.div>
					</>
				)}
			</AnimatePresence>
		</>
	);
}
