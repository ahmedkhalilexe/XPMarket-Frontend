import {useToast} from "@/components/ui/use-toast";
import {useMutation} from "react-query";
import {TEditProductPost} from "@/lib/types";
import {privateAxiosInstance} from "@/lib/axios";

const useEditProductMutation = (token: string) => {
    const {toast} = useToast();
    return useMutation({
        mutationKey: "editProduct",
        mutationFn: async (data: TEditProductPost) => {
            return privateAxiosInstance.put("product/updateProduct", {
                productId: data.productId,
                productName: data.productName,
                productDescription: data.productDescription,
                productPrice: data.productPrice,
                productCategoryId: data.productCategoryId,
                productImagesUri: data.productImagesUri
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        },
        onSuccess: () => {
            toast({
                variant: "default",
                title: "Product Added",
                description: "Product has been added successfully",
            })
        },
        onError: () => {
            toast({
                variant: "destructive",
                title: "Uh Oh! Something went wrong!",
                description: "Product could not be added",
            })
        }
    })
}

export default useEditProductMutation;