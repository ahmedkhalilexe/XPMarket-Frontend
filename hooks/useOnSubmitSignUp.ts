import {TSignUp} from "@/lib/types";
import {Dispatch, SetStateAction} from "react";
import useSignUpForm from "@/hooks/useSignUpForm";
import postSignUp from "@/lib/postSignUp";

const useOnSubmitSignUp = (switchTab: Dispatch<SetStateAction<"signIn" | "signUp">>) => {
    const {reset} = useSignUpForm();
    return async (credentials: TSignUp) => {
        const {userEmail, userPassword, userFirstName, userLastName} = credentials;
        const res = await postSignUp(userEmail, userPassword, userFirstName, userLastName);
        if (res === undefined) {
            return;
        }
        reset();
        switchTab('signIn');
    }
};

export default useOnSubmitSignUp;
