import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {Form} from "@/components/ui/form";
import {Button} from "@/components/ui/button";
import ProductDetailsInput from "@/components/addProductPage/ProductDetailsInput";
import ProductPriceInput from "@/components/addProductPage/ProductPriceInput";
import ProductCategoryInput from "@/components/addProductPage/ProductCategoryInput";
import ProductImagesInput from "@/components/addProductPage/ProductImagesInput";
import useEditProductForm from "@/hooks/useEditProductForm";
import {productType} from "@/lib/types";
import useEditProductsSubmit from "@/hooks/useEditProductsSubmit";

type Props = {
    product: productType;
};

function EditProductForm({product}: Props) {
    const auth = useSelector((state: RootState) => state.user);
    const editProductForm = useEditProductForm({
        productName: product.productName,
        productPrice: String(product.productPrice),
        productDescription: product.productDescription,
        productCategory: String(product.productCategoryId),
        productImages: {} as FileList,

    })
    const onSubmit = useEditProductsSubmit(auth.token, product.productId);
    return (<div>
        <Form {...editProductForm}>
            <form onSubmit={editProductForm.handleSubmit((data) => onSubmit(data),)}>
                <div className={"flex items-center justify-between py-3"}>
                    <h2 className={" text-2xl md:text-3xl font-bold"}>Edit a product</h2>
                    <Button type={"submit"} className={"bg-primaryColor text-white"}>Edit</Button>
                </div>
                <div className={"grid grid-cols-1 gap-5 lg:gap-10 lg:grid-cols-4 lg:px-10"}>
                    <div className={"lg:col-span-3"}>
                        <ProductDetailsInput addUserForm={editProductForm}/>
                        <div className={" flex flex-col lg:flex-row gap-5"}>
                            <ProductPriceInput addUserForm={editProductForm}/>
                            <ProductCategoryInput addUserForm={editProductForm}/>
                        </div>
                    </div>
                    <ProductImagesInput addUserForm={editProductForm}/>
                </div>
            </form>
        </Form>
    </div>);
}

export default EditProductForm;
