"use client";
import React, { useState } from "react";
import pic from "../../assets/pic.jpg";
import pic2 from "../../assets/pic2.jpg";
import pic3 from "../../assets/pic3.jpg";
import pic4 from "../../assets/pic4.jpg";

import { motion, useMotionValue } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
type Props = {};
const images = [pic.src, pic2.src, pic3.src, pic4.src];
export default function HeroCarousel({}: Props) {
  const dragAmount = useMotionValue(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleDragEnd = () => {
    if (dragAmount.get() < -20 && currentSlide < images.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    } else if (dragAmount.get() > 20 && currentSlide > 0) {
      setCurrentSlide((prev) => {
        return prev == 0 ? 0 : prev - 1;
      });
    }

    // dragAmount.set(0);
  };
  const handleOnLeftClick = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };
  const handleOnRightClick = () => {
    if (currentSlide < images.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  return (
    <>
      <section className="relative mx-6 mt-6 mb-4 overflow-hidden lg:mx-24 xl:mx-44 rounded-2xl">
        <motion.div
          drag="x"
          className="flex w-full cursor-grab active:cursor-grabbing"
          animate={{
            translateX: `-${currentSlide * 100}%`,
          }}
          style={{
            x: dragAmount,
          }}
          transition={{
            type: "spring",
            mass: 3,
            stiffness: 250,
            damping: 35,
            duration: 0.5,
          }}
          // onDragStart={}
          onDragEnd={handleDragEnd}
          dragConstraints={{ left: 0, right: 0 }}
        >
          {images.map((imgSrc, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${imgSrc})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="w-full px-20 rounded-2xl h-60 lg:h-72 xl:h-96 shrink-0"
            />
          ))}
        </motion.div>
        <div
          className="absolute top-0 bottom-0 left-0 flex items-center justify-center h-full cursor-pointer lg:w-24 bg-gradient-to-r from-primaryColor/30 via-primaryColor/20 to-transparent backdrop-blur-sm"
          onClick={handleOnLeftClick}
        >
          {/* left arrow */}
          <ChevronLeft color="#FFFF" className="w-12 h-12 lg:w-16 lg:h-16 " />
        </div>
        <div
          className="absolute top-0 bottom-0 right-0 flex items-center justify-center h-full cursor-pointer lg:w-24 bg-gradient-to-l from-primaryColor/30 via-primaryColor/20 to-transparent backdrop-blur-sm"
          onClick={handleOnRightClick}
        >
          {/* right arrow */}
          <ChevronRight color="#FFFF" className="w-12 h-12 lg:w-16 lg:h-16 " />
        </div>
      </section>
      <div className="flex justify-center">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${
              currentSlide == index ? "bg-primaryColor" : "bg-primaryColor/30"
            }`}
          />
        ))}
      </div>
    </>
  );
}
