'use client';

import { FormProvider, useForm } from "react-hook-form";
import { createUser } from "../../actions/action";
import UserForm from "./UserForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { newUserSchema } from "../../schemas/new-user.schema";
import { SocialNetworkDto } from "@/components/form/items/social-network/schemas/social-network.schema";

interface Props {
    socialNetworks: Array<SocialNetworkDto>
}

export default function NewUserForm({ socialNetworks }: Props) {
    const form = useForm({
        resolver: zodResolver(newUserSchema),
        defaultValues: {
            name: '',
            specialty: '',
            socialNetworks,
            image: undefined
        }
    });

    return (
        <FormProvider {...form}>
            <UserForm
                title="New User"
                submitButtonText="Create"
                serverAction={createUser}
            />
        </FormProvider>
    );
}