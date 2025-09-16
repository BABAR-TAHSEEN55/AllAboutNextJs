const Product = async () => {
    await new Promise((r) => {
        setTimeout(() => {
            r("Resolved");
        }, 6000);
    });
    return <div>BEST PRODUCT</div>;
};

export default Product;
