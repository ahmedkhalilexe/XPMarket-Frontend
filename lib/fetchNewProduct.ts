import {productType} from './types';
import {publicAxiosInstance} from "@/lib/axios";

export default async function fetchNewProducts() {
    try {
        return await publicAxiosInstance
            .get("/product/getNewProducts")
            .then((res) => res.data as productType[]);
    } catch (error) {
        console.error(error);
    }
}
