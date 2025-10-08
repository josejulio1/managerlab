'use client';

import { FormProvider, useForm } from "react-hook-form";
import { newCategorySchema } from "../../schemas/new-category.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import CategoryForm from "./CategoryForm";
import createCategory from "../../actions/action";

export default function NewCategoryForm() {
    const form = useForm({
        resolver: zodResolver(newCategorySchema),
        defaultValues: {
            name: '',
            description: ''
        }
    });

    return (
        <FormProvider {...form}>
            <CategoryForm
                title="New Category"
                submitButtonText="Create"
                serverAction={createCategory}
            />
        </FormProvider>
    );
}