import axios from "axios";
import {authType} from "@/lib/types";

const PostSignIn = async (userEmail: string, userPassword: string) => {
    return axios.post("http://localhost:3000/api/public/user/signIn", {
        userEmail,
        userPassword
    }).then((res) => res.data as authType);
}

export default PostSignIn;