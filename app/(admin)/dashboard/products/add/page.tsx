"use client"
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {useRouter} from "next/navigation";
import AddProductForm from "@/components/addProductPage/AddProductForm";
import ClientProvider from "@/components/react query/ClientProvider";
import AddProductHeadLinks from "@/components/addProductPage/AddProductHeadLinks";


type Props = {};

function Page(props: Props) {
    const auth = useSelector((state: RootState) => state.user);
    const router = useRouter();
    if (!auth.isAuth && auth.status === "failed") {
        router.push("/");
    }
    if (auth.isAuth && auth.user.userRoleId !== 1) {
        router.push("/");
    }

    return auth.isAuth && auth.user.userRoleId === 1 ? (<div>
        <AddProductHeadLinks/>
        <div className={"  my-8 px-3 md:px-8 py-4 drop-shadow-md"}>
            <ClientProvider>
                <AddProductForm/>
            </ClientProvider>
        </div>
    </div>) : null;
}

export default Page;
