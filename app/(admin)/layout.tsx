import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "../(user)/globals.css";
import {cn} from "@/lib/utils";
import {ReactNode} from "react";
import AuthProvider from "@/redux/authProvider";
import {Toaster} from '@/components/ui/toaster'
import SideBar from "@/components/sideBar/SideBar";
import AdminMobileNav from "@/components/sideBar/AdminMobileNav";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Dashboard - XP-Market",
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
            <body className={cn("xl:flex bg-gray-100/50", inter.className)}>
            <SideBar/>
            <AdminMobileNav/>
            <div className={"lg:flex-1 py-6 rounded-l-lg  min-h-screen"}>{children}</div>
            <Toaster/>
            </body>
        </AuthProvider>
        </html>
    );
}
