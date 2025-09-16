import Link from "next/link";

const MainProductPage = () => {
    return (
        <div>
            <Link href={"/Products/1"}>Product 1</Link>
            <Link href={"/Products/2"}>Product 2</Link>
            <Link href={"/Products/3"}>Product 3</Link>
        </div>
    );
};

export default MainProductPage;
