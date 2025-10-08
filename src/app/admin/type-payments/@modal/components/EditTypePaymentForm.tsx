'use client';

import { FormProvider, useForm } from "react-hook-form";
import TypePaymentForm from "./TypePaymentForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { editTypePaymentSchema } from "../../schemas/edit-type-payment.schema";
import { TypePayment } from "../../../../../../generated/prisma";
import { updateTypePayment } from "../../actions/action";

interface Props {
    typePayment: Pick<TypePayment, 'id' | 'name'>
}

export default function EditTypePaymentForm({ typePayment }: Props) {
    const form = useForm({
        resolver: zodResolver(editTypePaymentSchema),
        defaultValues: {
            id: typePayment.id,
            name: typePayment.name
        }
    });

    return (
        <FormProvider {...form}>
            <TypePaymentForm
                title={typePayment.name}
                submitButtonText="Update"
                serverAction={updateTypePayment}
            />
        </FormProvider>
    );
}