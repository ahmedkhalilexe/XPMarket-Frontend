"use client"
import CartHeading from "@/components/cartPage/CartHeading";
import CartProductsList from "@/components/cartPage/CartProductsList";
import CartSummary from "@/components/cartPage/CartSummary";
import {useQuery} from "react-query";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import fetchCartItems from "@/lib/fetchCartItems";
import {useAppDispatch} from "@/hooks/reduxHooks";
import {addCartItems} from "@/redux/cart/cartSlicer";
import {useRouter} from "next/navigation";


function CartPage() {
    const auth = useSelector((state: RootState) => state.user)
    const router = useRouter();
    if (!auth.isAuth) {
        router.push("/");
    }
    const dispatch = useAppDispatch();
    useQuery("cartItems", () => fetchCartItems(auth.token), {
        enabled: auth.isAuth,
        onSuccess: (dataList) => {
            dispatch(addCartItems(dataList));
        },
    });
    const items = useSelector((state: RootState) => state.cart.cartItems);
    return auth.isAuth ? (<div className="flex flex-col lg:flex-row gap-6 mx-6 md:mx-10 xl:mx-20 xxl:mx-44 h-screen">
        <div className=" flex-1 md:w-3/4 md:flex-none">
            {/* Cart Items */}
            <CartHeading count={items?.length || 0}/>
            {items.length > 0 ? <CartProductsList cartItems={items}/> : null}

        </div>
        <div className="flex-1 md:w-1/4 md:flex-none">
            {/* Summary */}
            <CartSummary/>
        </div>
    </div>) : null;
}

export default CartPage;
