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
}