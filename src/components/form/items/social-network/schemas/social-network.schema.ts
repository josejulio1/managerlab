import z from "zod";

export const socialNetworkSchema = z.object({
    id: z
        .number()
        .min(1),
    icon: z
        .string(),
    url: z
        .url(),
    username: z
        .string()
        .or(z.undefined())
});

export type SocialNetworkDto = z.infer<typeof socialNetworkSchema>;