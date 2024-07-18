"use client"
import Image from "next/image";
import placeholder from "@/assets/placeholder.svg";
import {FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Upload} from "lucide-react";
import React, {useRef} from "react";
import {UseFormReturn} from "react-hook-form";
import useOnImagePreview from "@/hooks/useOnImagePreview";

type Props = {
    addUserForm: UseFormReturn<{
        productName: string,
        productPrice: string,
        productDescription: string,
        productCategory: string,
        productImages: FileList
    }, any, undefined>;
};

function ProductImagesInput({addUserForm}: Props) {
    const inputRef = useRef<HTMLInputElement>(null);
    const {imagesPreview, onFileChange} = useOnImagePreview();

    return (<div
        className={"lg:col-span-1 bg-white h-fit px-3 md:px-6 py-4 rounded-lg border border-gray-300 drop-shadow-md"}>
        <h3 className={" text-xl font-medium mb-5"}>Product images</h3>
        <div className="grid gap-2">
            <Image
                alt="Product image"
                className="aspect-square w-full rounded-md object-cover"
                height="300"
                src={!imagesPreview[0] ? placeholder : imagesPreview[0]}
                width="300"
            />
            <div className={"grid grid-cols-2 gap-2"}>
                <Image
                    alt="Product image"
                    className="aspect-square w-full rounded-md object-cover"
                    height="84"
                    src={!imagesPreview[1] ? placeholder : imagesPreview[1]}
                    width="84"
                />
                <Image
                    alt="Product image"
                    className="aspect-square w-full rounded-md object-cover"
                    height="84"
                    src={!imagesPreview[2] ? placeholder : imagesPreview[2]}
                    width="84"
                />
            </div>
            <div className="grid grid-cols-3 gap-2 pb-4">
                <Image
                    alt="Product image"
                    className="aspect-square w-full rounded-md object-cover"
                    height="84"
                    src={!imagesPreview[3] ? placeholder : imagesPreview[3]}
                    width="84"
                />
                <Image
                    alt="Product image"
                    className="aspect-square w-full rounded-md object-cover"
                    height="84"
                    src={!imagesPreview[4] ? placeholder : imagesPreview[4]}
                    width="84"
                />
                <FormField control={addUserForm.control}
                           render={({field}) => (<FormItem className={"absolute bottom-0 py-2"}>
                               <FormControl className={"hidden"}>
                                   <Input
                                       onChange={(e) => {
                                           onFileChange(e);
                                           console.log(e.target.files)
                                           field.onChange(e.target.files);
                                       }} ref={inputRef}
                                       type={"file"}
                                       accept={"images/*"}
                                       multiple

                                   />
                               </FormControl>
                               <FormMessage/>
                           </FormItem>)} name={"productImages"}/>
                <button
                    onClick={() => inputRef.current?.click()}
                    type={"button"}
                    className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
                    <Upload className="h-4 w-4 text-muted-foreground"/>
                    <span className="sr-only">Upload</span>
                </button>
            </div>
        </div>
    </div>);
};

export default ProductImagesInput;
