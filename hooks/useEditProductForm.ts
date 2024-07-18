import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {zodSchemas} from "@/lib/zod";
import {TEditProduct} from "@/lib/types";

const useEditProductForm = ({
                                productName,
                                productPrice,
                                productDescription,
                                productCategory,
                                productImages
                            }: TEditProduct) => {
    return useForm({
        resolver: zodResolver(zodSchemas.editProductSchema),
        defaultValues: {
            productName: productName,
            productPrice: productPrice,
            productDescription: productDescription,
            productCategory: productCategory,
            productImages: {} as FileList,
        }
    });
}

export default useEditProductForm;