import {Action, configureStore, ThunkAction} from "@reduxjs/toolkit";
import {userSlice} from "@/redux/user/userSlice";
import {cartSlice} from "@/redux/cart/cartSlicer";

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        cart: cartSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type storeType = typeof store