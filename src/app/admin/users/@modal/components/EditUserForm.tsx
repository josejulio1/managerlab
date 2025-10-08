'use client';

import { User } from "../../../../../../generated/prisma";
import UserForm from "./UserForm";
import { updateUser } from "../../actions/action";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { editUserSchema } from "../../schemas/edit-user.schema";
import { SocialNetworkDto } from "@/components/form/items/social-network/schemas/social-network.schema";

interface Props {
    user: Pick<User, 'id' | 'name' | 'specialty' | 'image'>
    socialNetworks: Array<SocialNetworkDto>
}

export default function EditUserForm({ user, socialNetworks }: Props) {
    const form = useForm({
        resolver: zodResolver(editUserSchema),
        defaultValues: {
            id: user.id,
            name: user.name,
            specialty: user.specialty,
            socialNetworks,
            image: undefined
        }
    });

    return (
        <FormProvider {...form}>
            <UserForm
                title={user.name}
                submitButtonText="Update"
                initialImageUrl={user.image}
                serverAction={updateUser}
            />
        </FormProvider>
    );
}