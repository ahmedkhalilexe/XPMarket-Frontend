"use client";
import Image from "next/image";
import React, { useState } from "react";
import {imageType} from "@/lib/types";
type Props = {
    productImgs: imageType[];
};

export default function ImageGalery({productImgs}: Props) {
  const [currentImg, setCurrentImg] = useState<string>(productImgs[0].productImageUri);
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
        {productImgs.map((img, index) => (
          <Image
            src={img.productImageUri}
            alt=""
            key={index}
            width={1920}
            height={1080}
            className="object-contain h-24 cursor-pointer hover:drop-shadow-md"
            onClick={() => setCurrentImg(img.productImageUri)}
          />
        ))}
      </div>
    </div>
  );
}
