import useProductBuyMutation from "@/hooks/useProductBuyMutation";
import {TCreateOrder} from "@/lib/types";
import {loadStripe} from "@stripe/stripe-js";
import {privateAxiosInstance} from "@/lib/axios";

const useOnBuyProduct = (token: string) => {
    const productBuyMutation = useProductBuyMutation(token);
    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string);
    return async (data: TCreateOrder) => {
        try {
            const session = await productBuyMutation.mutateAsync(data);
            const stripe = await stripePromise.then((res) => res?.redirectToCheckout({sessionId: session.session.id}));
            if (!stripe?.error) {
                // await privateAxiosInstance.post("/order/updateOrder", {
                //     orderId: session.session.id
                // }, {
                //     headers: {
                //         Authorization: `Bearer ${token}`
                //     }
                // });
            }
        } catch (e) {
            console.log(e);
        }
    }
}

export default useOnBuyProduct;