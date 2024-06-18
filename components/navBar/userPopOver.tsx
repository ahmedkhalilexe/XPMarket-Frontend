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

type props = {};

function UserPopOver({}: props) {
    const [isOpen, setIsOpen] = useState(false);
    const auth: authType = useSelector((state: RootState) => state.user);
    const signInMutation = useSignInMutation(setIsOpen);
    const signInForm = useSignInForm();
    return (
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger>
                    <div className=" flex">
                        <User className="w-8 cursor-pointer" size={24}/>
                        {auth.status === "success" && auth.isAuth ? <p>{"welcome back! " + auth.user.userFirstName}</p> :
                            auth.status === "failed"?<p>sign in / sign up</p>:null}
                    </div>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className=" text-center text-2xl">Sign In</DialogTitle>
                        <DialogDescription>
                            <SignInForm signInForm={signInForm} signInMutation={signInMutation} />
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
    );

}

export default UserPopOver;
