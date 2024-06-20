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

type props = {};

function UserPopOver({}: props) {
    const [isOpen, setIsOpen] = useState(false);
    const auth: authType = useSelector((state: RootState) => state.user);
    const signInMutation = useSignInMutation(setIsOpen);
    const signInForm = useSignInForm();
    const dispatch = useAppDispatch();
    return (
        !auth.isAuth ? (<Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger>
                <div className=" flex">
                    <User className="w-8 cursor-pointer" size={24}/>
                    <p>sign in / sign up</p>
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className=" text-center text-2xl">Sign In</DialogTitle>
                    <DialogDescription>
                        <SignInForm signInForm={signInForm} signInMutation={signInMutation}/>
                    </DialogDescription>
                </DialogHeader>
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
                    <DropdownMenuLabel className=" text-lg">My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem className=" text-md"><Link href="/#" className=" w-full">Profile</Link></DropdownMenuItem>
                    <DropdownMenuItem className=" text-md cursor-pointer" onClick={()=>{
                        dispatch(signOut())
                        setIsOpen(false)
                    }}>Logout</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

        )
    );

}

export default UserPopOver;
