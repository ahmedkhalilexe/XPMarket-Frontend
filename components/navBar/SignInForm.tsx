import React, {Dispatch, SetStateAction} from 'react';
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {UseFormReturn} from "react-hook-form";
import {UseMutationResult} from "react-query";
import {RotateCw} from "lucide-react";

type props = {
    signInForm: UseFormReturn<{ userEmail: string, userPassword: string }, any, undefined>,
    signInMutation: UseMutationResult<void, unknown, { userEmail: string, userPassword: string }, unknown>
    switchTab: Dispatch<SetStateAction<"signIn" | "signUp">>
};

function SignInForm({signInForm, signInMutation, switchTab}: props) {
    return (
        <Form {...signInForm}>
            <form onSubmit={signInForm.handleSubmit((data) => signInMutation.mutate((data)))}
                  className="space-y-8 py-2">
                <FormField control={signInForm.control} render={({field}) => (<FormItem>
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
                <FormField control={signInForm.control} render={({field}) => (<FormItem>
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

                    <Button disabled={signInMutation.isLoading} type={"submit"}
                            variant={"default"}
                            className={"w-full bg-primaryColor hover:bg-slate-500"}>{signInMutation.isLoading ?
                        <RotateCw className="animate-spin"/> : "Sign In"}</Button>
                    <p className={"mt-4 text-slate-500"}>Don&apos;t have an account?
                        <Button variant={"link"}
                                className={"px-1"}
                                onClick={() => switchTab("signUp")}>Sign
                            Up</Button></p>
                </div>

            </form>

        </Form>
    );
}

export default SignInForm;