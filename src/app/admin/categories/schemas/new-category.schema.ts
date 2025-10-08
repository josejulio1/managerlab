import z from "zod";

export const newCategorySchema = z.object({
    name: z
        .string()
        .min(3, { error: 'The name must have at least 3 characters' })
        .max(50, { error: 'Maximum 50 characters' }),
    description: z
        .string()
        .min(10, { error: 'The description must have at least 10 characters' })
        .max(300, { error: 'Maximum 300 characters' })
});

export type NewCategoryForm = z.infer<typeof newCategorySchema>;