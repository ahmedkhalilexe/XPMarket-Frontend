"use client"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import useAddUserForm from "@/hooks/useAddUserForm";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import React from "react";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {useAppSelector} from "@/hooks/reduxHooks";
import useAddUserMutation from "@/hooks/useAddUserMutation";


function AddUserForm() {
    const addUserForm = useAddUserForm();
    const auth = useAppSelector(state => state.user)
    const addUserMutation = useAddUserMutation(auth.token);
    return (<Form {...addUserForm}>
        <form onSubmit={addUserForm.handleSubmit((data) => addUserMutation.mutate(data))}>
            <div className={"flex items-center justify-between py-3"}>
                <h2 className={" text-2xl md:text-3xl font-bold"}>Add a user</h2>
                <Button type={"submit"} className={"bg-primaryColor text-white"}>Add User</Button>
            </div>
            <div className={" flex gap-5 lg:gap-20"}>
                <FormField control={addUserForm.control} render={({field}) => (<FormItem className={"flex-1"}>
                    <FormLabel>
                        First Name
                    </FormLabel>
                    <FormControl>
                        <Input placeholder="enter user first name" {...field}/>
                    </FormControl>
                    <FormMessage/>
                </FormItem>)} name={"userFirstName"}>
                </FormField>
                <FormField control={addUserForm.control} render={({field}) => (<FormItem className={"flex-1"}>
                    <FormLabel>
                        Last Name
                    </FormLabel>
                    <FormControl>
                        <Input placeholder="enter user last name" {...field}/>
                    </FormControl>
                    <FormMessage/>
                </FormItem>)} name={"userLastName"}>
                </FormField>

            </div>
            <FormField control={addUserForm.control} render={({field}) => (<FormItem className={" flex-1 mt-5"}>
                <FormLabel>
                    Email
                </FormLabel>
                <FormControl>
                    <Input placeholder="enter user email" {...field}/>
                </FormControl>
                <FormMessage/>
            </FormItem>)} name={"userEmail"}>

            </FormField>
            <div className={" flex gap-5 lg:gap-32 my-8"}>
                <FormField control={addUserForm.control} render={({field}) => (<FormItem className={" flex-1"}>
                    <FormLabel>
                        Password
                    </FormLabel>
                    <FormControl>
                        <Input placeholder="enter user password" {...field} type={"password"}/>
                    </FormControl>
                    <FormMessage/>
                </FormItem>)} name={"userPassword"}>
                </FormField>
                <FormField control={addUserForm.control} render={({field}) => (<FormItem className={" flex-1"}>
                    <FormLabel>
                        User role
                    </FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a role"/>
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            <SelectItem value="1">Admin</SelectItem>
                            <SelectItem value="2">User</SelectItem>
                        </SelectContent>
                    </Select>
                    <FormMessage/>
                </FormItem>)} name={"userRoleId"}>

                </FormField>
            </div>

        </form>
    </Form>);
}

export default AddUserForm;
