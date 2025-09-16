import { Suspense } from "react";
import Product from "../../components/Product.tsx";
import Reviews from "../../components/Reviews.tsx";

const CatalogPage = () => {
    return (
        <div>
            <h1>Catalog Lists</h1>
            <Suspense fallback={<p>Loading Product...</p>}>
                <Product />
            </Suspense>
            <Suspense fallback={<p>Loading Product...</p>}>
                <Reviews />
            </Suspense>
        </div>
    );
};

export default CatalogPage;
