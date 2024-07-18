import {TEditProduct} from "@/lib/types";
import uploadProductImages from "@/lib/uploadProductImages";
import useEditProductMutation from "@/hooks/useEditProductMutation";

const useEditProductsSubmit = (token: string, productId: string) => {
    const {mutate} = useEditProductMutation(token);
    return async (data: TEditProduct) => {
        const images = data.productImages;
        const imgUrls = await uploadProductImages(images);
        try {
            mutate({
                productId,
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

export default useEditProductsSubmit;