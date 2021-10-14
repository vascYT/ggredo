import {Menu, Transition} from "@headlessui/react";
import {PropsWithChildren} from "react";

interface props {
	name: string;
	items: Array<{name: string; href: string}>;
}
export default function Dropdown(props: PropsWithChildren<props>) {
	return (
		<Menu>
			{({open}) => (
				<>
					<span className="rounded-md shadow-sm">
						<Menu.Button className="inline-flex justify-center w-full text-sm font-medium leading-5 transition duration-150 ease-in-out">
							<span>{props.name}</span>
							<svg className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor">
								<path
									fillRule="evenodd"
									d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
									clipRule="evenodd"
								/>
							</svg>
						</Menu.Button>
					</span>

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
							className="absolute w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
						>
							<div className="py-1">
								{props.items.map(item => (
									<Menu.Item>
										{({active}) => (
											<a
												href={item.href}
												className={`${
													active ? "bg-gray-100 text-gray-900" : "text-gray-700"
												} flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
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
