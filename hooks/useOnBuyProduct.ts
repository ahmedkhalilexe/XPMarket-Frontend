import useProductBuyMutation from "@/hooks/useProductBuyMutation";
import {TCreateOrder} from "@/lib/types";
import {loadStripe} from "@stripe/stripe-js";

const useOnBuyProduct = (token: string) => {
    const productBuyMutation = useProductBuyMutation(token);
    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string);
    return async (data: TCreateOrder) => {
        try {
            const session = await productBuyMutation.mutateAsync(data);
            await stripePromise.then((res) => res?.redirectToCheckout({sessionId: session.session.id,}));
        } catch (e) {
            console.log(e);
        }
    }
}

export default useOnBuyProduct;