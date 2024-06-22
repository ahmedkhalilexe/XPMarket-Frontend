import {createSlice} from "@reduxjs/toolkit";
import {cartItemType} from "@/lib/types";

const initialState = {
    selectedItems: [] as cartItemType[],
}
export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addSelectedCartItem: (state, action) => {
            state.selectedItems.push(action.payload);
        },
        removeSelectedItem: (state, action) => {
            state.selectedItems = state.selectedItems.filter((item) => item.userCartProductId !== action.payload.userCartProductId);
        },
    }
})
export const {addSelectedCartItem, removeSelectedItem} = cartSlice.actions;