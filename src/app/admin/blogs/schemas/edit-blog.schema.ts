import z from "zod";
import { newBlogSchema } from "./new-blog.schema";

export const editBlogSchema = newBlogSchema.extend({
    id: z
        .number()
        .min(1),
    image: z
        .file()
        .or(z.undefined())
});

export type EditBlogForm = z.infer<typeof editBlogSchema>;