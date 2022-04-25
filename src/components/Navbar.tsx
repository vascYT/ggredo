import {PropsWithChildren, useEffect, useState} from "react";
import {FaSearch, FaBars} from "react-icons/fa";
import Link from "next/link";
import {AnimatePresence, motion} from "framer-motion";
import {Popover, Transition} from "@headlessui/react";
import {RiArrowDropDownLine} from "react-icons/ri";

function NavbarItem(
	props: PropsWithChildren<{
		name: string;
		items: Array<{name: string; href: string; imageUrl: string}>;
	}>
) {
	return (
		<Popover>
			{({open, close}) => (
				<>
					<Popover.Button className="font-text inline-flex items-center">
						{props.name}{" "}
						<RiArrowDropDownLine className={`transition-all h-6 w-6 ${open ? "rotate-180" : ""}`} />
					</Popover.Button>

					<Transition
						enter="transition ease-out duration-200"
						enterFrom="opacity-0 translate-y-1"
						enterTo="opacity-100 translate-y-0"
						leave="transition ease-in duration-150"
						leaveFrom="opacity-100 translate-y-0"
						leaveTo="opacity-0 translate-y-1"
					>
						<Popover.Panel className="absolute w-[150px] z-10 mt-3">
							<div className="bg-white border border-[#00000020] p-2 rounded-lg shadow">
								{props.items.map(item => (
									<Link href={item.href} key={item.name}>
										<a onClick={close as any}>
											<div className="px-4 py-2 text-black font-normal text-center rounded-lg hover:bg-[#00000020]">
												{item.name}
											</div>
										</a>
									</Link>
								))}
							</div>
						</Popover.Panel>
					</Transition>
				</>
			)}
		</Popover>
	);
}

export default function Navbar() {
	const [styles, setStyles] = useState("bg-none border-[#00000000]");
	// const [search, setSearch] = useState("");
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
			<section className="sticky top-0 z-30 mx-auto bg-transparent">
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
								<NavbarItem
									name="Schulbetrieb"
									items={[
										{name: "Team", href: "/team", imageUrl: "/team.jpg"},
										{name: "Fächer", href: "/subjects", imageUrl: "/team.jpg"},
										{name: "Aufnahme", href: "/admission", imageUrl: "/team.jpg"},
										{name: "Formulare", href: "/forms", imageUrl: "/team.jpg"},
									]}
								/>
							</li>
							<li>
								<NavbarItem
									name="Termine & Aktivitäten"
									items={[
										{name: "Schuljahr", href: "/year", imageUrl: "/team.jpg"},
										{name: "Projekte", href: "/projects", imageUrl: "/team.jpg"},
										{name: "Tag der offenen Tür", href: "/tdot", imageUrl: "/team.jpg"},
									]}
								/>
							</li>
						</ul>
						<div className="hidden xl:flex space-x-5 items-center">
							<a className="flex items-center hover:text-gray-200" href="#">
								<FaSearch />
							</a>
						</div>
					</div>
					<button className="navbar-burger self-center mr-5 xl:hidden hover:cursor-pointer">
						<FaSearch />
					</button>
					<button
						onClick={toggleMobileItems}
						className="navbar-burger self-center mr-5 md:hidden hover:cursor-pointer"
					>
						<FaBars />
					</button>
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
