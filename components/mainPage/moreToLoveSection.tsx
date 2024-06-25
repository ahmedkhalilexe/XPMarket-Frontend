import React from "react";
import ProductCard from "../productCard/productCard";
import {productType} from "@/lib/types";
import fetchAllProducts from "@/lib/fetchAllProducts";
import ClientProvider from "@/components/react query/ClientProvider";

type Props = {};

export default async function MoreToLoveSection({}: Props) {
    const products: productType[] | undefined = await fetchAllProducts();
    return (
        <div className="mx-8 mt-16 lg:mx-12 xl:mx-44">
            <h2 className="text-4xl font-bold text-center">More to love!</h2>
            <ClientProvider>
                <div className="grid items-center grid-cols-2 gap-8 mt-5 md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-5">
                    {products?.map((product) => (
                        <ProductCard key={product.productId} product={product}/>
                    ))}
                </div>
            </ClientProvider>
        </div>
    );
}
