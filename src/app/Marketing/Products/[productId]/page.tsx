import { Metadata } from "next";
// This is just used to make the condition for not Found page
import { notFound } from "next/navigation";
//NOTE: : This is known as Dynamic MetaData Generation
export const generateMetadata = async ({ params }: ParamProps): Metadata => {
    const id = (await params).productId;
    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Iphone ${id}`);
        }, 3000);
    });
    return {
        title: `Product ${title}`,
    };
};
type ParamProps = {
    params: Promise<{ productId: string }>;
};

const page = async ({ params }: ParamProps) => {
    const ProductId = (await params).productId;
    if (parseInt(ProductId) > 1000) {
        notFound();
    }
    return <h1>Details about Product {ProductId}</h1>;
};

export default page;
//NOTE : Static and Dynamic both can't exist together . It is either one or the other
//2) Page gets priority then layout meta data
