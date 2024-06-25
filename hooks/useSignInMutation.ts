import {useMutation} from "react-query";
import {TSignIn} from "@/lib/types";
import useOnSubmitSignIn from "@/hooks/useOnSubmitSignIn";
import {Dispatch, SetStateAction} from "react";
import {AxiosError} from "axios";
import {useToast} from "@/components/ui/use-toast";

const useSignInMutation = (setIsOpen: Dispatch<SetStateAction<boolean>>) => {
    const onSubmitSignIn = useOnSubmitSignIn(setIsOpen);
    const {toast} = useToast();
    return useMutation({
        mutationKey: "signIn",
        mutationFn: (credentials: TSignIn) => onSubmitSignIn(credentials),
        onError: (error: AxiosError) => {
            if (error.response?.status === 403) {
                toast({
                    variant: "destructive",
                    title: "Uh oh! Something went wrong.",
                    description: "Please check your credentials and try again.",
                })
            }
        },
    });
}

export default useSignInMutation;