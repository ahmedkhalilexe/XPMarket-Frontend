import {TEditUser} from "@/lib/types";
import {useMutation} from "react-query";
import {privateAxiosInstance} from "@/lib/axios";
import {useToast} from "@/components/ui/use-toast";
import {useRouter} from "next/navigation";

const useEditUserMutation = (token: string, defaultValues: TEditUser) => {
    const {toast} = useToast();
    const router = useRouter();
    return useMutation({
        mutationKey: "editUser",
        mutationFn: async (data: TEditUser) => {
            if (
                data.userFirstName === defaultValues.userFirstName &&
                data.userLastName === defaultValues.userLastName &&
                data.userEmail === defaultValues.userEmail &&
                data.userRole.userRoleId === defaultValues.userRole.userRoleId
            ) {
                return;
            }
            try {
                await privateAxiosInstance.put("/user/updateUser", {
                    userId: defaultValues.userId,
                    userEmail: data.userEmail,
                    userFirstName: data.userFirstName,
                    userLastName: data.userLastName,
                    userRoleId: data.userRole.userRoleId
                }, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
            } catch (e) {
                console.log(e)
            }
        },
        onSuccess: () => {
            toast({
                title: "User updated",
                description: "User updated successfully",
            })
            router.push("/dashboard/users")

        },
        onError: (e) => {
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong!",
                description: "User could not be updated. Please try again later.sa",
            })
        }
    })

}

export default useEditUserMutation;