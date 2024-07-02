"use client"
import Link from "next/link";
import React, {useState} from "react";
import {
    LibraryBig,
    LogOut,
    Package,
    ReceiptText,
    SquareChevronLeft,
    SquareChevronRight,
    Store,
    Users
} from "lucide-react";
import {authType} from "@/lib/types";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {cn} from "@/lib/utils";
import {useAppDispatch} from "@/hooks/reduxHooks";
import {signOut} from "@/redux/user/userSlice";


function SideBar() {
    const auth: authType = useSelector((state: RootState) => state.user);
    const [isOpen, setIsOpen] = useState(true);
    const dispatch = useAppDispatch();

    return auth.isAuth && auth.user.userRoleId === 1 ? (<nav
        className={cn("hidden lg:flex flex-col items-center justify-between py-6  bg-white mr-4 rounded-r-lg px-4", isOpen ? "w-[14%]" : "w-fit")}>
        <div className={cn("flex flex-col items-center", isOpen ? "w-full" : "w-fit")}>
            <div className="w-full flex items-center justify-between gap-3 text-3xl font-bold cursor-pointer mb-16">
                <Link href="/">{isOpen ? "XPMarket" : "XP"}</Link>
                {isOpen ?
                    <SquareChevronLeft className={"text-primaryColor"} size={32} onClick={() => setIsOpen(!isOpen)}/> :
                    <SquareChevronRight className={"text-primaryColor"} size={32} onClick={() => setIsOpen(!isOpen)}/>}
            </div>
            <ul className={isOpen ? "w-full" : "w-fit"}>
                <li className={"bg-white hover:bg-primaryColor/20 hover:text-primaryColor p-2 mb-5 rounded-lg hover:drop-shadow-sm transition-all"}>
                    <Link href={"dashboard/users"} className={"flex gap-5"}>
                        <Users/>
                        {isOpen ? <p className={" text-lg font-medium"}>Users</p> : null}
                    </Link>
                </li>
                <li className={"bg-white hover:bg-primaryColor/20 hover:text-primaryColor p-2 mb-5 rounded-lg hover:drop-shadow-sm transition-all"}>
                    <Link href={"dashboard/products"} className={"flex gap-5"}>
                        <Package/>
                        {isOpen ? <p className={" text-lg font-medium"}>Products</p> : null}
                    </Link>
                </li>
                <li className={"bg-white hover:bg-primaryColor/20 hover:text-primaryColor p-2 mb-5 rounded-lg hover:drop-shadow-md transition-all"}>
                    <Link href={"dashboard/orders"} className={"flex gap-5"}>
                        <ReceiptText/>
                        {isOpen ? <p className={" text-lg font-medium"}>Orders</p> : null}
                    </Link>
                </li>
            </ul>
        </div>
        <ul className={isOpen ? "w-full" : "w-fit"}>
            <div className={" h-0.5 rounded-full bg-primaryColor w-full mb-4"}></div>
            {isOpen ? <h2 className={"text-center text-lg font-medium mb-4"}>Welcome
                back {auth.user.userFirstName}!</h2> : null}
            <li className={"bg-white hover:bg-primaryColor/20 hover:text-primaryColor p-2 mb-5 rounded-lg hover:drop-shadow-md transition-all"}>
                <Link href={"/"} className={"flex gap-5"}>
                    <Store/>
                    {isOpen ? <p className={" text-lg font-medium"}>Back to store</p> : null}
                </Link>
            </li>
            <li className={"bg-white hover:bg-primaryColor/20 hover:text-primaryColor p-2 mb-5 rounded-lg hover:drop-shadow-md transition-all"}>
                <div onClick={() => {
                    dispatch(signOut());
                }} className={"flex gap-5 cursor-pointer"}>
                    <LogOut/>
                    {isOpen ? <p className={" text-lg font-medium"}>Sign out</p> : null}
                </div>
            </li>
        </ul>
    </nav>) : null;
}

export default SideBar;
