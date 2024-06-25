type Props = {
    count: number;
};

function CartHeading({count}: Props) {

    return (<div className="w-full px-6 bg-background drop-shadow-xl rounded-b-xl">
        <h1 className="text-2xl md:text-3xl py-8 font-bold">Shopping Cart : {count}</h1>
    </div>);
}

export default CartHeading;
