"use client"
import Link from "next/link";
import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";
import ClientProvider from "@/components/react query/ClientProvider";
import {useAppSelector} from "@/hooks/reduxHooks";
import {useRouter} from "next/navigation";
import AllProductsTable from "@/components/dashboardProductsPage/AllProductsTable";
import ProductsHeadLinks from "@/components/dashboardProductsPage/ProductsHeadLinks";

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

    return auth.isAuth && auth.user.userRoleId === 1 ? (<div className={"p-2 md:pl-4 md:py-1 md:pr-8"}>
        <ProductsHeadLinks/>
        <div className={" bg-white my-8 px-3 md:px-8 py-4 rounded-lg border border-gray-300 drop-shadow-md"}>
            <div className={"flex items-center justify-between py-3"}>
                <div>
                    <h2 className={" text-2xl md:text-3xl font-bold"}>Products</h2>
                    <p className={" text-md"}>
                        Manage your products and view their information&apos;s
                    </p>
                </div>
                <Link href={"/dashboard/products/add"} className={cn(buttonVariants(), "bg-primaryColor text-white")}>Add
                    product</Link>
            </div>
            <ClientProvider>
                <AllProductsTable token={auth.token}/>
            </ClientProvider>
        </div>
    </div>) : null;
}

export default Page;
