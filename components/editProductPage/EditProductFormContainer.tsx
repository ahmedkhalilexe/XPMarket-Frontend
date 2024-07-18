import EditProductForm from "@/components/editProductPage/EditProductForm";
import useProductQuery from "@/hooks/useProductQuery";

type Props = {
    productId: string;
    token: string;
};

function EditProductFormContainer({productId, token}: Props) {
    const {data} = useProductQuery(productId, token);
    return data ? <EditProductForm product={data}/> : null;
}

export default EditProductFormContainer;
