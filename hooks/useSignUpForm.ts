import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {TSignUp} from "@/lib/types";
import {zodSchemas} from "@/lib/zod";

const useSignUpForm = () => {
    return useForm<TSignUp>({
        resolver: zodResolver(zodSchemas.signUpSchema),
        defaultValues: {userEmail: "", userPassword: "", userFirstName: "", userLastName: ""}
    });
};

export default useSignUpForm;