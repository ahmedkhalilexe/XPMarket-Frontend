import {TCreateOrder} from "@/lib/types";
import {useMutation} from "react-query";
import {privateAxiosInstance} from "@/lib/axios";
import {useToast} from "@/components/ui/use-toast";
import {loadStripe} from "@stripe/stripe-js";

const useOnCheckOut = (token: string) => {
    const {toast} = useToast();
    const checkOutMutation = useMutation({
        mutationKey: "checkOut",
        mutationFn: async (data: TCreateOrder[]) => {
            return privateAxiosInstance.post("/order/createOrder", {
                orderedProducts: data
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((res) => res.data as { message: string, session: { id: string } });
        },
        onError: () => {
            toast({
                variant: "destructive",
                title: "Uh oh!",
                description: "Something went wrong",
            })
        },
        onSuccess: () => {
            toast({
                variant: "default",
                title: "Success",
                description: "Order placed successfully",
            })
        }
    })
    return async (data: TCreateOrder[]) => {
        const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string);
        const session = await checkOutMutation.mutateAsync(data);
        const stripe = await stripePromise.then((res) => res?.redirectToCheckout({sessionId: session.session.id}));
    }
}

export default useOnCheckOut;