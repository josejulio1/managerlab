import z from "zod";
import { newTypePaymentSchema } from "./new-type-payment.schema";

export const editTypePaymentSchema = newTypePaymentSchema.extend({
    id: z
        .number()
        .min(1)
});

export type EditTypePaymentForm = z.infer<typeof editTypePaymentSchema>;