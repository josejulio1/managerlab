import z from "zod";

export const newPlanSchema = z.object({
    name: z
        .string()
        .min(3, { error: 'The name must have at least 3 characters' })
        .max(50, { error: 'Maximum 50 characters' }),
    price: z
        .number()
        .min(0.01, { error: 'The price must be greater or equal than 0.1' })
        .max(10_000, { error: 'Maximum 10.000' }),
    descriptions: z
        .array(z.object({
            text: z.string()
        })),
    categoryId: z
        .number({ error: 'The category is required' })
        .min(1),
    typePaymentId: z
        .number({ error: 'The type payment is required' })
        .min(1)
});

export type NewPlanForm = z.infer<typeof newPlanSchema>;