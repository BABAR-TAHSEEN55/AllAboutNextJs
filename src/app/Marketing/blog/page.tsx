import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "Super",
};
const page = async () => {
	await new Promise((resolve) => {
		setTimeout(() => {
			resolve("Ok");
		}, 3000);
	});
	return <div>Blog Page</div>;
};

export default page;
// NOTE : Absolute is used to break free from template option of Layout
