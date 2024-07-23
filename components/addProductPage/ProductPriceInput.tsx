import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import React from "react";
import {UseFormReturn} from "react-hook-form";

type Props = {
    addUserForm: UseFormReturn<{
        productName: string,
        productPrice: string,
        productDescription: string,
        productCategory: string,
        productImages: FileList
    }, any, undefined>;
};

function ProductPriceInput({addUserForm}: Props) {

    return (<div
        className={"lg:flex-1 bg-white px-3 md:px-6 py-4 h-fit rounded-lg border border-gray-300 drop-shadow-md"}>
        <h3 className={" text-xl font-medium mb-5"}>Product price</h3>
        <FormField control={addUserForm.control}
                   render={({field}) => (<FormItem className={"mt-3"}>
                       <FormLabel className={"text-lg text-gray-700"}>Price (in
                           dollars)</FormLabel>
                       <FormControl>
                           <Input {...field} type={"number"}
                                  min={1} placeholder={"Price"}/>
                       </FormControl>
                       <FormMessage/>

                   </FormItem>)} name={"productPrice"}/>
    </div>);
}

export default ProductPriceInput;
