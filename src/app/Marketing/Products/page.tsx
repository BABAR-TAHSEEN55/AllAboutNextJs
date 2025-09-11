import Link from "next/link";

const page = () => {
	const ProductId = 100;
	return (
		<div className="">
			{/*Note : These are known as Link for navigation*/}
			<Link href={"/Marketing"}>Home</Link>
			<h1>Products</h1>
			<Link href={"/Marketing/Products/1"}>Product 1 </Link>
			<Link href={"/Marketing/Products/2"}>Product 2 </Link>
			<Link href={"/Marketing/Products/3"}>Product 3 </Link>
			<Link href={`/Marketing/Products/${ProductId}`}>Products {ProductId}</Link>
		</div>
	);
};

export default page;
