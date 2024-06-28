"use client"
import AccountSection from "@/components/Account/AccountSection";
import OrdersSection from "@/components/Account/OrdersSection";
import ClientProvider from "@/components/react query/ClientProvider";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {useEffect} from "react";
import {useRouter} from "next/navigation";

type Props = {};

function Page(props: Props) {
    const auth = useSelector((state: RootState) => state.user);
    const router = useRouter();
    useEffect(() => {
        document.title = "My Account - XPMarket"
    }, []);
    if (!auth.isAuth) {
        router.push("/");
    }
    return auth.isAuth ? (
        <div className={"mx-6 md:mx-10 lg:10 xl:mx-20 xxl:mx-44"}>
            <h1 className={" text-3xl font-bold py-6"}> Account & Orders</h1>
            <AccountSection/>
            <div className={" w-full bg-white rounded-lg border border-gray-300 my-4"}>
                <h2 className={"text-2xl font-semibold py-5 px-8"}>Orders</h2>
                <div className={" h-0.5 w-full bg-gray-300 "}>{/*Separator*/}</div>
                <ClientProvider>
                    <OrdersSection/>
                </ClientProvider>
            </div>
        </div>) : null;
}

export default Page;
