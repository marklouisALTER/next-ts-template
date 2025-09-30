import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email("Invalid Email.")
        .min(2, "Email is required.")
        .max(70, "Email must be less than 70 characters."),
    password: z.string()
        .min(8, "Password must be atleast 8 characters."),
})