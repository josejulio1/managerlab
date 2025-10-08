'use client';

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newValorationSchema } from "../../../schemas/new-valoration.schema";
import { Customer } from "../../../../../../../generated/prisma";
import ValorationForm from "./ValorationForm";
import { createValoration } from "../../../actions/action";

interface Props {
    customers: Array<Pick<Customer, 'id' | 'name'>>
}

export default function NewValorationForm({ customers }: Props) {
    const form = useForm({
        resolver: zodResolver(newValorationSchema),
        defaultValues: {
            review: '',
            stars: 0,
            customerId: 0
        }
    });

    return (
        <FormProvider {...form}>
            <ValorationForm
                title="New Valoration"
                submitButtonText="Create"
                customers={customers}
                serverAction={createValoration}
            />
        </FormProvider>
    );
}