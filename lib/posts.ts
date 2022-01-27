import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getPosts() {
	const files = fs.readdirSync(postsDirectory);
	const posts = files.map(filename => {
		const markdownWithMeta = fs.readFileSync(path.join(postsDirectory, filename), "utf-8");
		const {data: head, content: body} = matter(markdownWithMeta);
		return {
			head,
			body,
			slug: filename.split(".")[0],
		};
	});

	return posts;
}

export function getPost(slug: string) {
	const markdownWithMeta = fs.readFileSync(path.join(postsDirectory, `${slug}.md`), "utf-8");
	const {data: head, content: body} = matter(markdownWithMeta);

	return {
		head,
		body,
		slug,
	};
}

export function getAllPostIds() {
	const fileNames = fs.readdirSync(postsDirectory);
	return fileNames.map(fileName => {
		return {
			params: {
				slug: fileName.replace(/\.md$/, ""),
			},
		};
	});
}
