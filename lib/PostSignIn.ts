import axios from "axios";
import {authType} from "@/lib/types";

const PostSignIn = async (userEmail:string ,userPassword:string )=>{
    try{
        return await axios.post("http://localhost:3000/api/public/user/signIn",{
            userEmail,
            userPassword
        }).then((res) => res.data as authType);

    }catch (e){
        console.error(e);
        return;
    }
}

export default PostSignIn;