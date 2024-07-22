import {CircleCheckBig} from "lucide-react";
import {buttonVariants} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import Link from "next/link";


function Page() {

    return (<div className={"flex justify-center items-center h-[calc(100vh_-_182px)] "}>
        <div
            className={" flex items-center flex-col w-5/6 lg:w-3/6 h-fit py-5 gap-3 bg-white border-2 border-gray-300 rounded-lg"}>
            <CircleCheckBig className={"text-green-600 lg:w-20 lg:h-20"} size={64}/>
            <h1 className={"text-3xl lg:text-4xl font-bold text-center"}>Thanks for your order!</h1>
            <p className={" lg:text-lg text-center"}>You have just completed the payment.</p>
            <Link href={"/"} className={cn(buttonVariants(), "bg-green-600 text-white lg:text-lg hover:bg-green-700")}>Continue
                shopping</Link>

        </div>
    </div>);
}

export default Page;
