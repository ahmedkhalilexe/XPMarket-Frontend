import React, {ForwardedRef, forwardRef} from "react";

type Props = {};

const SelectQuantity = forwardRef<HTMLSelectElement, Props>((props: Props, ref: ForwardedRef<HTMLSelectElement>) => {
    return (
        <div className="flex items-center gap-4 mt-4">
            <label htmlFor="quantity" className="text-lg font-semibold">Quantity:</label>
            <select ref={ref} id="quantity" className="px-2 py-1 border border-gray-300 rounded-md">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </div>
    );
});

SelectQuantity.displayName = "SelectQuantity";

export default SelectQuantity;