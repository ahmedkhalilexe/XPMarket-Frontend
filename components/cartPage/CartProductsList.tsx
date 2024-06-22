import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {Checkbox} from "@/components/ui/checkbox";
import {Label} from "@/components/ui/label";
import CartListItem from "@/components/cartPage/CartListItem";
import {cartItemType} from "@/lib/types";

type Props = {
    cartItems: cartItemType[];
};

function CartProductsList({cartItems}: Props) {

    return <div className="w-full mt-8 min-h-fit px-6 bg-background drop-shadow-xl rounded-xl">
        <div className=" pt-4 flex items-center gap-3">
            <Checkbox id="selectAll" className=" rounded-full w-5 h-5"/>
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
};

export default CartProductsList;
