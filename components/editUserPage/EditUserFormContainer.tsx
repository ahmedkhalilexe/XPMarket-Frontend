"use client";
import EditUserForm from "@/components/editUserPage/EditUserForm";
import {useAppSelector} from "@/hooks/reduxHooks";
import useEditUserQuery from "@/hooks/useEditUserQuery";

type Props = {
    userId: string;
};

function EditUserFormContainer({userId}: Props) {
    const auth = useAppSelector(state => state.user)
    const {data} = useEditUserQuery(userId, auth.token);
    return data ? (<EditUserForm token={auth.token} user={data}/>) : null;
};

export default EditUserFormContainer;
