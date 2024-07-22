"use client"
import RecentUsersTable from "@/components/dashboard/RecentusersTable";
import RecentOrdersTable from "@/components/dashboard/RecentOrdersTable";
import DashboardStats from "@/components/dashboard/DashboardStats";
import ClientProvider from "@/components/react query/ClientProvider";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {useRouter} from "next/navigation";


function Page() {
    const auth = useSelector((state: RootState) => state.user);
    const router = useRouter();
    if (!auth.isAuth && auth.status === "failed") {
        router.push("/");
    }
    if (auth.isAuth && auth.user.userRoleId !== 1) {
        router.push("/");
    }
    return auth.isAuth && auth.user.userRoleId === 1 ? (
        <ClientProvider>
            <div className={"px-2 md:px-4"}>
                <DashboardStats token={auth.token}/>
                <div className={" flex flex-col lg:flex-row gap-3 mt-3"}>
                    <RecentUsersTable token={auth.token}/>
                    <RecentOrdersTable token={auth.token}/>
                </div>
            </div>
        </ClientProvider>) : null;
}

export default Page;
