import useProductBuyMutation from "@/hooks/useProductBuyMutation";
import {productType} from "@/lib/types";
import {loadStripe} from "@stripe/stripe-js";

const useOnBuyProduct = (token: string) => {
    const productBuyMutation = useProductBuyMutation(token);
    const stripePromise = loadStripe("pk_test_51Oz4PrFXpJnJjiltk2nF8HkOvAA7KHuZudARzB301V2fHnf5tslxdQHAg7mHTzFBGdv14uubhu6gzT2eRRJOoXSD00n5lAgoe6");
    return async (data: productType) => {
        try {
            const session = await productBuyMutation.mutateAsync(data);
            const stripe = await stripePromise.then((res) => res?.redirectToCheckout({sessionId: session.session.id}));
        } catch (e) {
            console.log(e);
        }
    }
}

export default useOnBuyProduct;