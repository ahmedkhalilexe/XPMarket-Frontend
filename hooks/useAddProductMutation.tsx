import {useMutation} from "react-query";
import {TAddProductPost} from "@/lib/types";
import {privateAxiosInstance} from "@/lib/axios";
import {useToast} from "@/components/ui/use-toast";

const useAddProductMutation = (token: string) => {
    const {toast} = useToast();
    return useMutation({
        mutationKey: "addProduct",
        mutationFn: async (data: TAddProductPost) => {
            return privateAxiosInstance.post("product/addProduct", data, {
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

export default useAddProductMutation;