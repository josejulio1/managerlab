import z from "zod";

export const newValorationSchema = z.object({
    review: z
        .string()
        .min(10, { error: 'The review must have at least 10 characters' })
        .max(1000, { error: 'Maximum 1000 characters' }),
    stars: z
        .number()
        .min(1, { error: 'The stars must have at least 1' })
        .max(5, { error: 'Maximum 5 stars' }),
    customerId: z
        .number()
        .min(1, { error: 'Customer is required' })
});

export type NewValorationForm = z.infer<typeof newValorationSchema>;