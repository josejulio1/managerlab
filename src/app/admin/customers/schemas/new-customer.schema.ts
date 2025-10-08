import z from "zod";

export const newCustomerSchema = z.object({
    name: z
        .string()
        .min(3, { error: 'The name must have at least 3 characters' })
        .max(100, { error: 'Maximum 100 characters' }),
    image: z
        .file({ error: 'The image is required' }),
    categories: z
        .array(z.number())
        .min(1, { error: 'At least one category is required' })
});

export type NewCustomerForm = z.infer<typeof newCustomerSchema>;