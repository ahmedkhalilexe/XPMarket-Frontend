import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {cn} from "@/lib/utils";
import NavBar from "@/components/navBar/navBar";
import {ReactNode} from "react";
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
            <body className={cn(" overflow-x-hidden", inter.className)}>
            <NavBar/>
            {children}
            <Toaster/>
            </body>
        </AuthProvider>
        </html>
    );
}
