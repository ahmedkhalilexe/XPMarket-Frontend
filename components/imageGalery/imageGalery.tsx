"use client";
import Image from "next/image";
import React, { useState } from "react";
import productImg from "../../assets/productImg.jpg";
import productImg2 from "../../assets/productImg2.jpg";
import productImg3 from "../../assets/productImg3.jpg";
import productImg4 from "../../assets/productImg4.jpg";
import productImg5 from "../../assets/productImg5.jpg";
type Props = {};
const productsImgSrc = [
  productImg.src,
  productImg2.src,
  productImg3.src,
  productImg4.src,
  productImg5.src,
];

export default function ImageGalery({}: Props) {
  const [currentImg, setCurrentImg] = useState<string>(productsImgSrc[0]);
  return (
    // TODO: integrate database
    <div className="flex flex-col flex-1 p-2 md:p-6">
      <Image
        src={currentImg}
        alt=""
        width={1920}
        height={1080}
        className="object-contain w-full h-96"
      />
      <div className="grid grid-cols-5 gap-3 lg:mt-4 ">
        {productsImgSrc.map((src, index) => (
          <Image
            src={src}
            alt=""
            key={index}
            width={1920}
            height={1080}
            className="object-contain h-24 cursor-pointer hover:drop-shadow-md"
            onClick={() => setCurrentImg(src)}
          />
        ))}
      </div>
    </div>
  );
}
