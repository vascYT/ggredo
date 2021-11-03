import ReactjsPopup from "reactjs-popup";
import {FaTimes} from "react-icons/fa";
import {PropsWithChildren} from "react";

interface props {
	trigger: JSX.Element;
	title: string;
}
export default function Popup(props: PropsWithChildren<props>) {
	return (
		<ReactjsPopup trigger={props.trigger} modal>
			{(close: any) => (
				<div className="relative bg-black bg-opacity-25 text-white backdrop-blur-xl rounded-md border-2 border-[#00000025] p-7">
					<button className="absolute top-3 right-3" onClick={close}>
						<FaTimes />
					</button>
					<h1 className="font-title text-3xl font-bold">{props.title}</h1>
					<div className="flex flex-col items-center mt-5">{props.children}</div>
				</div>
			)}
		</ReactjsPopup>
	);
}
