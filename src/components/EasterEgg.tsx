import {AnimatePresence, motion} from "framer-motion";
import {useState} from "react";
import Konami from "react-konami-code";

export default function EasterEgg() {
	const [isVisible, setIsVisible] = useState(false);

	return (
		<>
			<Konami action={() => setIsVisible(true)} />
			<AnimatePresence>
				{isVisible && (
					<>
						<motion.div
							key="easterEgg"
							initial={{scale: 0}}
							animate={{scale: 1}}
							transition={{duration: 0.4, type: "spring"}}
							exit={{scale: 0}}
							className="fixed bg-white w-full h-full top-0 right-0 z-50 overflow-hidden rounded-md"
						>
							<button onClick={() => setIsVisible(false)}>Close</button>
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
