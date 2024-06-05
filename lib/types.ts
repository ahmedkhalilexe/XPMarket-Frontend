export type productType = {
    productId: string;
    productName: string;
    productDescription: string;
    productPrice: number;
    productOldPrice: number;
    productCategoryId: number;
    ProductImages: imageType[];
};
export type imageType = {
    productImageId?: string;
    productImageUri: string;
};