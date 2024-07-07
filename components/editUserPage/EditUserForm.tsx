"use client";
import useAddUserMutation from "@/hooks/useAddUserMutation";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import React from "react";
import useEditUserForm from "@/hooks/useEditUserForm";
import {TEditUser} from "@/lib/types";
import useEditUserMutation from "@/hooks/useEditUserMutation";

type Props = {
    token: string
    user: TEditUser
};

function EditUserForm({token, user}: Props) {

    const editUserForm = useEditUserForm(user);
    const editUserMutation = useEditUserMutation(token, user);
    return (<Form {...editUserForm}>
        <form onSubmit={editUserForm.handleSubmit((data) => editUserMutation.mutate(data))}>
            <div className={"flex items-center justify-between py-3"}>
                <h2 className={" text-2xl md:text-3xl font-bold"}>Edit a user</h2>
                <Button type={"submit"} className={"bg-primaryColor text-white"}>Edit User</Button>
            </div>
            <div className={" flex gap-20"}>
                <FormField control={editUserForm.control} render={({field}) => (<FormItem className={"flex-1"}>
                    <FormLabel>
                        First Name
                    </FormLabel>
                    <FormControl>
                        <Input placeholder="enter user first name" {...field}/>
                    </FormControl>
                    <FormMessage/>
                </FormItem>)} name={"userFirstName"}>
                </FormField>
                <FormField control={editUserForm.control} render={({field}) => (<FormItem className={"flex-1"}>
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
            <div className={" flex gap-20 my-8"}>
                <FormField control={editUserForm.control} render={({field}) => (<FormItem className={" flex-1"}>
                    <FormLabel>
                        Email
                    </FormLabel>
                    <FormControl>
                        <Input placeholder="enter user email" {...field}/>
                    </FormControl>
                    <FormMessage/>
                </FormItem>)} name={"userEmail"}>

                </FormField>
                <FormField control={editUserForm.control} render={({field}) => (<FormItem className={" flex-1"}>
                    <FormLabel>
                        User role
                    </FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value.toString()}>
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
                </FormItem>)} name={"userRole.userRoleId"}>
                </FormField>
            </div>
        </form>
    </Form>);
};

export default EditUserForm;
