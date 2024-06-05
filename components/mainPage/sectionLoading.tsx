import React from "react";
import {CircleChevronRight} from "lucide-react";
import ProductLoadingCard from "@/components/productCard/productLoadingCard";

type Props = {};

export default async function SectionLoading({}: Props) {
  return (
      <div className="mx-8 mt-16 lg:mx-12 xl:mx-44">
        <h2 className="text-4xl font-bold text-center">On Sale!</h2>
        <div className="grid items-center grid-cols-2 gap-8 mt-5 md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-5">
          <ProductLoadingCard/>
          <ProductLoadingCard/>
          <ProductLoadingCard/>
          <ProductLoadingCard/>
          <div className="flex flex-col items-center justify-center cursor-pointer">
            <h1 className="text-xl font-bold">More Like This</h1>
            <CircleChevronRight size={64}/>
          </div>
        </div>
      </div>
  );
}
