import axios from "axios";

const privateInstance = axios.create({
    baseURL: "http://localhost:3000/api/public"
});
privateInstance.interceptors.request.use((config)=>{
    //TODO: get token from redux
    config.headers.Authorization = ``;
    return config
})