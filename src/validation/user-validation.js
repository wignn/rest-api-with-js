import z from 'zod'

export const ucv = z.object({
    username: z.string().min(1, "name must be at least 3 char"),
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long")
});