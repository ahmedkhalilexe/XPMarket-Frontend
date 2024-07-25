import {Button} from "@/components/ui/button";
import {cartItemType, TCreateOrder} from "@/lib/types";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import calculateSummary from "@/lib/calculateSummary";
import useOnCheckOut from "@/hooks/useOnCheckOut";
import {useAppDispatch} from "@/hooks/reduxHooks";
import {removeCartItem} from "@/redux/cart/cartSlicer";


function CartSummary() {
    const selectedCartItems: cartItemType[] = useSelector((state: RootState) => state.cart.selectedItems);
    const auth = useSelector((state: RootState) => state.user);
    const {total, itemCount} = calculateSummary(selectedCartItems);
    const onCheckOut = useOnCheckOut(auth.token);
    const dispatch = useAppDispatch();
    const deleteSelectedItems = () => {
        selectedCartItems.forEach((item) => {
            dispatch(removeCartItem({userCartProductId: item.userCartProductId, token: auth.token}));
        })
    }
    const checkOutList: TCreateOrder[] = selectedCartItems.map((item) => {
        return {
            ...item.product,
            quantity: item.userCartProductQuantity
        }
    })
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
        <Button variant={"default"} className=" w-full text-2xl py-5 my-4 bg-primaryColor"
                onClick={async () => {
                    deleteSelectedItems();
                    await onCheckOut(checkOutList);

                }}> Checkout</Button>
    </div>);
}

export default CartSummary;
