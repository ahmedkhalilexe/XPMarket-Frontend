import {productType} from './types';
import {publicAxiosInstance} from "@/lib/axios";

export default async function fetchOnSaleProducts() {
    try {
        return await publicAxiosInstance
            .get("/product/getOnSaleProducts")
            .then((res) => res.data as productType[]);
    } catch (error) {
        console.error(error);
    }
}
