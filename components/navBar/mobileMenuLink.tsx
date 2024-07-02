import React, {HTMLAttributes} from "react";
import {AnimationControls, motion} from "framer-motion";
import {cn} from "@/lib/utils";

interface Props {
    className?: string;
    menuLinksController: AnimationControls;
    delay: number;
    variants: {};
    children?: React.ReactNode;
}

interface props extends HTMLAttributes<HTMLLIElement> {
    variants: {};
    delay: number;
    menuLinksController: AnimationControls;
}

function MobileMenuLink({
                            className,
                            menuLinksController,
                            delay,
                            variants,
                            children,
                            onClick
                        }: props) {
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
            onClick={onClick}
        >
            {children}
        </motion.li>
    );
}

export default MobileMenuLink;
