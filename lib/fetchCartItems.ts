import axios from "axios";
import {cartItemType} from "@/lib/types";

const fetchCartItems = async (token: string) => {

    const res = await axios.get("http://localhost:3000/api/private/cart/getCart", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return res.data as cartItemType[];
}
export default fetchCartItems;