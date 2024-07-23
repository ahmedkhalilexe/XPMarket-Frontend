import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
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

function ProductDetailsInput({addUserForm}: Props) {

    return (<div
        className={" bg-white px-3 mb-5 md:px-6 py-4 h-fit rounded-lg border border-gray-300 drop-shadow-md"}>
        <h3 className={" text-xl font-medium"}>Product details</h3>
        <div>
            <FormField control={addUserForm.control}
                       render={({field}) => (<FormItem className={"my-5"}>
                           <FormLabel className={"text-lg text-gray-700"}>Product name</FormLabel>
                           <FormControl>
                               <Input {...field} type={"text"} placeholder={"Product name"}/>
                           </FormControl>
                           <FormMessage/>
                       </FormItem>)} name={"productName"}/>
            <FormField control={addUserForm.control} render={({field}) => (<FormItem>
                <FormLabel className={"text-lg text-gray-700"}>Product description</FormLabel>
                <FormControl>
                    <Textarea {...field} placeholder={"Product description"} className={"h-40"}/>
                </FormControl>
                <FormMessage/>

            </FormItem>)} name={"productDescription"}/>
        </div>
    </div>);
}

export default ProductDetailsInput;
