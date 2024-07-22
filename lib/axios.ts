import axios from "axios";
import {store} from "@/redux/store"
import {getRefreshToken} from "@/redux/user/userSlice";

const dispatch = store.dispatch;
const publicAxiosInstance = axios.create({
    baseURL: "http://localhost:3000/api/public"
});
const privateAxiosInstance = axios.create({
    baseURL: "http://localhost:3000/api/private"
});


publicAxiosInstance.defaults.withCredentials = true;
privateAxiosInstance.defaults.withCredentials = true;

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
export {publicAxiosInstance, privateAxiosInstance};