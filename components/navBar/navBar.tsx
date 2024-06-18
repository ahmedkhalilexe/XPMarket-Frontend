import { ShoppingCart } from "lucide-react";
import React from "react";
import MobileMenu from "./mobileMenu";
import Link from "next/link";
import AuthButton from "@/components/navBar/authButton";

type Props = {};

function NavBar({}: Props) {
  return (
    <header className="sticky top-0 z-50 w-screen bg-white shadow-lg ">
      <nav className="relative flex items-center justify-between mx-6 md:mx-10 lg:10 xl:mx-20 xxl:mx-44 min-h-16">
        {/* Logo */}
        <div className="text-3xl font-bold cursor-pointer ">XpMarket</div>
        {/* Nav Links */}
        {/* ul in dead center of view port*/}
        <ul className="absolute items-center justify-center flex-1 hidden gap-12 py-2 text-xl -translate-x-1/2 left-1/2 lg:flex">
          <li className=" min-w-fit font-bold text-primaryColor cursor-pointer">
            On Sale!
          </li>
          <li className="cursor-pointer">
            <Link href="#">caregory1</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="#">caregory2</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="#">caregory3</Link>
          </li>
        </ul>
        <div className="hidden gap-16 space-x-2 lg:flex">
          {/* Left buttons */}
            <AuthButton />


          <Link href="#">
            <ShoppingCart className="w-8 cursor-pointer" size={24}/>
          </Link>
        </div>
        {/* Mobile Menu */}
        <MobileMenu/>
      </nav>
      <div className=" absolute h-[2px] bg-primaryColor w-full"></div>
    </header>
  );
}

export default NavBar;
