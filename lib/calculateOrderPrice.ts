import {orderType} from "@/lib/types";

const calculateOrderPrice = (order: orderType) => {
    return order.OrderedProducts.reduce((acc, curr) => {
        return acc + curr.orderedItemQuantity * curr.product.productPrice;
    }, 0);

}
export default calculateOrderPrice;