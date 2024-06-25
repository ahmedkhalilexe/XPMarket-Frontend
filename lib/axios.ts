import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:3000/api/public"
});
axiosInstance.interceptors.request.use((reponse) => {
    //TODO: get token from redux
    return reponse
}, (error) => {
    return Promise.reject(error);
})
export default axiosInstance;