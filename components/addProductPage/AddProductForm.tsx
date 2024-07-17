"use client"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Button} from "@/components/ui/button";
import React, {useRef, useState} from "react";
import {Input} from "@/components/ui/input";
import useAddProductForm from "@/hooks/useAddProductForm";
import {Textarea} from "@/components/ui/textarea";
import {Upload} from "lucide-react";
import Image from "next/image";
import placeholder from "@/assets/placeholder.svg";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import useAddProductsSubmit from "@/hooks/useAddProductsSubmit";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";

type Props = {};

function AddProductForm(props: Props) {
    const auth = useSelector((state: RootState) => state.user);
    const addUserForm = useAddProductForm()
    const inputRef = useRef<HTMLInputElement>(null);
    const [imagesPreview, setImagesPreview] = useState<string[]>([]);
    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && imagesPreview.length < 5) {
            for (let i = 0; i < files.length; i++) {
                const imageUrl = URL.createObjectURL(files[i]);
                setImagesPreview((prev) => [...prev, imageUrl]);
            }
        }
    }
    const onSubmit = useAddProductsSubmit(auth.token);
    return (<div>
        <Form {...addUserForm}>
            <form onSubmit={addUserForm.handleSubmit((data) => onSubmit(data),)}>
                <div className={"flex items-center justify-between py-3"}>
                    <h2 className={" text-2xl md:text-3xl font-bold"}>Add a product</h2>
                    <Button type={"submit"} className={"bg-primaryColor text-white"}>Add</Button>
                </div>
                <div className={"grid grid-cols-1 gap-5 lg:gap-10 lg:grid-cols-4 lg:px-10"}>
                    <div className={"lg:col-span-3"}>
                        <div
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
                        </div>
                        <div className={" flex flex-col lg:flex-row gap-5"}>
                            <div
                                className={"lg:flex-1 bg-white px-3 md:px-6 py-4 h-fit rounded-lg border border-gray-300 drop-shadow-md"}>
                                <h3 className={" text-xl font-medium mb-5"}>Product price</h3>

                                <FormField control={addUserForm.control}
                                           render={({field}) => (<FormItem className={"mt-3"}>
                                               <FormLabel className={"text-lg text-gray-700"}>Price (in
                                                   dollars)</FormLabel>
                                               <FormControl>
                                                   <Input {...field} type={"number"}
                                                          min={0} placeholder={"Price"}/>
                                               </FormControl>
                                               <FormMessage/>

                                           </FormItem>)} name={"productPrice"}/>
                            </div>
                            <div
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
                            </div>
                        </div>
                    </div>
                    <div
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
                    </div>
                </div>
            </form>
        </Form>
    </div>);
}

export default AddProductForm;
