import z from "zod";

export const newTypePaymentSchema = z.object({
    name: z
        .string()
        .min(3, { error: 'The name must have at least 3 characters' })
        .max(50, { error: 'Maximum 50 characters' })
});

export type NewTypePaymentForm = z.infer<typeof newTypePaymentSchema>;