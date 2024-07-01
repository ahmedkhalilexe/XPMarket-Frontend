"use client"
import RecentUsersTable from "@/components/dashboard/RecentusersTable";
import RecentOrdersTable from "@/components/dashboard/RecentOrdersTable";
import DashboardStats from "@/components/dashboard/DashboardStats";
import ClientProvider from "@/components/react query/ClientProvider";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";


function Page() {
    const auth = useSelector((state: RootState) => state.user);

    return auth.isAuth && auth.user.userRoleId === 1 ? (
        <ClientProvider>
            <div className={"px-4"}>
                <DashboardStats token={auth.token}/>
                <div className={" flex gap-3 mt-3"}>
                    <RecentUsersTable token={auth.token}/>
                    <RecentOrdersTable token={auth.token}/>
                </div>
            </div>
        </ClientProvider>) : null;
}

export default Page;
