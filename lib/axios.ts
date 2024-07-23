import axios from "axios";
import {getRefreshToken} from "@/redux/user/userSlice";
import {storeType} from "@/redux/store";

const publicAxiosInstance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/public`
});
const privateAxiosInstance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/private`
});


publicAxiosInstance.defaults.withCredentials = true;
privateAxiosInstance.defaults.withCredentials = true;
export const setUpAxiosInterceptors = (store: storeType) => {
    const dispatch = store.dispatch;
    privateAxiosInstance.interceptors.response.use(
        (response) => {
            return response;
        },
        async (error) => {
            const originalRequest = error.config;
            if (error.response?.status === 403 && !originalRequest._retry) {
                originalRequest._retry = true;
                await dispatch(getRefreshToken());
                const token = store.getState().user.token;
                originalRequest.headers.Authorization = `Bearer ${token}`;
                return privateAxiosInstance(originalRequest);
            }
            return Promise.reject(error);
        }
    );
}
export {publicAxiosInstance, privateAxiosInstance};
