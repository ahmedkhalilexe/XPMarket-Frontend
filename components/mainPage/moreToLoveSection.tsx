import React from "react";
import ProductCard from "../productCard/productCard";

type Props = {};

export default function MoreToLoveSection({}: Props) {
  return (
    <div className="mx-8 mt-16 lg:mx-12 xl:mx-44">
      <h2 className="text-4xl font-bold text-center">More to love!</h2>
      <div className="grid items-center grid-cols-2 gap-8 mt-5 md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-5">
        {/* {products.map((product) => (
              <ProductCart key={product.id} product={product} />
            ))} */}
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}
