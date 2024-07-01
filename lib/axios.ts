import axios from "axios";

const publicAxiosInstance = axios.create({
    baseURL: "http://localhost:3000/api/public"
});
const privateAxiosInstance = axios.create({
    baseURL: "http://localhost:3000/api/private"
});
publicAxiosInstance.defaults.withCredentials = true;
privateAxiosInstance.defaults.withCredentials = true;
export {publicAxiosInstance, privateAxiosInstance};