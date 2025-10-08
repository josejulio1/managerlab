import z from "zod";
import { newCustomerSchema } from "./new-customer.schema";

export const editCustomerSchema = newCustomerSchema.extend({
    id: z
        .number()
        .min(1),
    image: z
        .file()
        .or(z.undefined())
});

export type EditCustomerForm = z.infer<typeof editCustomerSchema>;