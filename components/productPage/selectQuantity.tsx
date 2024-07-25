import React from "react";

type Props = {
    setCartQuantity: React.Dispatch<React.SetStateAction<number>>;
};


function SelectQuantity({setCartQuantity}: Props) {

    return (<div className="flex items-center gap-4 mt-4">
        <label htmlFor="quantity" className="text-lg font-semibold">Quantity:</label>
        <select id="quantity" className="px-2 py-1 border border-gray-300 rounded-md" onChange={(event) => {
            setCartQuantity(Number(event.target.value));
        }}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
    </div>);
}

export default SelectQuantity;
