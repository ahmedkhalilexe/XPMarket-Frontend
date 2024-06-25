import axios from "axios";

const postSignUp = (userEmail: string, userPassword: string, userFirstName: string, userLastName: string) => {
    try {
        return axios.post("http://localhost:3000/api/public/user/signUp", {
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