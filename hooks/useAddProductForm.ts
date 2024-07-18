import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {zodSchemas} from "@/lib/zod";

const useAddProductForm = () => {

    return useForm({
        resolver: zodResolver(zodSchemas.addProductSchema),
        defaultValues: {
            productName: "",
            productPrice: "1",
            productDescription: "",
            productCategory: "",
            productImages: {} as FileList,
        }
    });
}

export default useAddProductForm;