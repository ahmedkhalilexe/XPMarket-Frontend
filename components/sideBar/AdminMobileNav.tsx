import Link from "next/link";
import React from "react";
import AdminMobileMenu from "@/components/sideBar/AdminMobileMenu";


function AdminMobileNav() {

    return (
        <header className="sticky top-0 z-50 w-screen bg-white shadow-lg xl:hidden ">
            <nav className="relative flex items-center justify-between py-2 mx-6">
                <div className="text-3xl font-bold cursor-pointer "><Link href="/">XpMarket</Link></div>
                <AdminMobileMenu/>
            </nav>
        </header>
    );
}

export default AdminMobileNav;
