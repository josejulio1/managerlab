import z from "zod";
import { newCategorySchema } from "./new-category.schema";

export const editCategorySchema = newCategorySchema.extend({
    id: z
        .number()
        .min(1)
});

export type EditCategoryForm = z.infer<typeof editCategorySchema>;