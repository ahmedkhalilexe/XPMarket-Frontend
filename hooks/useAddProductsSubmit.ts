import useAddProductMutation from "@/hooks/useAddProductMutation";
import {TAddProduct} from "@/lib/types";
import uploadProductImages from "@/lib/uploadProductImages";

const useAddProductsSubmit = (token: string) => {
    const {isError, mutate, data} = useAddProductMutation(token);
    return async (data: TAddProduct) => {
        const images = data.productImages;
        const imgUrls = await uploadProductImages(images);
        try {
            mutate({
                productName: data.productName,
                productDescription: data.productDescription,
                productPrice: Number(data.productPrice),
                productCategoryId: Number(data.productCategory),
                productImagesUri: imgUrls
            })
        } catch (e) {
            console.log(e);
        }
    }

}

export default useAddProductsSubmit;