"use client"
import {buttonVariants} from "@/components/ui/button";
import Link from "next/link";
import {cn} from "@/lib/utils";
import AllUsersTable from "@/components/usersPage/AllUsersTable";
import ClientProvider from "@/components/react query/ClientProvider";
import {useAppSelector} from "@/hooks/reduxHooks";
import UsersHeadLinks from "@/components/usersPage/HeadLinks";
import {useRouter} from "next/navigation";

type Props = {};

function Page(props: Props) {
    const auth = useAppSelector(state => state.user)
    const router = useRouter();
    if (!auth.isAuth && auth.status === "failed") {
        router.push("/");
    }
    if (auth.isAuth && auth.user.userRoleId !== 1) {
        router.push("/");
    }

    return auth.isAuth && auth.user.userRoleId === 1 ? (<div className={"pl-4 py-1 pr-8"}>
        <UsersHeadLinks/>
        <div className={" bg-white my-8 px-3 md:px-8 py-4 rounded-lg border border-gray-300 drop-shadow-md"}>
            <div className={"flex items-center justify-between py-3"}>
                <div>
                    <h2 className={" text-2xl md:text-3xl font-bold"}>Users</h2>
                    <p className={" text-md"}>Manage your users and view their information&apos;s</p>
                </div>
                <Link href={"/dashboard/users/add"} className={cn(buttonVariants(), "bg-primaryColor text-white")}>Add
                    User</Link>
            </div>
            <ClientProvider>
                <AllUsersTable token={auth.token}/>
            </ClientProvider>
        </div>
    </div>) : null;
}

export default Page;
