import React from "react";
import productImg from "../../assets/productImg.jpg";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
type Props = {
  //   product: productType;
};
type productType = {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  images: string[];
};
const products: productType[] = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    oldPrice: 200,
    images: [productImg.src],
  },
  {
    id: 2,
    name: "Product 2",
    price: 100,
    oldPrice: 200,
    images: ["https://via.placeholder.com/150"],
  },
  {
    id: 3,
    name: "Product 3",
    price: 100,
    oldPrice: 200,
    images: ["https://via.placeholder.com/150"],
  },
  {
    id: 4,
    name: "Product 4",
    price: 100,
    oldPrice: 200,
    images: ["https://via.placeholder.com/150"],
  },
  {
    id: 5,
    name: "Product 5",
    price: 100,
    oldPrice: 200,
    images: ["https://via.placeholder.com/150"],
  },
  {
    id: 6,
    name: "Product 6",
    price: 100,
    oldPrice: 200,
    images: ["https://via.placeholder.com/150"],
  },
];
export default function ProductCart({}: Props) {
  return (
    <div className="flex flex-col gap-4 p-4 rounded-lg bg-lightBackground h-fit drop-shadow-xl">
      <Image
        alt=""
        src={productImg.src}
        width={282}
        height={266}
        className="object-fill w-full rounded-xl h-3/6"
      />
      <h1 className="text-sm font-semibold line-clamp-2 ">
        <Link href="#">
          {" "}
          MSI infinite Gaming PC - i7 7700, NVIDIA GeForce GTX 1060, 1TB PCIe
          Gen 4.0 x4 NVMe,
        </Link>
      </h1>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">$100</h1>
          <h1 className="text-sm font-semibold text-red-500 line-through">
            $200
          </h1>
        </div>
        <div className="p-2 border-2 border-black rounded-lg cursor-pointer ">
          <ShoppingCart size={24} />
        </div>
      </div>
    </div>
  );
}
