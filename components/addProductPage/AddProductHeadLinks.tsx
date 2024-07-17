import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";

type Props = {};

function AddProductHeadLinks(props: Props) {

    return (<Breadcrumb className={"px-3"}>
        <BreadcrumbList>
            <BreadcrumbItem>
                <BreadcrumbLink href={'/dashboard'} className={" text-lg"}>Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator/>
            <BreadcrumbItem>
                <BreadcrumbLink href={'/dashboard/products'} className={" text-lg"}>Products</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator/>
            <BreadcrumbItem>
                <BreadcrumbPage className={" text-lg text-primaryColor"}>Add</BreadcrumbPage>
            </BreadcrumbItem>
        </BreadcrumbList>
    </Breadcrumb>);
};

export default AddProductHeadLinks;
