import { socialNetworkSchema } from "@/components/form/items/social-network/schemas/social-network.schema";
import z from "zod";

export const newUserSchema = z.object({
    name: z
        .string()
        .min(3, { error: 'The name must have at least 3 characters' })
        .max(100, { error: 'Maximum 100 characters' }),
    specialty: z
        .string()
        .min(3, { error: 'The specialty must have at least 3 characters' })
        .max(100, { error: 'Maximum 100 characters' }),
    socialNetworks: z
        .array(socialNetworkSchema),
    image: z
        .file({ error: 'The image is required' })
});

export type NewUserForm = z.infer<typeof newUserSchema>;