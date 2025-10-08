import z from "zod";
import { newValorationSchema } from "./new-valoration.schema";

export const editValorationSchema = newValorationSchema.extend({
    id: z
        .number()
        .min(1)
});

export type EditValorationForm = z.infer<typeof editValorationSchema>;