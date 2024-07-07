import {useQuery} from "react-query";
import {privateAxiosInstance} from "@/lib/axios";
import {TEditUser} from "@/lib/types";

const useEditUserQuery = (userId: string, token: string) => {
    return useQuery("editUser", () => (privateAxiosInstance.get("/user/getUserById", {
        params: {
            userId
        },
        headers: {
            Authorization: `Bearer ${token}`
        }

    }).then(res => res.data as TEditUser)));
}

export default useEditUserQuery;