import {useMutation} from "react-query";
import {TSignUp} from "@/lib/types";
import {Dispatch, SetStateAction} from "react";
import useOnSubmitSignUp from "@/hooks/useOnSubmitSignUp";
import {useToast} from "@/components/ui/use-toast";

const useSignInMutation = (switchTab: Dispatch<SetStateAction<"signIn" | "signUp">>) => {
    const onSubmitSignIn = useOnSubmitSignUp(switchTab);
    const {toast} = useToast();
    return useMutation({
        mutationFn: (credentials: TSignUp) => onSubmitSignIn(credentials),
        onSuccess: () => {
            toast({
                variant: "default",
                title: "Account created!",
                description: "You can now sign in with your new account.",
            })
        }
    });
}

export default useSignInMutation;