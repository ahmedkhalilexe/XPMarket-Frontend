"use client"
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {useRouter} from "next/navigation";
import EditProductsHeadLinks from "@/components/dashboardProductsPage/EditProductsHeadLinks";
import ClientProvider from "@/components/react query/ClientProvider";
import EditUserFormContainer from "@/components/editUserPage/EditUserFormContainer";
import EditProductForm from "@/components/dashboardProductsPage/EditProductForm";

type Props = {
    params: {
        productId: string;
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

    return auth.isAuth && auth.user.userRoleId === 1 ? (<div>
        <EditProductsHeadLinks/>
        <div className={"  my-8 px-3 md:px-8 py-4 drop-shadow-md"}>
            <ClientProvider>
                <EditProductForm productId={params.productId}/>
            </ClientProvider>
        </div>
    </div>) : null;
}

export default Page;
