import React from "react";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { productType } from "@/lib/types";
type Props = {
  product: productType;
};
export default function ProductCard({ product }: Props) {
  return (
    <div className="flex flex-col gap-3 p-2 rounded-lg sm:p-4 bg-lightBackground h-fit drop-shadow-xl">
        <Image
        alt=""
        src={product?.ProductImages[0].productImageUri}
        height={80}
        width={100}
        sizes={"100%"}
        className="object-contain min-w-full rounded-xl h-20 md:h-40 lg:h-36"
      />
      <h1 className="text-sm md:text-xl font-semibold line-clamp-2 ">
        <Link href="#">{product?.productName}</Link>
      </h1>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-lg font-bold lg:text-2xl">
            {product?.productPrice}
          </h1>
          <h1 className="text-xs font-semibold text-red-500 line-through sm:text-sm">
            {product?.productOldPrice}
          </h1>
        </div>
        <div className="p-2 border-2 border-black rounded-lg cursor-pointer ">
          <ShoppingCart className="w-4 h-4 md:w-6 md:h-6" />
        </div>
      </div>
    </div>
  );
}
