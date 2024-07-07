import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {zodSchemas} from "@/lib/zod";
import {TEditUser} from "@/lib/types";

const useEditUserForm = (user: TEditUser) => {
    return useForm({
        resolver: zodResolver(zodSchemas.editUserSchema), defaultValues: {
            ...user
        }
    })
}

export default useEditUserForm;