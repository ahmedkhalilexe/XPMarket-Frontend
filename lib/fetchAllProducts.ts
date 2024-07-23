import {productType} from './types';
import {publicAxiosInstance} from "@/lib/axios";

export default async function fetchAllProducts() {
    try {
        return await publicAxiosInstance
            .get("/product/getallproducts")
            .then((res) => res.data as productType[]);
    } catch (error) {
        console.error(error);
    }
}
