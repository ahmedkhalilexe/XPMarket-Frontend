import {useMutation} from "react-query";
import {privateAxiosInstance} from "@/lib/axios";
import {productType} from "@/lib/types";

const useProductBuyMutation = (token: string) => {
    return useMutation({
        mutationKey: "buyProduct",
        mutationFn: async (data: productType) => {
            console.log(data)
            return privateAxiosInstance.post("/order/createOrder", {
                orderedProducts: [data]
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((res) => res.data as { message: string, session: { id: string } });
        }
    })
}

export default useProductBuyMutation;