import {z} from "zod";

export const zodSchemas = {
    signInSchema: z.object({
        userEmail: z.string().email(),
        userPassword: z.string().min(8, "Password must be at least 8 characters long")
    }),
    signUpSchema: z.object({
        userEmail: z.string().email(),
        userPassword: z.string().min(8, "Password must be at least 8 characters long"),
        userFirstName: z.string(),
        userLastName: z.string()
    }),
    updateAccountSchema: z.object({
        userEmail: z.string().email(),
        userFirstName: z.string(),
        userLastName: z.string()
    }),
    addUserSchema: z.object({
        userEmail: z.string().email(),
        userPassword: z.string().min(8, "Password must be at least 8 characters long"),
        userFirstName: z.string().min(1),
        userLastName: z.string().min(1),
        userRoleId: z.string().min(1)
    }),
    editUserSchema: z.object({
        userId: z.string().optional(),
        userEmail: z.string().email(),
        userFirstName: z.string().min(1),
        userLastName: z.string().min(1),
        userRole: z.object({
            userRoleId: z.number().min(1),
        }),
    }),
    addProductSchema: z.object({
        productName: z.string().min(1),
        productPrice: z.string().min(1),
        productDescription: z.string().min(1),
        productCategory: z.string().min(1),
        productImages: z.instanceof(FileList),
    })
};