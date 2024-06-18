import PostSignIn from "@/lib/PostSignIn";
import {authType, TSignIn} from "@/lib/types";
import {signIn} from "@/redux/user/userSlice";
import {useDispatch} from "react-redux";
import useSignInForm from "@/hooks/useSignInForm";
import {Dispatch, SetStateAction} from "react";

const useOnSubmitSignIn =  (setIsOpen :  Dispatch<SetStateAction<boolean>>) => {
    const dispatch = useDispatch();
    const {reset} = useSignInForm();
    return async (credentials: TSignIn)=>{
        const {userEmail, userPassword} = credentials;
        const res = await PostSignIn(userEmail, userPassword);
        if (res === undefined) {
            return;
        }
        const auth: authType = {
            isAuth: true,
            user: res.user,
            token: res.token
        }
        dispatch(signIn(auth));
        reset();
        setIsOpen(false);
    }
};

export default useOnSubmitSignIn;
