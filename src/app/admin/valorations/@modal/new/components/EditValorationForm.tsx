'use client';

import { FormProvider, useForm } from "react-hook-form";
import { Customer, Valoration } from "../../../../../../../generated/prisma";
import { zodResolver } from "@hookform/resolvers/zod";
import { editValorationSchema } from "../../../schemas/edit-valoration.schema";
import ValorationForm from "./ValorationForm";
import { updateValoration } from "../../../actions/action";

interface Props {
    valoration: Pick<Valoration, 'id' | 'review' | 'stars' | 'customerId'>
    customers: Array<Pick<Customer, 'id' | 'name'>>
}

export default function EditValorationForm({ valoration, customers }: Props) {
    const form = useForm({
        resolver: zodResolver(editValorationSchema),
        defaultValues: {
            id: valoration.id,
            review: valoration.review,
            stars: valoration.stars,
            customerId: valoration.customerId
        }
    });

    return (
        <FormProvider {...form}>
            <ValorationForm
                title="Edit Valoration"
                submitButtonText="Update"
                customers={customers}
                serverAction={updateValoration}
            />
        </FormProvider>
    );
}