import {TCreateOrder} from "@/lib/types";
import {privateAxiosInstance} from "@/lib/axios";

const HandleOnCheckout = (token: string) => {
    return async (data: TCreateOrder[]) => {
        return privateAxiosInstance.post("/order/createOrder", {
            orderedProducts: data
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => res.data as { message: string, session: { id: string } });
    }

}

export default HandleOnCheckout;