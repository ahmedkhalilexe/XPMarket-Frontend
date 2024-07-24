import {CircleUserRound} from "lucide-react";

import calculateOrderPrice from "@/lib/calculateOrderPrice";
import useRecentOrdersQuery from "@/hooks/useRecentOrdersQuery";

type Props = {
    token: string
};

function RecentOrdersTable({token}: Props) {

    const {data, isLoading, isError} = useRecentOrdersQuery(token);

    return (<div
        className={"flex w-full lg:w-1/4  flex-col gap-6 py-4 px-6 rounded-lg border-2 border-gray-300 bg-white drop-shadow-md"}>
        <h2 className={" font-medium text-lg"}>Recent orders</h2>
        {data?.map((order) =>
            (<div key={order.orderId} className={"flex items-center justify-between max-w-full gap-2"}>
                <div className={" flex items-center gap-3"}>
                    <CircleUserRound size={32} className={"w-8 h-8 flex-shrink-0"}/>
                    <div>
                        <h2 className={" text-md "}>{order.user.userFirstName + " " + order.user.userLastName}</h2>
                        <h2 className={" text-md text-gray-500 break-all"}>{order.user.userEmail}</h2>
                    </div>
                </div>
                <h2 className={" text-lg font-medium"}>${calculateOrderPrice(order)}</h2>
            </div>)
        )}

    </div>);
}

export default RecentOrdersTable;
