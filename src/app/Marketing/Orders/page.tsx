"use client";
import { useRouter } from "next/navigation";

const Orders = () => {
	const router = useRouter();
	const HandleClick = () => {
		router.push("/Marketing");
	};

	return (
		<div>
			<h1>Ordersss</h1>
			<button onClick={HandleClick}>Order Spagehhti</button>
		</div>
	);
};

export default Orders;
