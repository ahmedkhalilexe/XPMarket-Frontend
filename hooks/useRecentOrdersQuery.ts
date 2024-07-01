import {recentOrderType} from "@/lib/types";
import {useQuery} from "react-query";
import {privateAxiosInstance} from "@/lib/axios";

const useRecentOrdersQuery = (token: string) => {
    return useQuery("recentOrdersTable", async () => {
        return await privateAxiosInstance.get("order/getRecentOrders", {
            headers: {
                Authorization: `Bearer ${token}`
            }

        }).then((res) => res.data as recentOrderType[]);
    });
}

export default useRecentOrdersQuery;