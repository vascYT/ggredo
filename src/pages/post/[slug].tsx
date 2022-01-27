import {useRouter} from "next/router";
import useSWR from "swr";
import {fetcher} from "../../../utils/fetcher";

export default function Post() {
	const router = useRouter();
	const {slug} = router.query;
	const {error, data} = useSWR(`/api/post/${slug}`, fetcher);

	if (!data) {
		return <></>;
	}

	return (
		<div className="bg-white w-full">
			<div className="bg-wave2 bg-cover bg-no-repeat w-full h-[250px] bg-center">
				<div className="flex flex-col justify-center h-[80%] pl-[25vw] pr-[25vw]">
					{/* TODO: Center title on mobile */}
					<p className="text-base text-gray-200">{data.head.date}</p>
					<h1 className="text-white font-title text-7xl font-bold uppercase">{data.head.title}</h1>
				</div>
			</div>
			<div className="pl-[15%] pr-[15%]" dangerouslySetInnerHTML={{__html: data.body}} />
		</div>
	);
}
