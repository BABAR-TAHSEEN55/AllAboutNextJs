import Link from "next/link";
type paramsProps = {
	params: Promise<{ articleId: string }>;
	//NOTE:// searchParams?: Promise<{ lang?: string | "en" | "sp" | "fr" }>;
	//NOTE:// If you make it optional then you gotta handle the undefined case
	searchParams: Promise<{ lang?: string | "en" | "sp" | "fr" }>;
};

// const Artice = async ({
// 	params,
// 	searchParams,
// }: {
// 	params: Promise<{ articleId: string }>;
// 	searchParams: Promise<{ lang?: "en" | "sp" | "fr" }>;
//
const Artice = async ({ params, searchParams }: paramsProps) => {
	const { articleId } = await params;
	const { lang = "en" } = await searchParams;
	return (
		<div>
			<h1>Article News {articleId}|</h1>
			<h2>Reading in {lang}</h2>
			<div>
				<Link href={`/Marketing/articles/${articleId}?lang=en`}>English</Link>
				<Link href={`/Marketing/articles/${articleId}?lang=sp`}>Spanish</Link>
				<Link href={`/Marketing/articles/${articleId}?lang=fr`}>French</Link>
			</div>
		</div>
	);
};

export default Artice;

//NOTE : If you don;'t  interpolate properly you'll get hardcoreded template string B% somethign
//NOTE : Page.tsx have access to both params as well as Search Params
// Layout.tsx has access to only params

//NOTE: //You can use Redirect for Server Compoenets
// and useRouter for client
