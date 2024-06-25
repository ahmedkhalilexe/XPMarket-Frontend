import React from "react";
import ProductCard from "../productCard/productCard";
import {CircleChevronRight} from "lucide-react";
import {productType} from "@/lib/types";
import fetchOnSaleProducts from "@/lib/fetchOnSaleProducts";
import ClientProvider from "@/components/react query/ClientProvider";

type Props = {};

export default async function OnSaleSection({}: Props) {
    const products: productType[] | undefined = await fetchOnSaleProducts();
    return (
        <div className="mx-8 mt-16 lg:mx-12 xl:mx-44">
            <h2 className="text-4xl font-bold text-center">On Sale!</h2>
            <ClientProvider>
                <div
                    className="grid items-center grid-cols-2 gap-4 md:gap-8 mt-5 md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-5">
                    {products?.map((product) => {
                        return <ProductCard key={product.productId} product={product}/>;
                    })}
                    <div className="flex flex-col items-center justify-center cursor-pointer">
                        <h1 className="text-xl font-bold">More Like This</h1>
                        <CircleChevronRight size={64}/>
                    </div>
                </div>
            </ClientProvider>
        </div>
    );
}
