import z from "zod";
import { newUserSchema } from "./new-user.schema";

export const editUserSchema = newUserSchema.extend({
    id: z
        .number()
        .min(1),
    image: z
        .file()
        .or(z.undefined())
});

export type EditUserForm = z.infer<typeof editUserSchema>;