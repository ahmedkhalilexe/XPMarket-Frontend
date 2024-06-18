import {z} from "zod";

export const zodSchemas = {
    signInSchema : z.object({
        userEmail: z.string().email(),
        userPassword: z.string().min(8, "Password must be at least 8 characters long")
    }),
}