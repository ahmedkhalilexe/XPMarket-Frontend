import {z} from "zod";
import {zodSchemas} from "@/lib/zod";

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
export type userType = {
    userId: string;
    userFirstName: string;
    userLastName: string;
    userEmail: string;
    userRoleId: number;
};
export type authType = {
    isAuth: boolean;
    token: string;
    user: userType;
    status?: "idle" | "loading" | "success" | "failed";
};
export type cartItemType = {
    userCartProductId: string,
    product: productType,
    userCartProductQuantity: number,
};
type orderedProductType = {
    orderedItemQuantity: number;
    product: {
        productId: string;
        productPrice: number
    };
};
export type orderType = {
    orderId: string;
    orderStatus: string;
    createdAt: string;
    updatedAt: number;
    userId: string;
    OrderedProducts: orderedProductType[];
};

export interface recentOrderType extends orderType {
    user: userType;
}

export type TSignIn = z.infer<typeof zodSchemas.signInSchema>;
export type TSignUp = z.infer<typeof zodSchemas.signUpSchema>;
export type TUpdateAccount = z.infer<typeof zodSchemas.updateAccountSchema>;
