"use client"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import ClientProvider from "@/components/react query/ClientProvider";
import EditUserForm from "@/components/editUserPage/EditUserForm";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {useRouter} from "next/navigation";
import EditUserFormContainer from "@/components/editUserPage/EditUserFormContainer";

type Props = {
    params: {
        userId: string;
    }
};

function Page({params}: Props) {
    const auth = useSelector((state: RootState) => state.user);
    const router = useRouter();
    if (!auth.isAuth && auth.status === "failed") {
        router.push("/");
    }
    if (auth.isAuth && auth.user.userRoleId !== 1) {
        router.push("/");
    }

    return auth.isAuth && auth.user.userRoleId === 1 ? (<div className={"pl-4 py-1 pr-8"}>
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href={'/dashboard'} className={" text-lg"}>Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator/>
                <BreadcrumbItem>
                    <BreadcrumbLink href={'/dashboard/users'} className={" text-lg"}>Users</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator/>
                <BreadcrumbItem>
                    <BreadcrumbPage className={" text-lg"}>Edit user</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
        <div className={" bg-white my-8 px-3 md:px-8 py-4 rounded-lg border border-gray-300 drop-shadow-md"}>
            <ClientProvider>
                <EditUserFormContainer userId={params.userId}/>
            </ClientProvider>
        </div>
    </div>) : null;
}

export default Page;
