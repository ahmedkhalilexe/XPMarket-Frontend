"use client"
import Link from "next/link";
import React from "react";
import {LogOut, Package, ReceiptText, Store, Users} from "lucide-react";
import {authType} from "@/lib/types";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";

type Props = {};

function SideBar(props: Props) {
    const auth: authType = useSelector((state: RootState) => state.user);


    return (<nav className={"w-[14%] flex flex-col items-center justify-between py-3  bg-white mr-4 rounded-r-lg px-4"}>
        <div className={"flex flex-col items-center  w-full"}>
            <div className="text-3xl font-bold cursor-pointer mb-16"><Link href="/">XpMarket</Link></div>
            <ul className={"w-full"}>
                <li className={"bg-white hover:bg-primaryColor/20 hover:text-primaryColor p-2 mb-5 rounded-lg hover:drop-shadow-sm transition-all"}>
                    <Link href={"/#"} className={"flex gap-5"}>
                        <Users/>
                        <p className={" text-lg font-medium"}>Users</p>
                    </Link>
                </li>
                <li className={"bg-white hover:bg-primaryColor/20 hover:text-primaryColor p-2 mb-5 rounded-lg hover:drop-shadow-sm transition-all"}>
                    <Link href={"/#"} className={"flex gap-5"}>
                        <Package/>
                        <p className={" text-lg font-medium"}>Products</p>
                    </Link>
                </li>
                <li className={"bg-white hover:bg-primaryColor/20 hover:text-primaryColor p-2 mb-5 rounded-lg hover:drop-shadow-md transition-all"}>
                    <Link href={"/#"} className={"flex gap-5"}>
                        <ReceiptText/>
                        <p className={" text-lg font-medium"}>Orders</p>
                    </Link>
                </li>
            </ul>
        </div>
        <ul className={"w-full"}>
            <div className={" h-0.5 bg-gray-200 w-full mb-2"}></div>
            <h2 className={"text-center text-lg font-medium mb-4"}>Welcome back {auth.user.userFirstName}!</h2>
            <li className={"bg-white hover:bg-primaryColor/20 hover:text-primaryColor p-2 mb-5 rounded-lg hover:drop-shadow-md transition-all"}>
                <Link href={"/#"} className={"flex gap-5"}>
                    <Store/>
                    <p className={" text-lg font-medium"}>Back to store</p>
                </Link>
            </li>
            <li className={"bg-white hover:bg-primaryColor/20 hover:text-primaryColor p-2 mb-5 rounded-lg hover:drop-shadow-md transition-all"}>
                <Link href={"/#"} className={"flex gap-5"}>
                    <LogOut/>
                    <p className={" text-lg font-medium"}>Sign out</p>
                </Link>
            </li>
        </ul>
    </nav>);
}

export default SideBar;
