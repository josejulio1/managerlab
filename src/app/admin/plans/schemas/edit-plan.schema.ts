import z from "zod";
import { newPlanSchema } from "./new-plan.schema";

export const editPlanSchema = newPlanSchema.extend({
    id: z
        .number()
        .min(1)
});

export type EditPlanForm = z.infer<typeof editPlanSchema>;