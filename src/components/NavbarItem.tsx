import {Popover, Transition} from "@headlessui/react";
import {PropsWithChildren} from "react";
import {RiArrowDropDownLine} from "react-icons/ri";
import Link from "next/link";

interface props {
	name: string;
	items: Array<{name: string; href: string; imageUrl: string}>;
}
export default function Dropdown(props: PropsWithChildren<props>) {
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
						<Popover.Panel className="absolute z-10 mt-3 transform -translate-x-1/2">
							<div className="grid grid-cols-2 w-[350px] h-[250px] bg-white p-2 gap-x-2 gap-y-2 rounded-lg shadow-lg">
								{props.items.map(item => (
									<Link href={item.href}>
										<a
											className={
												"relative flex flex-col items-center justify-center col-span-1 bg-no-repeat bg-cover bg-center h-full transition-transform hover:scale-[102%] rounded bg-blend-darken bg-[#00000095]"
											}
											style={{backgroundImage: `url("${item.imageUrl}")`}}
											key={item.name}
											onClick={close as any}
										>
											<span className="z-10 pointer-events-none">{item.name}</span>
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
