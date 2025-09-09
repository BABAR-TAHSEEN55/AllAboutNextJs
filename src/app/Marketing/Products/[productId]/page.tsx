// This is just used to make the condition for not Found page
import { notFound } from "next/navigation";

const page = async ({ params }: { params: Promise<{ productId: string }> }) => {
	const ProductId = (await params).productId;
	if (parseInt(ProductId) > 1000) {
		notFound();
	}
	return <h1>Details about Product {ProductId}</h1>;
};

export default page;
