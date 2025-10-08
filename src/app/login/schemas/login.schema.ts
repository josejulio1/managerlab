import z from "zod";

export const loginSchema = z.object({
    email: z
        .email({ error: 'The email have wrong format' })
        .max(320, { error: 'Maximum 320 characters' }),
    password: z
        .string()
        .min(8, { error: 'The password must have at least 8 characters' })
        .max(16, { error: 'Maximum 16 characters' })
});

export type LoginForm = z.infer<typeof loginSchema>;