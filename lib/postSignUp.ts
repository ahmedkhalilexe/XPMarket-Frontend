import {publicAxiosInstance} from "@/lib/axios";

const postSignUp = (userEmail: string, userPassword: string, userFirstName: string, userLastName: string) => {
    try {
        return publicAxiosInstance.post("/user/signUp", {
            userEmail,
            userPassword,
            userFirstName,
            userLastName
        })
    } catch (e) {
        console.error(e);
        return;
    }
}
export default postSignUp;