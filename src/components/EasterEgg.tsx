import {AnimatePresence, motion} from "framer-motion";
import {useState} from "react";
import {useKonami} from "react-konami-code";
import {FaTimes} from "react-icons/fa";

export default function EasterEgg() {
	const [isVisible, setIsVisible] = useState(false);

	useKonami(() => {
		setIsVisible(true);
	});

	return (
		<>
			<AnimatePresence>
				{isVisible && (
					<div className="fixed w-full h-full top-0 right-0 z-50 flex items-center justify-center">
						<motion.div
							key="easterEgg"
							initial={{scale: 0.5, opacity: 0}}
							animate={{scale: 1, opacity: 1}}
							transition={{duration: 0.2}}
							exit={{scale: 0.5, opacity: 0}}
							className="overflow-hidden rounded-md w-[50vw] h-[50vh] bg-black bg-opacity-25 border-2 border-white border-opacity-25"
						>
							<div className="w-full flex justify-end p-2">
								<button onClick={() => setIsVisible(false)}>
									<FaTimes color="#fff" />
								</button>
							</div>

							<p className="text-6xl text-center">🍌</p>
						</motion.div>
						<motion.div /* Dimmed Background */
							key="dimmed-bg"
							initial={{opacity: 0}}
							animate={{opacity: 0.5}}
							transition={{duration: 0.4}}
							exit={{opacity: 0}}
							className="fixed top-0 left-0 h-full w-full bg-black z-[-1]"
						></motion.div>
					</div>
				)}
			</AnimatePresence>
		</>
	);
}
