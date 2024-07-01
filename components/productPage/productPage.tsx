"use client"
import React, {useEffect} from 'react';
import ImageGalery from "@/components/imageGalery/imageGalery";
import SelectQuantity from "@/components/productPage/selectQuantity";
import CtaButton from "@/components/productPage/ctaButton";
import {useQuery} from "react-query";
import axios from "axios";
import {productType} from "@/lib/types";
import ProductPageLoading from "@/components/productPage/ProductPageLoading";

type props = {
    productId: string
};

function ProductPage({productId}: props) {
    const fetchProduct = async (productId: string) => {
        return await axios.get("http://localhost:3000/api/public/product/getProductById", {
            params: {
                productId: productId
            }
        }).then((res) => res.data as productType);
    };
    const {data, isLoading} = useQuery("product", () => fetchProduct(productId));
    useEffect(() => {
        document.title = `${data?.productName} - XPMarket`;
    }, [data?.productName]);
    return (
        (isLoading) ? <ProductPageLoading/> : (data) ? (
            <section className="mx-6 mb-10 md:mx-10 lg:10 xl:mx-20 xxl:mx-44 md:p-6">
                <div className="flex flex-col md:flex-row">
                    {/* top section */}
                    <ImageGalery productImgs={data.ProductImages}/>
                    <div className="flex-1 h-64 p-2 md:p-6">
                        {/* details sections */}
                        <h1 className="text-xl font-bold text-gray-900 lg:text-3xl ">
                            {data.productName}
                        </h1>
                        <div className="flex items-end gap-4 mt-4 ">
                            <h1 className="text-3xl font-bold lg:text-4xl">${data.productPrice}</h1>
                            <h1 className="text-2xl font-semibold text-red-500 line-through">
                                ${data.productOldPrice}
                            </h1>
                        </div>
                        <SelectQuantity/>
                        <div className="flex gap-4 mt-6 md:mt-10">
                            <CtaButton
                                className="flex-1 py-3 text-xl leading-3 text-gray-100 lg:w-44 lg:flex-none bg-primaryColor">
                                Buy now!
                            </CtaButton>
                            <CtaButton
                                className="flex-1 py-3 text-xl leading-3 lg:w-44 lg:flex-none bg-lightBackground">
                                Add to cart
                            </CtaButton>
                        </div>
                    </div>
                </div>
                <div className="mt-8 ">
                    {/* descrption */}
                    <h1 className="text-3xl font-bold">Description:</h1>
                    <p className="mt-2 text-lg break-words text-start indent-4 lg:w-3/4">
                        {data.productDescription}
                    </p>
                </div>
            </section>) : <div>error</div>
    );
}

export default ProductPage;