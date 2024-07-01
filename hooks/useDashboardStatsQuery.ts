import {useQuery} from "react-query";
import {privateAxiosInstance} from "@/lib/axios";

const useDashboardStatsQuery = (token: string) => {
    return useQuery("dashboardStats", async () => {
        const totalRevenue = await privateAxiosInstance.get("order/getTotalRevenue", {
            headers: {
                Authorization: `Bearer ${token}`
            }

        }).then((res) => res.data as number);
        const allUsersCount = await privateAxiosInstance.get("user/getAllUsersCount", {
            headers: {
                Authorization: `Bearer ${token}`
            }

        }).then((res) => res.data as number);
        const totalOrders = await privateAxiosInstance.get("order/getTotalOrders", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => res.data as number);
        const totalProducts = await privateAxiosInstance.get("product/getTotalProducts", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => res.data as number);
        return {allUsersCount, totalRevenue, totalOrders, totalProducts};
    });
}
export default useDashboardStatsQuery;