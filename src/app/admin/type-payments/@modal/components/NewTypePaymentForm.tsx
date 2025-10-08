'use client';

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newTypePaymentSchema } from "../../schemas/new-type-payment.schema";
import { createTypePayment } from "../../actions/action";
import TypePaymentForm from "./TypePaymentForm";

export default function NewTypePaymentForm() {
    const form = useForm({
        resolver: zodResolver(newTypePaymentSchema),
        defaultValues: {
            name: ''
        }
    });

    return (
        <FormProvider {...form}>
            <TypePaymentForm
                title="New Type Payment"
                submitButtonText="Create"
                serverAction={createTypePayment}
            />
        </FormProvider>
    );
}