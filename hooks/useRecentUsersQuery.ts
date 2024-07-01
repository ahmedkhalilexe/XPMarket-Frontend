import {useQuery} from "react-query";
import {privateAxiosInstance} from "@/lib/axios";
import {userType} from "@/lib/types";

const useRecentUsersQuery = (token: string) => {
    return useQuery("recentUsersTable", async () => {
        return await privateAxiosInstance.get("user/getRecentUsers", {
            headers: {
                Authorization: `Bearer ${token}`
            }

        }).then((res) => res.data as userType[]);
    });
}

export default useRecentUsersQuery;