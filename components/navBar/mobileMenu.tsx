"use client";
import { Menu, ShoppingCart, User } from "lucide-react";
import { motion, useAnimationControls } from "framer-motion";
import React, { useState } from "react";
import MobileMenuLink from "./mobileMenuLink";

type Props = {};
function MobileMenu({}: Props) {
  const menuController = useAnimationControls();
  const menuLinksController = useAnimationControls();
  const [isOpen, setIsOpen] = useState(false);
  const menuVariants = {
    open: {
      paddingTop: "12px",
      paddingBottom: "12px",
      // opacity: 1,
      height: "fit-content",
    },
    close: {
      paddingTop: 0,
      paddingBottom: 0,
      // opacity: 0,
      height: 0,
    },
  };
  const menuLinksVariants = {
    open: {
      opacity: 1,
      x: 0,
    },
    close: {
      opacity: 0,
      x: -10,
    },
  };
  return (
    <div className="block  xl:hidden">
      <Menu
        className="cursor-pointer"
        size={32}
        onClick={() => {
          if (isOpen) {
            menuController.start("close");
            menuLinksController.start("close");
          } else {
            menuController.start("open");
            menuLinksController.start("open");
          }
          setIsOpen(!isOpen);
        }}
      />
      <div>
        <motion.ul
          variants={menuVariants}
          initial={{
            paddingTop: 0,
            paddingBottom: 0,
            // opacity: 0,
            height: 0,
          }}
          animate={menuController}
          transition={{
            ease: "easeOut",
            duration: 0.25,
          }}
          className="absolute left-0 z-50 w-full h-screen overflow-hidden px-3 text-xl flex flex-col rounded-b-lg shadow-lg bg-backgroundColor/70 backdrop-blur-sm  top-full "
        >
          <MobileMenuLink
            variants={menuLinksVariants}
            menuLinksController={menuLinksController}
            delay={0}
            className="min-w-fit font-bold py-3 text-primaryColor"
          >
            On Sale!
          </MobileMenuLink>
          <MobileMenuLink
            variants={menuLinksVariants}
            menuLinksController={menuLinksController}
            delay={0.1}
          >
            caregory1
          </MobileMenuLink>
          <MobileMenuLink
            variants={menuLinksVariants}
            menuLinksController={menuLinksController}
            delay={0.2}
          >
            caregory2
          </MobileMenuLink>
          <MobileMenuLink
            variants={menuLinksVariants}
            menuLinksController={menuLinksController}
            delay={0.3}
          >
            caregory3
          </MobileMenuLink>
          <MobileMenuLink
            variants={menuLinksVariants}
            menuLinksController={menuLinksController}
            className="flex gap-3 py-3"
            delay={0.4}
          >
            <User size={24} />
            <h2>Account</h2>
          </MobileMenuLink>
          <MobileMenuLink
            variants={menuLinksVariants}
            menuLinksController={menuLinksController}
            className="flex gap-3 py-3"
            delay={0.4}
          >
            <ShoppingCart size={24} />
            <h2>Cart</h2>
          </MobileMenuLink>
        </motion.ul>
      </div>
    </div>
  );
}

export default MobileMenu;
