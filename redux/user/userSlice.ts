import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {authType, userType} from "@/lib/types";
import {RootState} from "@/redux/store";
import axios from "axios";

export const getRefreshToken = createAsyncThunk("users/getRefreshToken", async () => {
    axios.defaults.withCredentials = true;
    const res = await axios.get("http://localhost:3000/api/public/refresh/getRefresh");
    return {user: res.data.user as userType, token: res.data.token as string};
});
export const signOut = createAsyncThunk("users/signOut", async () => {
    axios.defaults.withCredentials = true;
    try {
        await axios.post("http://localhost:3000/api/public/user/signOut");
    } catch (e) {
        console.error(e);
    }
});
const initialState: authType = {
    isAuth: false,
    user: {
        userId: "",
        userFirstName: "",
        userLastName: "",
        userEmail: "",
        userRoleId: 0,
    },
    token: "",
    status: "idle",
}
export const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        signIn: (state, action: PayloadAction<authType>) => {
            const {userId, userFirstName, userLastName, userEmail, userRoleId} = action.payload.user;
            state.isAuth = true;
            state.user.userId = userId;
            state.user.userFirstName = userFirstName;
            state.user.userLastName = userLastName;
            state.user.userEmail = userEmail;
            state.user.userRoleId = userRoleId;
            state.token = action.payload.token;
            state.status = 'success'

        },
    },
    extraReducers: (builder) => {
        builder.addCase(getRefreshToken.pending, (state) => {
            state.status = 'loading'
        });
        builder.addCase(getRefreshToken.rejected, (state) => {
            state.status = 'failed'
        });
        builder.addCase(getRefreshToken.fulfilled, (state, action) => {
            const {user, token} = action.payload;
            state.isAuth = true;
            state.user.userId = user.userId;
            state.user.userFirstName = user.userFirstName;
            state.user.userLastName = user.userLastName;
            state.user.userEmail = user.userEmail;
            state.user.userRoleId = user.userRoleId;
            state.token = token;
            state.status = 'success'
        });
        builder.addCase(signOut.fulfilled, (state) => {
            state.isAuth = false;
            state.user = initialState.user;
            state.token = "";
            state.status = 'failed';
        })
    }
});

export const {signIn} = userSlice.actions;
export const userSelector = (state: RootState) => state.user