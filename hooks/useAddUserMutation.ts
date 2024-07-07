import {TAddUser} from "@/lib/types";
import {useMutation} from "react-query";
import postAddUser from "@/lib/postAddUser";
import {AxiosError} from "axios";
import {useToast} from "@/components/ui/use-toast";

const useAddUserMutation = (token: string) => {
    const {toast} = useToast()
    return useMutation({
        mutationKey: "addUser",
        mutationFn: (data: TAddUser) => postAddUser(data, token),
        onError: (error: AxiosError) => {
            if (error.response?.status === 403) {
                toast({
                    variant: "destructive",
                    title: "Uh oh! Something went wrong.",
                    description: "Please check your credentials and try again.",
                })
            }
            if (error.response?.status === 400) {
                toast({
                    variant: "destructive",
                    title: "Uh oh! Something went wrong.",
                    description: "This user already exists.",
                })
            }
        },
        onSuccess: () => {
            toast({
                variant: "default",
                title: "User added successfully.",
                description: "The user has been added successfully.",
            })
        }
    })
}
export default useAddUserMutation;