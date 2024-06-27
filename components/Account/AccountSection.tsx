"use client"
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {useState} from "react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import useUpdateAccountForm from "@/hooks/useUpdateAccountForm";
import {Form, FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form";
import {useMutation} from "react-query";
import {TUpdateAccount} from "@/lib/types";
import axios from "axios";

type Props = {};

function AccountSection(props: Props) {
    const auth = useSelector((state: RootState) => state.user);
    const [isUpdating, setIsUpdating] = useState(false);
    const userForm = useUpdateAccountForm(auth.user.userEmail, auth.user.userFirstName, auth.user.userLastName)
    return (<div className={" w-full bg-white rounded-lg border border-gray-300"}>
        <div className={"flex justify-between items-center px-8 py-5"}>
            <h2 className={"text-2xl font-semibold"}>Account</h2>
            <Button onClick={() => setIsUpdating(!isUpdating)}>
                {isUpdating ? "Save" : "Edit"}
            </Button>
        </div>
        <div className={" h-0.5 w-full bg-gray-300 "}>{/*Separator*/}</div>
        {isUpdating ? (<div className={"flex gap-8 px-8 py-4"}>
            <ul className={"flex flex-col gap-7 text-gray-600 font-medium"}>
                <h3>Email</h3>
                <h3>First name</h3>
                <h3>last name</h3>
            </ul>
            <div>
                <Form {...userForm}>
                    <form className={"flex flex-col gap-3"}>
                        <FormField control={userForm.control} render={({field}) => <FormItem>
                            <FormControl>
                                <Input {...field}/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>} name={"userEmail"}/>
                        <FormField control={userForm.control} render={({field}) => <FormItem>
                            <FormControl>
                                <Input {...field}/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>} name={"userFirstName"}/>
                        <FormField control={userForm.control} render={({field}) => <FormItem>
                            <FormControl>
                                <Input {...field}/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>} name={"userLastName"}/>
                    </form>
                </Form>
            </div>
        </div>) : (<div className={"flex gap-8 px-8 py-4"}>
            <ul className={"flex flex-col gap-3 text-gray-600 font-medium"}>
                <h3>Email</h3>
                <h3>First name</h3>
                <h3>last name</h3>
                <h3>Password</h3>
            </ul>
            <ul className={"flex flex-col gap-3 text-gray-950 font-medium"}>
                <h3>{auth.user.userEmail}</h3>
                <h3>{auth.user.userFirstName}</h3>
                <h3>{auth.user.userLastName}</h3>
                <h3>**************</h3>
            </ul>
        </div>)}
    </div>);
}

export default AccountSection;
