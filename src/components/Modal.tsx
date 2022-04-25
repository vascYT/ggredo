import ReactjsPopup from "reactjs-popup";
import {FaTimes} from "react-icons/fa";
import {PropsWithChildren} from "react";
import {AnimatePresence, motion} from "framer-motion";

interface props {
	trigger: JSX.Element;
	title: string;
}
export default function Popup(props: PropsWithChildren<props>) {
	return (
		<AnimatePresence>
			<ReactjsPopup trigger={props.trigger} modal>
				{
					// @ts-ignore
					close => (
						<motion.div
							key="popup"
							initial={{opacity: 0, scale: 0.5}}
							animate={{opacity: 1, scale: 1}}
							transition={{duration: 0.4, type: "spring"}}
							exit={{opacity: 0, scale: 0.5}}
							className="relative bg-black bg-opacity-25 text-white backdrop-blur-xl rounded-md z-10"
						>
							<div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#00000090]">
								<h1 className="font-title text-3xl font-bold pl-3 pt-3">{props.title}</h1>
								<button className="absolute top-3 right-3" onClick={close}>
									<FaTimes color="#fff" />
								</button>
							</div>
							<div className="flex flex-col items-center">{props.children}</div>
						</motion.div>
					)
				}
			</ReactjsPopup>
		</AnimatePresence>
	);
}
