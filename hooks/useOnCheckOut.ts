import {TCreateOrder} from "@/lib/types";
import {useMutation} from "react-query";
import {useToast} from "@/components/ui/use-toast";
import {loadStripe} from "@stripe/stripe-js";
import HandleOnCheckout from "@/lib/handleOnCheckout";

const useOnCheckOut = (token: string) => {
    const {toast} = useToast();
    const handleOnCheckout = HandleOnCheckout(token);
    const checkOutMutation = useMutation({
        mutationKey: "checkOut",
        mutationFn: handleOnCheckout,
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
        if (data.length != 0) {
            const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string);
            const session = await checkOutMutation.mutateAsync(data);
            await stripePromise.then((res) => res?.redirectToCheckout({sessionId: session.session.id,}));
        }
        toast({
            variant: "destructive",
            title: "Nah uh! you can't do that.",
            description: "You can't checkout with an empty cart or no item selected.",
        })

    }
}

export default useOnCheckOut;