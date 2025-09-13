import Link from "next/link";

const page = () => {
	console.log("I am a Server Component")
	return (
		<div>
			<h1>Welcome Home!!!</h1>
			<Link href="/Marketing/Products">Products</Link>
			<br />
			<Link href="/Marketing/blog">Blog</Link>
			<br />
			<Link href={"/Marketing/articles/breaking-news-123?lang=en"}>Read in English</Link>
			<br />
			<Link href={"/Marketing/articles/breaking-news-123?lang=fr"}>Read in French</Link>
			<br />
			<Link href={"/Marketing/articles/breaking-news-123?lang=sp"}>Read in Spanish</Link>
		</div>
	);
};

export default page;
