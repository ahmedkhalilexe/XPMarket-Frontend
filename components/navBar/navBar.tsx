import { Menu, ShoppingCart, User } from "lucide-react";
import React from "react";
import MobileMenu from "./mobileMenu";
import Link from "next/link";

type Props = {};

function NavBar({}: Props) {
  return (
    <header className="sticky top-0 z-50 w-screen bg-white shadow-lg ">
      <nav className="relative flex items-center justify-between mx-6 md:mx-10 xl:mx-44 min-h-16">
        {/* Logo */}
        <div className="text-3xl font-bold cursor-pointer ">XpMarket</div>
        {/* Nav Links */}
        {/* ul in dead center of view port*/}
        <ul className="absolute items-center justify-center flex-1 hidden gap-12 py-2 text-xl -translate-x-1/2 left-1/2 xl:flex">
          <li className=" min-w-fit font-bold text-[#0155B8] cursor-pointer">
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
        <div className="hidden gap-16 space-x-2 xl:flex">
          {/* Left buttons */}
          <Link href="#">
            <User className="w-8 cursor-pointer" size={24} />
          </Link>
          <Link href="#">
            <ShoppingCart className="w-8 cursor-pointer" size={24} />
          </Link>
        </div>
        {/* Mobile Menu */}
        <MobileMenu />
      </nav>
      <div className=" absolute h-[2px] bg-[#0155B8] w-full"></div>
    </header>
  );
}

export default NavBar;
