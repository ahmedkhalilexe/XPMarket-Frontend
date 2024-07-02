"use client"
import {DollarSign, Package, ReceiptText, Users} from "lucide-react";
import useDashboardStatsQuery from "@/hooks/useDashboardStatsQuery";

type Props = {
    token: string
};

function DashboardStats({token}: Props) {
    const {data, isLoading, isError} = useDashboardStatsQuery(token);
    return (<div className={" flex flex-col md:flex-row gap-3"}>
        <div
            className={"flex flex-1 flex-col gap-6 py-4 px-6 col-span-1 h-32 rounded-lg border-2 border-gray-300 bg-white drop-shadow-md"}>
            <div className={"flex justify-between items-center"}>
                <h2 className={" text-md font-medium"}>Total Revenue</h2>
                <DollarSign className={" text-primaryColor"}/>
            </div>
            <h2 className={" text-3xl font-bold"}>${data?.totalRevenue}</h2>
        </div>
        <div
            className={"flex flex-1 flex-col gap-6 p-4 col-span-1 h-32 rounded-lg border-2 border-gray-300 bg-white drop-shadow-md"}>
            <div className={"flex justify-between items-center"}>
                <h2 className={" text-md font-medium"}>Total Users</h2>
                <Users className={" text-primaryColor"}/>
            </div>
            <h2 className={" text-3xl font-bold"}>+{data?.allUsersCount}</h2>
        </div>
        <div
            className={"flex flex-1 flex-col gap-6 p-4 col-span-1 h-32 rounded-lg border-2 border-gray-300 bg-white drop-shadow-md"}>
            <div className={"flex justify-between items-center"}>
                <h2 className={" text-md font-medium"}>Total Orders</h2>
                <ReceiptText className={" text-primaryColor"}/>
            </div>
            <h2 className={" text-3xl font-bold"}>+{data?.totalOrders}</h2>
        </div>
        <div
            className={"flex flex-1 flex-col gap-6 p-4 col-span-1 h-32 rounded-lg border-2 border-gray-300 bg-white drop-shadow-md"}>
            <div className={"flex justify-between items-center"}>
                <h2 className={" text-md font-medium"}>Total Products</h2>
                <Package className={" text-primaryColor"}/>
            </div>
            <h2 className={" text-3xl font-bold"}>+{data?.totalProducts}</h2>
        </div>

    </div>);
}

export default DashboardStats;
