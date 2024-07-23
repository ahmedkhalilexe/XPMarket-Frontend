import {authType} from "@/lib/types";
import {publicAxiosInstance} from "@/lib/axios";

const PostSignIn = async (userEmail: string, userPassword: string) => {
    return publicAxiosInstance.post("/user/signIn", {
        userEmail,
        userPassword
    }).then((res) => res.data as authType);
}

export default PostSignIn;