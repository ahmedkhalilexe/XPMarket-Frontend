import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {cn} from "@/lib/utils";
import NavBar from "@/components/navBar/navBar";
import React, {ReactNode} from "react";
import AuthProvider from "@/redux/authProvider";
import {Toaster} from '@/components/ui/toaster'

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "XP-Market",
    description: "Generated by create next app",
};
export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
        <AuthProvider>
            <body className={cn(" overflow-x-hidden bg-slate-100/30 relative", inter.className)}>
            <NavBar/>
            {children}
            <Toaster/>
            <footer className={" absolute -bottom-28 w-full h-fit"}>
                <div className=" absolute h-[2px] bg-primaryColor w-full"></div>
                <div
                    className="px-10 py-3 flex flex-col justify-center items-center gap-3 h-20 text-gray-800 bg-white ">
                    <p className={" font-medium text-lg"}>© {new Date().getFullYear()} XPMarket</p>
                    <p className={"text-lg"}>Made with <span className={"text-red-600"}>&#10084;</span> by <span
                        className={"font-bold"}>Ahmed Khalil</span>
                    </p>
                </div>
            </footer>
            </body>
        </AuthProvider>
        </html>
    );
}
