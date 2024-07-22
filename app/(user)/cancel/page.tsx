import {Frown} from "lucide-react";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";

function Page() {

    return (<div className={"flex justify-center items-center h-[calc(100vh_-_182px)] "}>
        <div
            className={" flex items-center flex-col w-5/6 lg:w-3/6 h-fit py-5 px-2 gap-3 bg-white border-2 border-gray-300 rounded-lg"}>
            <Frown className={"text-red-600 lg:w-20 lg:h-20"} size={64}/>
            <h1 className={"text-3xl lg:text-4xl font-bold text-center"}>Uh oh! your order has canceled</h1>
            <p className={" lg:text-lg text-center"}>Your order has been canceled.</p>
            <Link href={"/"} className={cn(buttonVariants(), "bg-red-600 text-white lg:text-lg hover:bg-red-700")}>Continue
                shopping</Link>

        </div>
    </div>);
}

export default Page;
