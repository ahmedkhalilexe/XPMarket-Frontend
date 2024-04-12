import React from "react";
import productImg from "../../assets/productImg.jpg";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
type Props = {};
export default function ProductCard({}: Props) {
  return (
    <div className="flex flex-col gap-3 p-4 rounded-lg sm:p-4 bg-lightBackground h-fit drop-shadow-xl">
      <Image
        alt=""
        src={"/productImg.jpg"}
        width={282}
        height={266}
        className="object-fill w-full rounded-xl h-3/6"
      />
      <h1 className="text-sm font-semibold line-clamp-2 ">
        <Link href="#">{}</Link>
      </h1>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-lg font-bold lg:text-2xl">{}</h1>
          <h1 className="text-xs font-semibold text-red-500 line-through sm:text-sm">
            {}
          </h1>
        </div>
        <div className="p-2 border-2 border-black rounded-lg cursor-pointer ">
          <ShoppingCart className="w-4 h-4 md:w-6 md:h-6" />
        </div>
      </div>
    </div>
  );
}
