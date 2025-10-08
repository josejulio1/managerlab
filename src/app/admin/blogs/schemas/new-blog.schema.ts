import z from "zod";

export const newBlogSchema = z.object({
    title: z
        .string()
        .min(3, { error: 'The title must have at least 3 characters' })
        .max(100, { error: 'Maximum 100 characters' }),
    shortDescription: z
        .string()
        .min(10, { error: 'The short description must have at least 10 characters' })
        .max(255, { error: 'Maximum 255 characters' }),
    description: z
        .string()
        .max(4_294_967_295, { error: 'Maximum 4.294.967.295 characters' }),
    image: z
        .file({ error: 'The image is required' })
});

export type NewBlogForm = z.infer<typeof newBlogSchema>;