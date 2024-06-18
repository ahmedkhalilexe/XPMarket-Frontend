import React from 'react';
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {RotateCcw} from "lucide-react";
import {UseFormReturn} from "react-hook-form";
import {UseMutationResult} from "react-query";

type props = {
    signInForm: UseFormReturn<{ userEmail: string, userPassword: string }, any, undefined>,
    signInMutation: UseMutationResult<void, unknown, { userEmail: string, userPassword: string }, unknown>
};

function SignInForm({signInForm, signInMutation}: props) {
    return (
        <Form {...signInForm}>
            <form onSubmit={signInForm.handleSubmit((data) => signInMutation.mutate((data)))}
                  className="space-y-8">
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
                <Button disabled={signInMutation.isLoading} type={"submit"}
                        variant={"outline"}>{signInMutation.isLoading ?
                    <RotateCcw className="animate-spin"/> : "Submit"}</Button>

            </form>

        </Form>
    );
}

export default SignInForm;