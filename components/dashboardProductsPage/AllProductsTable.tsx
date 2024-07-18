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
import Link from "next/link";
import Image from "next/image";
import useAllProductsQuery from "@/hooks/useAllProductsQuery";

type Props = {
    token: string;
};

function AllProductsTable({token}: Props) {
    const {data} = useAllProductsQuery(token);
    // TODO: Implement deleteProductMutation
    // const deleteProductMutation = useDeleteProductMutation(token);
    console.log(data)
    return <div className={" h-[600px]"}>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="hidden w-[100px] sm:table-cell">
                        <span className="sr-only">Image</span>
                    </TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead className={"hidden md:table-cell"}>
                        Created at
                    </TableHead>
                    <TableHead className={"hidden md:table-cell"}>
                        Updated at
                    </TableHead>
                    <TableHead className={"hidden md:table-cell"}>
                        Category
                    </TableHead>
                    <TableHead>
                        <span className="sr-only">Actions</span>
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data?.map(product => (<TableRow key={product.productId}>
                    <TableCell className="hidden sm:table-cell">
                        <Image
                            alt="Product image"
                            className="aspect-square rounded-md object-contain"
                            height="64"
                            src={product.ProductImages[0]?.productImageUri}
                            width="64"
                        />
                    </TableCell>
                    <TableCell>{product.productName}</TableCell>
                    <TableCell>${product.productPrice}</TableCell>
                    <TableCell
                        className={"hidden md:table-cell"}>{new Date(product.productCreatedAt).toDateString()}</TableCell>
                    <TableCell
                        className={"hidden md:table-cell"}>{new Date(product.productUpdatedAt).toDateString()}</TableCell>
                    <TableCell
                        className={"hidden md:table-cell"}>{product.productCategory.productCategoryName}</TableCell>
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
                                    href={`/dashboard/products/edit/${product.productId}`}>Edit</Link></DropdownMenuItem>
                                <DropdownMenuItem
                                    // onClick={() => deleteUserMutation.mutate(product.productId)}
                                >Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </TableCell>
                </TableRow>))}
            </TableBody>
        </Table>
    </div>;
}

export default AllProductsTable;
