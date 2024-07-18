import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
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

function ProductCategoryInput({addUserForm}: Props) {

    return (<div
        className={"lg:flex-1 bg-white px-3 md:px-6 py-4 h-fit rounded-lg border border-gray-300 drop-shadow-md"}>
        <h3 className={" text-xl font-medium mb-5"}>Product category</h3>
        <FormField control={addUserForm.control}
                   render={({field}) => (<FormItem className={"mt-3"}>
                       <FormLabel className={"text-lg text-gray-700"}>Category</FormLabel>
                       <Select onValueChange={field.onChange} defaultValue={field.value}>
                           <FormControl>
                               <SelectTrigger>
                                   <SelectValue placeholder="Select a role"/>
                               </SelectTrigger>
                           </FormControl>
                           <SelectContent>
                               <SelectItem value="1">category 1</SelectItem>
                               <SelectItem value="2">category 2</SelectItem>
                           </SelectContent>
                       </Select>
                       <FormMessage/>

                   </FormItem>)} name={"productCategory"}/>
    </div>);
};

export default ProductCategoryInput;
