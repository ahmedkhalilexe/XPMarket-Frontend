import {Form,} from "@/components/ui/form";
import {Button} from "@/components/ui/button";
import useAddProductForm from "@/hooks/useAddProductForm";
import useAddProductsSubmit from "@/hooks/useAddProductsSubmit";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import ProductDetailsAddProductForm from "@/components/addProductPage/ProductDetailsInput";
import ProductPriceInput from "@/components/addProductPage/ProductPriceInput";
import ProductCategoryInput from "@/components/addProductPage/ProductCategoryInput";
import ProductImagesInput from "@/components/addProductPage/ProductImagesInput";

type Props = {};

function AddProductForm(props: Props) {
    const auth = useSelector((state: RootState) => state.user);
    const addUserForm = useAddProductForm()
    const onSubmit = useAddProductsSubmit(auth.token);
    return (<div>
        <Form {...addUserForm}>
            <form onSubmit={addUserForm.handleSubmit((data) => onSubmit(data),)}>
                <div className={"flex items-center justify-between py-3"}>
                    <h2 className={" text-2xl md:text-3xl font-bold"}>Add a product</h2>
                    <Button type={"submit"} className={"bg-primaryColor text-white"}>Add</Button>
                </div>
                <div className={"grid grid-cols-1 gap-5 lg:gap-10 lg:grid-cols-4 lg:px-10"}>
                    <div className={"lg:col-span-3"}>
                        <ProductDetailsAddProductForm addUserForm={addUserForm}/>
                        <div className={" flex flex-col lg:flex-row gap-5"}>
                            <ProductPriceInput addUserForm={addUserForm}/>
                            <ProductCategoryInput addUserForm={addUserForm}/>
                        </div>
                    </div>
                    <ProductImagesInput addUserForm={addUserForm}/>

                </div>
            </form>
        </Form>
    </div>);
}

export default AddProductForm;
