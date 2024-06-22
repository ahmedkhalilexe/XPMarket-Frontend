import {Checkbox} from "@/components/ui/checkbox";
import Image from "next/image";
import {Trash} from "lucide-react";
import {Button} from "@/components/ui/button";
import {authType, cartItemType} from "@/lib/types";
import {useAppDispatch} from "@/hooks/reduxHooks";
import {addSelectedCartItem, removeSelectedItem} from "@/redux/cart/cartSliser";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {useMutation} from "react-query";
import updateCartItemQuantity from "@/lib/IncreaseCartItemQuantity";

type Props = {
    item: cartItemType,
};

function CartListItem({item}: Props) {
    const dispatch = useAppDispatch();
    const auth: authType = useSelector((state: RootState) => state.user);
    const increaseQuantityMutation = useMutation({
        mutationFn: async () => updateCartItemQuantity(item.userCartProductId, item.productQuantity + 1, auth.token),
        onSuccess: () => {
            item.productQuantity += 1;
            dispatch(removeSelectedItem(item));
            dispatch(addSelectedCartItem(item));
        }
    });
    const decreaseQuantityMutation = useMutation({
        mutationFn: async () => updateCartItemQuantity(item.userCartProductId, item.productQuantity - 1, auth.token),
        onSuccess: () => {
            item.productQuantity -= 1;
            dispatch(removeSelectedItem(item));
            dispatch(addSelectedCartItem(item));
        }
    });

    return (<>
        <div className=" w-full h-1 bg-slate-300 rounded-2xl my-4"/>
        <div className="flex items-center gap-3 pb-2 ">

            <div className={"flex gap-3 items-center"}>
                {/* CheckBox */}
                <Checkbox id={"productId"} className=" rounded-full w-5 h-5" onCheckedChange={
                    (e) => {
                        if (e.valueOf()) {
                            dispatch(addSelectedCartItem(item));
                        } else {
                            dispatch(removeSelectedItem(item));

                        }
                    }
                }/>
                <div className="w-56 h-32 bg-slate-200/40 drop-shadow-md rounded-lg flex justify-center items-center">
                    <Image src="https://m.media-amazon.com/images/I/917bM+zDLWL._AC_SX679_.jpg" height={130} width={220}
                           alt="" sizes={"100%"}/>
                </div>
            </div>
            <div className="h-full flex-1">
                <div className="flex justify-between mb-2">
                    <h3 className="font-medium text-lg">{item.product.productName}</h3>
                    <Button variant={"ghost"} className={"p-1"}>
                        <Trash/>
                    </Button>
                    {/* Details */}
                </div>
                <p className=" font-medium text-lg">${item.product.productPrice}</p>
                <div className="flex items-center justify-end w-full">
                    <Button
                        className={" h-7 w-7 p-0 rounded-full flex items-center justify-center text-xl bg-primaryColor"}
                        onClick={() => increaseQuantityMutation.mutate()}
                    >+</Button>
                    <span className={" text-xl font-bold px-2"}>{item.productQuantity}</span>
                    <Button
                        className={" h-7 w-7 p-0 rounded-full flex items-center justify-center text-xl bg-primaryColor"}
                        onClick={() => decreaseQuantityMutation.mutate()}
                    >-</Button>
                </div>

            </div>
        </div>

    </>);
}

export default CartListItem;
