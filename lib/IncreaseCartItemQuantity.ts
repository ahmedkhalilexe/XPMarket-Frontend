import {privateAxiosInstance} from "@/lib/axios";

const updateCartItemQuantity = (userCartProductId: string, userCartProductQuantity: number, token: string) => {
    return privateAxiosInstance.put("/cart/updateCartItem", {
        userCartProductId,
        userCartProductQuantity
    }, {
        withCredentials: true,
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export default updateCartItemQuantity;