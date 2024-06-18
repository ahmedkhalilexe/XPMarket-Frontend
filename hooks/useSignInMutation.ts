import {useMutation} from "react-query";
import {TSignIn} from "@/lib/types";
import useOnSubmitSignIn from "@/hooks/useOnSubmitSignIn";
import {Dispatch, SetStateAction} from "react";

const useSignInMutation = (setIsOpen:Dispatch<SetStateAction<boolean>>) => {
    const onSubmitSignIn = useOnSubmitSignIn(setIsOpen);
    return useMutation({
        mutationFn: (credentials: TSignIn) => onSubmitSignIn(credentials),
    });
}

export default useSignInMutation;