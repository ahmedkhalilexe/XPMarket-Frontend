import {Checkbox} from "@/components/ui/checkbox";
import Image from "next/image";
import {Trash} from "lucide-react";
import {Button} from "@/components/ui/button";
import {authType, cartItemType} from "@/lib/types";
import {useAppDispatch} from "@/hooks/reduxHooks";
import {addSelectedCartItem, removeCartItem, removeSelectedItem, updateCartItem} from "@/redux/cart/cartSlicer";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";

type Props = {
    item: cartItemType,
};

function CartListItem({item}: Props) {
    const dispatch = useAppDispatch();
    const auth: authType = useSelector((state: RootState) => state.user);

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
                <div
                    className="h-20 w-32 md:min-h-32 md:min-w-56 bg-slate-200/40 drop-shadow-md rounded-lg flex justify-center items-center">
                    <Image src="https://m.media-amazon.com/images/I/917bM+zDLWL._AC_SX679_.jpg" height={130} width={220}
                           alt="" sizes={"100%"} className={""}/>
                </div>
            </div>
            <div className="h-full flex-1">
                <div className="flex justify-between mb-2">
                    <h3 className="font-medium text-lg">{item.product.productName}</h3>
                    <Button variant={"ghost"} className={"p-1"} onClick={() => dispatch(removeCartItem({
                        userCartProductId: item.userCartProductId,
                        token: auth.token
                    }))
                    }>
                        <Trash/>
                    </Button>
                    {/* Details */}
                </div>
                <p className=" font-medium text-lg">${item.product.productPrice}</p>
                <div className="flex items-center justify-end w-full">
                    <Button
                        className={" h-7 w-7 p-0 rounded-full flex items-center justify-center text-xl bg-primaryColor"}
                        onClick={() => dispatch(updateCartItem({
                            userCartProductId: item.userCartProductId,
                            token: auth.token,
                            userCartProductQuantity: item.userCartProductQuantity + 1
                        }))}
                    >+</Button>
                    <span className={" text-xl font-bold px-2"}>{item.userCartProductQuantity}</span>
                    <Button
                        className={" h-7 w-7 p-0 rounded-full flex items-center justify-center text-xl bg-primaryColor"}
                        onClick={() => dispatch(updateCartItem({
                            userCartProductId: item.userCartProductId,
                            token: auth.token,
                            userCartProductQuantity: item.userCartProductQuantity - 1
                        }))}
                    >-</Button>
                </div>

            </div>
        </div>

    </>);
}

export default CartListItem;
