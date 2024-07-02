"use client";
import {LibraryBig, LogOut, Menu, Package, ReceiptText, ShoppingCart, Store, Users} from "lucide-react";
import {motion, useAnimationControls} from "framer-motion";
import React, {useState} from "react";
import Link from "next/link";
import AuthButton from "@/components/navBar/authButton";
import MobileMenuLink from "@/components/navBar/mobileMenuLink";
import {useAppDispatch} from "@/hooks/reduxHooks";
import {signOut} from "@/redux/user/userSlice";

type Props = {};

function AdminMobileMenu({}: Props) {
    const menuController = useAnimationControls();
    const menuLinksController = useAnimationControls();
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useAppDispatch();
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
        <div className="block  lg:hidden">
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
                    >
                        <Link href={"dashboard/users"} className={"flex gap-3"}>
                            <Users/>
                            <p className={" text-lg font-medium"}>Users</p>
                        </Link>
                    </MobileMenuLink>
                    <MobileMenuLink
                        variants={menuLinksVariants}
                        menuLinksController={menuLinksController}
                        delay={0.1}
                    >
                        <Link href={"dashboard/products"} className={"flex gap-3"}>
                            <Package/>
                            <p className={" text-lg font-medium"}>Products</p>
                        </Link>
                    </MobileMenuLink>
                    <MobileMenuLink
                        variants={menuLinksVariants}
                        menuLinksController={menuLinksController}
                        delay={0.3}
                    >
                        <Link href={"dashboard/orders"} className={"flex gap-3"}>
                            <ReceiptText/>
                            <p className={" text-lg font-medium"}>Orders</p>
                        </Link>
                    </MobileMenuLink>
                    <MobileMenuLink
                        variants={menuLinksVariants}
                        menuLinksController={menuLinksController}
                        delay={0.4}
                    >
                        <Link href={"/"} className={"flex gap-3"}>
                            <Store/>
                            <p className={" text-lg font-medium"}>Back to store</p>
                        </Link>
                    </MobileMenuLink>
                    <MobileMenuLink
                        variants={menuLinksVariants}
                        menuLinksController={menuLinksController}
                        className="flex gap-3"
                        delay={0.4}
                        onClick={() => {
                            dispatch(signOut());
                        }}
                    >
                        <LogOut/>
                        <p className={" text-lg font-medium"}>Sign out</p>
                    </MobileMenuLink>
                </motion.ul>
            </div>
        </div>
    );
}

export default AdminMobileMenu;
