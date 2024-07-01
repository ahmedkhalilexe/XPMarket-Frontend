import {Button} from "@/components/ui/button";
import {cartItemType} from "@/lib/types";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import calculateSummary from "@/lib/calculateSummary";


function CartSummary() {
    const selectedCartItems: cartItemType[] = useSelector((state: RootState) => state.cart.selectedItems);
    const {total, itemCount} = calculateSummary(selectedCartItems);

    return (<div className="w-full px-6 bg-background drop-shadow-xl rounded-b-xl">
        <h1 className="text-3xl py-8 font-bold">Summary</h1>
        <div className="flex justify-between mb-2">
            <h1 className="text-lg font-medium">Items Count</h1>
            <h1 className="text-lg font-medium">{itemCount}</h1>
        </div>
        <div className="flex justify-between mb-2">
            <h1 className="text-lg font-medium">Total</h1>
            <h1 className="text-lg font-medium">${total}</h1>
        </div>
        <Button variant={"default"} className=" w-full text-2xl py-5 my-4 bg-primaryColor"> Checkout</Button>
    </div>);
}

export default CartSummary;
