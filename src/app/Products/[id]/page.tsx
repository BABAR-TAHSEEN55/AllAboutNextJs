//NOTE :  This can be used in blog posts websites wheere you want to render everything at onc3

// export const dynamicParams = false;
export async function generateStaticParams() {
    return [{ id: "1" }, { id: "2" }, { id: "3" }];
}
type ParamProps = {
    params: Promise<{ id: string }>;
};
const ProductPage = async ({ params }: ParamProps) => {
    const { id } = await params;
    return (
        <div>
            Product {id} is listed on {new Date().toLocaleTimeString()}
        </div>
    );
};

export default ProductPage;
