import {useQuery} from "react-query";
import {privateAxiosInstance, publicAxiosInstance} from "@/lib/axios";
import {productType} from "@/lib/types";

const useProductQuery = (productId: string, token: string) => {
    return useQuery({
        queryKey: ["product", productId],
        queryFn: async () => {
            return publicAxiosInstance.get("/product/getProductById", {
                params: {
                    productId
                },
            }).then((res) => res.data as productType)
        }
    })
}

export default useProductQuery;