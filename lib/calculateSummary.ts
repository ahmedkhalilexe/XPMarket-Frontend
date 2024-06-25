import {cartItemType} from "@/lib/types";

const calculateSummary = (selectedCartItems: cartItemType[]) => {
    let total = 0;
    let itemCount = 0
    selectedCartItems.forEach((item) => {
        total += item.product.productPrice * item.userCartProductQuantity;
        itemCount += item.userCartProductQuantity;
    });
    return {total, itemCount};

}
export default calculateSummary;