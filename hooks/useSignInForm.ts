import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {TSignIn} from "@/lib/types";
import {zodSchemas} from "@/lib/zod";

const useSignInForm = () => {
    return useForm<TSignIn>({
        resolver: zodResolver(zodSchemas.signInSchema),
        defaultValues: {userEmail: "", userPassword: ""}
    });
};

export default useSignInForm;