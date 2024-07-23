"use client"
import {Provider} from "react-redux";
import {store} from "@/redux/store";
import {ReactNode, useLayoutEffect,} from "react";
import {getRefreshToken} from "@/redux/user/userSlice";
import {setUpAxiosInterceptors} from "@/lib/axios";

export default function AuthProvider({children}: { children: ReactNode }) {
    useLayoutEffect(() => {

        if (!store.getState().user.isAuth) {
            store.dispatch(getRefreshToken())
        }
        setUpAxiosInterceptors(store)

    }, [])
    return <Provider store={store}>
        {children}
    </Provider>
}