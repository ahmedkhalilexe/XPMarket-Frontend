"use client"
import {Button} from "@/components/ui/button";
import useAddToCartMutation from "@/hooks/useAddToCartMutation";
import {cn} from "@/lib/utils";
import {Check, RotateCw} from "lucide-react";
import React from "react";

type Props = {
    productId: string;
    token: string;
    userCartProductQuantity: number
};

function AddToCartButton({productId, token, userCartProductQuantity}: Props) {
    const {mutate, isLoading, isSuccess} = useAddToCartMutation(productId, token, userCartProductQuantity);

    return (<Button
        className={cn("p-2 font-semibold rounded-lg drop-shadow-md flex-1 py-3 text-xl leading-3 lg:w-44 lg:flex-none ", isSuccess ? "bg-green-400 hover:bg-green-400" : "",)}>
        {
            isSuccess ? <Check className="w-4 h-4 md:w-6 md:h-6"/> : isLoading ?
                <RotateCw className="animate-spin w-4 h-4 md:w-6 md:h-6"/> :
                <p className={"w-full h-full"} onClick={() => mutate()}>Add to cart</p>
        }
    </Button>);
}

export default AddToCartButton;
