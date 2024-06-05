import React, { Suspense } from "react";
import {Skeleton} from "@/components/ui/skeleton";

export default function ProductLoadingCard() {
    return (
        <div className="flex flex-col gap-3 p-4 rounded-lg sm:p-4 bg-lightBackground h-fit drop-shadow-xl">
            <Skeleton className="h-20 md:h-40 lg:h-36 w-full rounded-xl" />
            <Skeleton className="h-4 md:h-6 w-full rounded-xl" />
            <Skeleton className="h-4 md:h-8 w-full rounded-xl" />
        </div>
    );
}
