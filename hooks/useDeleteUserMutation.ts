import {useMutation} from "react-query";
import {privateAxiosInstance} from "@/lib/axios";
import {useToast} from "@/components/ui/use-toast";

const useDeleteUserMutation = (token: string) => {
    const {toast} = useToast();
    return useMutation({
        mutationKey: "deleteUser",
        mutationFn: async (userId: string) => {
            await privateAxiosInstance.delete("user/deleteUser", {
                data: {
                    userId
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        },
        onError: () => {
            toast({
                variant: "destructive",
                title: "Uh oh!",
                description: "An error occurred while deleting user",
            })
        },
        onSuccess: () => {
            toast({
                variant: "default",
                className: "bg-green-500",
                title: "Success",
                description: "User deleted successfully",
            })
        },

    })
}

export default useDeleteUserMutation;