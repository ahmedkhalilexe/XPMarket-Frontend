import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "@/redux/user/userSlice";
import {cartSlice} from "@/redux/cart/cartSliser";

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        cart: cartSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch