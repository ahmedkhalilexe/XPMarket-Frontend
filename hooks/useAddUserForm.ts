import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {zodSchemas} from "@/lib/zod";

const useAddUserForm = () => {
    return useForm({
        resolver: zodResolver(zodSchemas.addUserSchema), defaultValues: {
            userEmail: "",
            userPassword: "",
            userFirstName: "",
            userLastName: "",
            userRoleId: ""
        }
    })
}
export default useAddUserForm;