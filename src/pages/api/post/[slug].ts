import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function handler(req: any, res: any) {
	const {slug} = req.query;
	const markdownWithMeta = fs.readFileSync(path.join("posts", `${slug}.md`), "utf-8");
	const {data: head, content: body} = matter(markdownWithMeta);

	res.status(200).json({
		head,
		body,
		slug,
	});
}
