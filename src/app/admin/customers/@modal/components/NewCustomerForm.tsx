'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import CustomerForm from "./CustomerForm";
import { Category } from "../../../../../../generated/prisma";
import { newCustomerSchema } from "../../schemas/new-customer.schema";
import { createCustomer } from "../../actions/action";

interface Props {
    categories: Array<Pick<Category, 'id' | 'name'>>
}

export default function NewCustomerForm({ categories }: Props) {
    const form = useForm({
        resolver: zodResolver(newCustomerSchema),
        defaultValues: {
            name: '',
            image: undefined,
            categories: []
        }
    });

    return (
        <FormProvider {...form}>
            <CustomerForm
                title="New Customer"
                submitButtonText="Create"
                categories={categories}
                serverAction={createCustomer}
            />
        </FormProvider>
    );
}