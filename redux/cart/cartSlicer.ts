import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {cartItemType} from "@/lib/types";
import {privateAxiosInstance} from "@/lib/axios";

const initialState = {
    cartItems: [] as cartItemType[],
    selectedItems: [] as cartItemType[],
}
export const updateCartItem = createAsyncThunk("cart/updateCartItem", async (data: {
    userCartProductId: string,
    token: string,
    userCartProductQuantity: number
}) => {
    await privateAxiosInstance.put("/cart/updateCartItem", data, {
        headers: {
            Authorization: `Bearer ${data.token}`
        }
    });
    return data;
});
export const removeCartItem = createAsyncThunk("cart/removeCartItem", async (data: {
    userCartProductId: string,
    token: string
}) => {
    await privateAxiosInstance.delete("/cart/deleteFromCart",
        {
            params: {userCartProductId: data.userCartProductId},
            headers: {
                Authorization: `Bearer ${data.token}`
            }
        });
});
export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCartItems: (state, action) => {
            state.cartItems = action.payload;
        },
        addSelectedCartItem: (state, action) => {
            state.selectedItems.push(action.payload);
        },
        removeSelectedItem: (state, action) => {
            state.selectedItems = state.selectedItems.filter((item) => item.userCartProductId !== action.payload.userCartProductId);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(updateCartItem.fulfilled, (state, action) => {
            const {userCartProductId, userCartProductQuantity} = action.payload;
            console.log(userCartProductQuantity)
            state.cartItems = state.cartItems.map((item) => {
                if (item.userCartProductId === userCartProductId) {
                    return {...item, userCartProductQuantity};
                }
                return item;
            });
            state.selectedItems = state.selectedItems.map((item) => {
                if (item.userCartProductId === userCartProductId) {
                    return {...item, userCartProductQuantity};
                }
                return item;
            });
        });
        builder.addCase(removeCartItem.fulfilled, (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.userCartProductId !== action.meta.arg.userCartProductId);
            state.selectedItems = state.selectedItems.filter((item) => item.userCartProductId !== action.meta.arg.userCartProductId);
        });
    }
})
export const {addSelectedCartItem, removeSelectedItem, addCartItems} = cartSlice.actions;