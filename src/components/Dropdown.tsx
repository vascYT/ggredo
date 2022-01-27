import {Menu, Transition} from "@headlessui/react";
import {PropsWithChildren} from "react";
import {HiChevronDown} from "react-icons/hi";

interface props {
	name: string;
	items: Array<{name: string; href: string}>;
}
export default function Dropdown(props: PropsWithChildren<props>) {
	return (
		<Menu>
			{({open}) => (
				<>
					<Menu.Button className="inline-flex justify-center w-full text-sm font-medium leading-5 transition duration-150 ease-in-out">
						<span>{props.name}</span>
						<HiChevronDown className="w-5 h-5 ml-1 -mr-1" />
					</Menu.Button>

					<Transition
						show={open}
						enter="transition ease-out duration-100"
						enterFrom="transform opacity-0 scale-95"
						enterTo="transform opacity-100 scale-100"
						leave="transition ease-in duration-75"
						leaveFrom="transform opacity-100 scale-100"
						leaveTo="transform opacity-0 scale-95"
					>
						<Menu.Items
							static
							className="absolute w-56 mt-2 origin-top-left bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
						>
							<div className="px-1 py-1">
								{props.items.map(item => (
									<Menu.Item>
										{({active}) => (
											<a
												href={item.href}
												className={`${
													active ? "bg-gray-300 text-gray-900" : "text-gray-700"
												} flex rounded-md items-center w-full px-2 py-2 text-sm`}
											>
												{item.name}
											</a>
										)}
									</Menu.Item>
								))}
							</div>
						</Menu.Items>
					</Transition>
				</>
			)}
		</Menu>
	);
}
