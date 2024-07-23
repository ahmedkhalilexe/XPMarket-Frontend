"use client"
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {useQuery} from "react-query";
import {AxiosError} from "axios";
import {orderType} from "@/lib/types";
import calculateOrderPrice from "@/lib/calculateOrderPrice";
import {getRefreshToken} from "@/redux/user/userSlice";
import {useAppDispatch} from "@/hooks/reduxHooks";
import {privateAxiosInstance} from "@/lib/axios";


function OrdersSection() {
    const auth = useSelector((state: RootState) => state.user);
    const dispatch = useAppDispatch();
    const {data, isLoading, isError, error} = useQuery({
        queryKey: "orders",
        queryFn: async () => {
            return privateAxiosInstance.get("/order/getAllOrdersByUser", {
                headers: {
                    Authorization: `Bearer ${auth.token}`,
                },
            }).then((res => res.data as orderType[]))
        },
        onError: async (error: AxiosError) => {
            if (error.response?.status === 403) {
                await dispatch(getRefreshToken());
            }
        },
    });
    return (<div className={"px-3 min-h-fit h-[600px]"}>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[400px]">Order ID</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data?.map((order) => (
                    <TableRow key={order.orderId}>
                        <TableCell className="font-medium">{order.orderId}</TableCell>
                        <TableCell>{order.orderStatus}</TableCell>
                        <TableCell>{new Date(order.createdAt).toDateString()}</TableCell>
                        <TableCell className="text-right">${calculateOrderPrice(order)}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </div>);
}

export default OrdersSection;
