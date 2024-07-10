import {useQuery} from "react-query";
import {publicAxiosInstance} from "@/lib/axios";
import {productTableType} from "@/lib/types";

const useAllProductsQuery = (token: string) => {
    return useQuery("allUsers", async () => {
        return publicAxiosInstance.get("/product/getAllProducts", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => res.data as productTableType[])
    })
}

export default useAllProductsQuery