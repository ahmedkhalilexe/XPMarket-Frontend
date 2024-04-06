import React from "react";
import { AnimationControls, motion } from "framer-motion";
import { cn } from "@/lib/utils";
interface Props {
  className?: string;
  menuLinksController: AnimationControls;
  delay: number;
  variants: {};
  children?: React.ReactNode;
}

function MobileMenuLink({
  className,
  menuLinksController,
  delay,
  variants,
  children,
}: Props) {
  return (
    <motion.li
      variants={variants}
      initial={{
        opacity: 0,
        x: -10,
      }}
      animate={menuLinksController}
      transition={{
        ease: "easeOut",
        duration: 0.3,
        delay: delay,
      }}
      className={cn("py-3 cursor-pointer", className)}
    >
      {children}
    </motion.li>
  );
}

export default MobileMenuLink;
