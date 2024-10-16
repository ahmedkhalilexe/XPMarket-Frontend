import {Checkbox} from "@/components/ui/checkbox";
import {Label} from "@/components/ui/label";
import CartListItem from "@/components/cartPage/CartListItem";
import {authType, cartItemType} from "@/lib/types";
import {useAppDispatch} from "@/hooks/reduxHooks";
import {removeAllSelectedItems, selectAllItems} from "@/redux/cart/cartSlicer";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";


type Props = {
    cartItems: cartItemType[];
};

function CartProductsList({cartItems}: Props) {
    const dispatch = useAppDispatch();
    const cart = useSelector((state: RootState) => state.cart);
    const isSelectedAll = cart.selectedItems.length === cartItems.length;
    const handleCheckChange = (e: boolean) => {
        if (e.valueOf()) {
            dispatch(selectAllItems());
        } else {
            dispatch(removeAllSelectedItems());
        }
    }
    return <div className="w-full mt-8 min-h-fit px-6 bg-background drop-shadow-xl rounded-xl py-2">
        <div className="flex items-center gap-3">
            <Checkbox id="selectAll" className=" rounded-full w-5 h-5"
                      checked={isSelectedAll}
                      onCheckedChange={handleCheckChange}/>
            <Label htmlFor={"selectAll"}>
                <h2 className="text-2xl font-bold">Select All</h2>
            </Label>
        </div>
        {
            cartItems.map((item) => (
                <CartListItem key={item.userCartProductId} item={item}/>
            ))
        }


    </div>;
}

export default CartProductsList;
