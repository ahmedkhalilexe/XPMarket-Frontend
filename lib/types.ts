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

export type userTableType = {
    userId: string;
    userFirstName: string;
    userLastName: string;
    userEmail: string;
    userCreatedAt: string;
    userUpdatedAt: string;
    userRole: {
        userRoleId: number;
        userRoleName: string;
    }
};

export interface productTableType extends productType {
    productCreatedAt: string;
    productUpdatedAt: string;
    productCategory: {
        productCategoryId: number;
        productCategoryName: string;
    }
}

export type TAddProductPost = {
    productName: string;
    productDescription: string;
    productPrice: number;
    productCategoryId: number;
    productImagesUri: string[];
};

export type TEditProductPost = {
    productId: string;
    productName: string;
    productDescription: string;
    productPrice: number;
    productCategoryId: number;
    productImagesUri: string[];
};

export interface TCreateOrder extends productType {
    quantity: number;
}

export type TSignIn = z.infer<typeof zodSchemas.signInSchema>;
export type TSignUp = z.infer<typeof zodSchemas.signUpSchema>;
export type TAddUser = z.infer<typeof zodSchemas.addUserSchema>;
export type TEditUser = z.infer<typeof zodSchemas.editUserSchema>;
export type TUpdateAccount = z.infer<typeof zodSchemas.updateAccountSchema>;
export type TAddProduct = z.infer<typeof zodSchemas.addProductSchema>;
export type TEditProduct = z.infer<typeof zodSchemas.editProductSchema>;