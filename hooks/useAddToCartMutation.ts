import {useMutation} from "react-query";
import {useToast} from "@/components/ui/use-toast";
import {privateAxiosInstance} from "@/lib/axios";

const useAddToCartMutation = (productId: string, token: string, userCartProductQuantity?: number) => {
    const {toast} = useToast();
    const {
        data,
        error,
        isLoading,
        isError,
        isSuccess,
        mutate,
    } = useMutation(["cart/addToCart", productId], {

            mutationFn: async () => {
                return await privateAxiosInstance.post("/cart/addCart", {
                    productId,
                    userCartProductQuantity
                }, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
            },
            onError: () => {
                toast({
                    variant: "destructive",
                    title: "Nah uh, you can't do that!",
                    description: "You Must be signed in.",
                })
            },
        }
    );
    return {data, error, isLoading, isError, isSuccess, mutate};

}

export default useAddToCartMutation;