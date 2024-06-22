"use client"
import CartHeading from "@/components/cartPage/CartHeading";
import CartProductsList from "@/components/cartPage/CartProductsList";
import CartSummary from "@/components/cartPage/CartSummary";
import {useQuery} from "react-query";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import fetchCartItems from "@/lib/fetchCartItems";

type Props = {};

function CartPage(props: Props) {
    const auth = useSelector((state: RootState) => state.user)
    const {data, isLoading, error} = useQuery("cartItems", () => fetchCartItems(auth.token), {
        enabled: auth.isAuth

    });
    return <div className="flex flex-col lg:flex-row gap-6 mx-6 md:mx-10 lg:10 xl:mx-20 xxl:mx-44 h-screen">
        <div className="w-3/4">
            {/* Cart Items */}
            <CartHeading count={data?.length || 0}/>
            {data ? <CartProductsList cartItems={data}/> : null}

        </div>
        <div className="w-1/4">
            {/* Summary */}
            <CartSummary/>
        </div>
    </div>;
};

export default CartPage;
