"use client"
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {MoreHorizontal} from "lucide-react";
import useAllUsersQuery from "@/hooks/useAllUsersQuery";
import {useAppSelector} from "@/hooks/reduxHooks";
import Link from "next/link";
import useDeleteUserMutation from "@/hooks/useDeleteUserMutation";

type Props = {
    token: string;
};

function AllUsersTable({token}: Props) {
    const {data} = useAllUsersQuery(token);
    const deleteUserMutation = useDeleteUserMutation(token);
    return <div className={" h-[600px]"}>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[400px]">Id</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead className={"hidden md:table-cell"}>First name</TableHead>
                    <TableHead className={"hidden md:table-cell"}>Last name</TableHead>
                    <TableHead className={"hidden md:table-cell"}>
                        Created at
                    </TableHead>
                    <TableHead className={"hidden md:table-cell"}>
                        Updated at
                    </TableHead>
                    <TableHead className={"hidden md:table-cell"}>
                        Role
                    </TableHead>
                    <TableHead>
                        <span className="sr-only">Actions</span>
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data?.map(user => (<TableRow key={user.userId}>
                    <TableCell>{user.userId}</TableCell>
                    <TableCell>{user.userEmail}</TableCell>
                    <TableCell className={"hidden md:table-cell"}>{user.userFirstName}</TableCell>
                    <TableCell className={"hidden md:table-cell"}>{user.userLastName}</TableCell>
                    <TableCell
                        className={"hidden md:table-cell"}>{new Date(user.userCreatedAt).toDateString()}</TableCell>
                    <TableCell
                        className={"hidden md:table-cell"}>{new Date(user.userUpdatedAt).toDateString()}</TableCell>
                    <TableCell className={"hidden md:table-cell"}>{user.userRole.userRoleName}</TableCell>
                    <TableCell>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    aria-haspopup="true"
                                    size="icon"
                                    variant="ghost"
                                >
                                    <MoreHorizontal className="h-4 w-4"/>
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuItem><Link
                                    href={`/dashboard/users/edit/${user.userId}`}>Edit</Link></DropdownMenuItem>
                                <DropdownMenuItem
                                    onClick={() => deleteUserMutation.mutate(user.userId)}>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </TableCell>
                </TableRow>))}
            </TableBody>
        </Table>
    </div>;
}

export default AllUsersTable;
