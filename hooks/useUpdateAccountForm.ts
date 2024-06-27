import {useForm} from "react-hook-form";
import {TUpdateAccount} from "@/lib/types";
import {zodResolver} from "@hookform/resolvers/zod";
import {zodSchemas} from "@/lib/zod";

const useUpdateAccountForm = (userEmail: string, userFirstName: string, userLastName: string) => {
    return useForm<TUpdateAccount>({
            resolver: zodResolver(zodSchemas.updateAccountSchema),
            defaultValues: {
                userEmail, userFirstName, userLastName
            }
        }
    )
}
export default useUpdateAccountForm;