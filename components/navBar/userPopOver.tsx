"use client"
import {User} from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {authType} from "@/lib/types";
import {useState} from "react";
import useSignInForm from "@/hooks/useSignInForm";
import useSignInMutation from "@/hooks/useSignInMutation";
import SignInForm from "@/components/navBar/SignInForm";
import {signOut} from "@/redux/user/userSlice";
import {useAppDispatch} from "@/hooks/reduxHooks";
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import SignUpForm from "@/components/navBar/SignUpForm";
import useSignUpForm from "@/hooks/useSignUpForm";
import useSignUpMutation from "@/hooks/useSignUpMutation";

type props = {};

function UserPopOver({}: props) {
    const [currentTab, setCurrentTab] = useState<"signIn" | "signUp">("signIn");
    const [isOpen, setIsOpen] = useState(false);
    const auth: authType = useSelector((state: RootState) => state.user);
    const signInMutation = useSignInMutation(setIsOpen);
    const signInForm = useSignInForm();
    const signUpForm = useSignUpForm();
    const signUpMutation = useSignUpMutation(setCurrentTab);
    const dispatch = useAppDispatch();
    return (
        !auth.isAuth ? (<Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger>
                <div className=" flex">
                    <User className="w-8 cursor-pointer" size={24}/>
                    <p>sign in / sign up</p>
                </div>
            </DialogTrigger>
            <DialogContent className={"overflow-hidden"}>
                <div>{
                    currentTab === "signIn" ? <div className={"w-full shrink-0"}>
                            <DialogHeader>
                                <DialogTitle className=" text-3xl">Lets<br/>Start Shopping</DialogTitle>
                                <DialogDescription className={"text-md"}>
                                    please sign in or sign up to continue.
                                </DialogDescription>
                            </DialogHeader>
                            <SignInForm signInForm={signInForm} signInMutation={signInMutation} switchTab={setCurrentTab}/>
                        </div> :
                        <div className={"w-full shrink-0"}>
                            <DialogHeader>
                                <DialogTitle className=" text-3xl">Lets<br/>Start Shopping</DialogTitle>
                                <DialogDescription className={"text-md"}>
                                    please sign in or sign up to continue.
                                </DialogDescription>
                            </DialogHeader>
                            <SignUpForm signUpForm={signUpForm} signUpMutation={signUpMutation}
                                        switchTab={setCurrentTab}/>
                        </div>
                }


                </div>
            </DialogContent>
        </Dialog>) : (
            <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
                <DropdownMenuTrigger>
                    <div className=" flex">
                        <User className="w-8 cursor-pointer" size={24}/>
                        <p>{"welcome back! " + auth.user.userFirstName}</p>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel
                        className=" text-lg">{auth.user.userFirstName + " " + auth.user.userLastName}</DropdownMenuLabel>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem className=" text-md"><Link href="/account"
                                                                 className=" w-full">My
                        Account</Link></DropdownMenuItem>
                    {auth.user.userRoleId === 1 && <DropdownMenuItem className=" text-md"><Link href="/dashboard"
                                                                                                className=" w-full">Dashboard</Link></DropdownMenuItem>}
                    <DropdownMenuItem className=" text-md cursor-pointer" onClick={() => {
                        dispatch(signOut())
                        setIsOpen(false)
                    }}>Logout</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

        )
    );

}

export default UserPopOver;
