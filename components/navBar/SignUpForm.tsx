import React, {Dispatch, SetStateAction} from 'react';
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {RotateCw} from "lucide-react";
import {UseFormReturn} from "react-hook-form";
import {UseMutationResult} from "react-query";

type props = {
    signUpForm: UseFormReturn<{
        userFirstName: string,
        userLastName: string,
        userEmail: string,
        userPassword: string
    }>
    signUpMutation: UseMutationResult<void, unknown, {
        userEmail: string,
        userPassword: string,
        userFirstName: string,
        userLastName: string
    }>
    switchTab: Dispatch<SetStateAction<"signIn" | "signUp">>
};

function SignUpForm({signUpForm, signUpMutation, switchTab}: props) {
    return (
        <Form {...signUpForm}>
            <form onSubmit={signUpForm.handleSubmit((data) => signUpMutation.mutate((data)))}
                  className="space-y-8 py-2">
                <div className={"flex gap-2"}>

                    <FormField control={signUpForm.control} render={({field}) => (<FormItem>
                            <FormLabel>
                                First Name
                            </FormLabel>
                            <FormControl>
                                <Input placeholder="enter your first name" {...field}
                                       type={"text"}/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>

                    )} name="userFirstName">
                    </FormField>
                    <FormField control={signUpForm.control} render={({field}) => (<FormItem>
                            <FormLabel>
                                Last Name
                            </FormLabel>
                            <FormControl>
                                <Input placeholder="enter your first name" {...field}
                                       type={"text"}/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>

                    )} name="userLastName">
                    </FormField>
                </div>
                <FormField control={signUpForm.control} render={({field}) => (
                    <FormItem>
                        <FormLabel>
                            Email
                        </FormLabel>
                        <FormControl>
                            <Input placeholder="exemple@mail.com" {...field}/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>

                )} name="userEmail">
                </FormField>
                <FormField control={signUpForm.control} render={({field}) => (<FormItem>
                        <FormLabel>
                            Password
                        </FormLabel>
                        <FormControl>
                            <Input placeholder="enter your password" {...field}
                                   type={"password"}/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>

                )} name="userPassword">
                </FormField>
                <div>

                    <Button disabled={signUpMutation.isLoading} type={"submit"}
                            variant={"default"}
                            className={"w-full bg-primaryColor hover:bg-slate-500"}>{signUpMutation.isLoading ?
                        <RotateCw className="animate-spin"/> : "Sign Up"}</Button>
                    <p className={"mt-4 text-slate-500"}>Already have an account?
                        <Button variant={"link"}
                                className={"px-1"}
                                onClick={() => switchTab("signIn")}>Sign
                            In</Button></p>
                </div>

            </form>

        </Form>
    );
}

export default SignUpForm;