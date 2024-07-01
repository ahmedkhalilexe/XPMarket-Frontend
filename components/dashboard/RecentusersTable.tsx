import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import useRecentUsersQuery from "@/hooks/useRecentUsersQuery";

type Props = {
    token: string
};

function RecentUsersTable({token}: Props) {

    const {data, isLoading, isError} = useRecentUsersQuery(token);

    return <div
        className={"w-4/5 flex flex-col gap-6 py-4 px-6 col-span-3 h-fit rounded-lg border-2 border-gray-300 bg-white drop-shadow-md"}>
        <h2 className={" font-medium text-lg"}>Recent users</h2>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className={" w-[400px]"}>Id</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>First name</TableHead>
                    <TableHead>Last name</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data?.map((user) => (
                    <TableRow key={user.userId}>
                        <TableCell>{user.userId}</TableCell>
                        <TableCell>{user.userEmail}</TableCell>
                        <TableCell>{user.userFirstName}</TableCell>
                        <TableCell>{user.userLastName}</TableCell>
                    </TableRow>))}
            </TableBody>
        </Table>
    </div>;
}

export default RecentUsersTable;
