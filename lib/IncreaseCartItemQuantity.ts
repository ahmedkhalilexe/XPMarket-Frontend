import axios from "axios";

const updateCartItemQuantity = (userCartProductId: string, userCartProductQuantity: number, token: string) => {
    return axios.put("http://localhost:3000/api/private/cart/updateCartItem", {
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