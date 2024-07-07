import {useQuery} from "react-query";
import {privateAxiosInstance} from "@/lib/axios";
import {userTableType} from "@/lib/types";

const useAllUsersQuery = (token: string) => {
    return useQuery("allUsers", async () => {
        return privateAxiosInstance.get("/user/getAllUsers", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => res.data as userTableType[])
    })

}
export default useAllUsersQuery