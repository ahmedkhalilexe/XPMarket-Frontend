import React from "react";
import {Skeleton} from "@/components/ui/skeleton";

function ProductPageLoading (){

    return <section className="mx-6 mb-10 md:mx-10 lg:10 xl:mx-20 xxl:mx-44 md:p-6">
        <div className="flex flex-col md:flex-row">
            {/* top section */}
            <div className="flex flex-col flex-1 p-2 md:p-6">
                <Skeleton className=" w-full h-96" />
                <div className="grid grid-cols-5 gap-3 lg:mt-4 ">
                    <Skeleton className=" h-24" />
                    <Skeleton className=" h-24" />
                    <Skeleton className=" h-24" />
                    <Skeleton className=" h-24" />
                    <Skeleton className=" h-24" />
                </div>
            </div>
            <div className="flex-1 h-64 p-2 md:p-6">
                <Skeleton className=" w-full h-8 mb-4" />
                <Skeleton className=" w-40 h-10 mb-14" />
                <Skeleton className=" w-40 h-10 mb-10" />
                <div className="flex gap-4 mt-6 md:mt-10 ">
                    <Skeleton className=" w-44 h-9 flex-1 lg:w-44 lg:flex-none" />
                    <Skeleton className=" w-44 h-9 flex-1 lg:w-44 lg:flex-none" />
                </div>
            </div>
        </div>
        <div className="mt-8 ">
            {/* descrption */}
            <Skeleton className=" w-full h-36" />
        </div>
    </section>
}

export default ProductPageLoading;
