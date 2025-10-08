'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import CustomerForm from "./CustomerForm";
import { Category } from "../../../../../../generated/prisma";
import { updateCustomer } from "../../actions/action";
import { editCustomerSchema } from "../../schemas/edit-customer.schema";
import { CustomerCategoriesSelectDto } from "../../adapters/customer-categories-select.adapter";

interface Props {
    customer: CustomerCategoriesSelectDto
    categories: Array<Pick<Category, 'id' | 'name'>>
}

export default function EditCustomerForm({ customer, categories }: Props) {
    const form = useForm({
        resolver: zodResolver(editCustomerSchema),
        defaultValues: {
            id: customer.id,
            name: customer.name,
            image: undefined,
            categories: customer.categories
        }
    });

    return (
        <FormProvider {...form}>
            <CustomerForm
                title={customer.name}
                submitButtonText="Update"
                categories={categories}
                initialImageUrl={customer.image}
                serverAction={updateCustomer}
            />
        </FormProvider>
    );
}