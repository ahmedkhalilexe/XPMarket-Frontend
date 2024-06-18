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
    userRole: number ;
};
export type authType = {
    isAuth: boolean;
    token: string;
    user: userType;
    status?: "idle" | "loading" | "success" | "failed";
};
export type TSignIn = z.infer<typeof zodSchemas.signInSchema>;
