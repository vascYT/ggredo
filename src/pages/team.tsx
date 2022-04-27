import fs from "fs";
import {PropsWithChildren} from "react";
import PageWrapper from "../components/PageWrapper";
import {SiBookstack} from "react-icons/si";
import {MdEmail} from "react-icons/md";
import path from "path";

interface TeacherCardProps {
	name: {title: string; first: string; last: string; abbr?: string};
	subjects?: string[];
	email?: string;
}
function TeacherCard(props: PropsWithChildren<TeacherCardProps>) {
	return (
		<div className="bg-gray-200 w-2/3 rounded-lg p-5 shadow-md">
			<div className="flex items-end space-x-2">
				<h1 className="font-title text-2xl font-semibold">
					{props.name.title} {props.name.last.toUpperCase()} {props.name.first}
				</h1>
				{props.name.abbr && (
					<p title="Kürzel" className="text-lg italic opacity-90">
						({props.name.abbr})
					</p>
				)}
			</div>
			<div className="flex items-center space-x-3 opacity-90 mt-1">
				{props.subjects && (
					<div className="flex items-center space-x-2">
						<SiBookstack title="Fächer" />
						<span>{props.subjects.join(", ")}</span>
					</div>
				)}
				{props.email && (
					<div className="flex items-center space-x-2">
						<MdEmail title="E-Mail" />
						<a className="hover:underline" href={`mailto:${props.email}`}>
							{props.email}
						</a>
					</div>
				)}
			</div>
		</div>
	);
}

interface props {
	teachers: {
		name: {title: string; first: string; last: string; abbr?: string};
		subjects: string[];
		email?: string;
	}[];
}
export default function Team(props: props) {
	return (
		<>
			<PageWrapper title="Team">
				<div className="flex flex-col space-y-3 items-center justify-center">
					{props.teachers.map((teacher, index) => (
						<TeacherCard
							name={teacher.name}
							subjects={teacher.subjects}
							email={teacher.email}
							key={index}
						/>
					))}
				</div>
			</PageWrapper>
		</>
	);
}

export async function getStaticProps() {
	const file = fs.readFileSync(path.join(process.cwd(), "src", "lib", "teachers.json"), "utf-8");
	const teachers = JSON.parse(file);
	return {
		props: {
			teachers,
		},
	};
}
