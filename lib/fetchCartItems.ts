import {cartItemType} from "@/lib/types";
import {privateAxiosInstance} from "@/lib/axios";

const fetchCartItems = async (token: string) => {

    const res = await privateAxiosInstance.get("/cart/getCart", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return res.data as cartItemType[];
}
export default fetchCartItems;