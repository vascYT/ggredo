import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function handler(req: any, res: any) {
	const files = fs.readdirSync(path.join("posts"));
	const posts = files.map(filename => {
		const markdownWithMeta = fs.readFileSync(path.join("posts", filename), "utf-8");
		const {data: head, content: body} = matter(markdownWithMeta);
		return {
			head,
			body,
			slug: filename.split(".")[0],
		};
	});

	res.status(200).json(posts);
}
