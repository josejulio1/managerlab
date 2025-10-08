import z from "zod";

export const contactFormSchema = z.object({
    name: z
        .string()
        .min(3, { error: 'The name must have at least 3 characters' }),
    email: z
        .email({ error: 'The email have wrong format' }),
    subject: z
        .string()
        .min(5, { error: 'The subject must have at least 5 characters' }),
    message: z
        .string()
        .min(10, { error: 'The message must have at least 10 characters' })
});

export type ContactForm = z.infer<typeof contactFormSchema>;