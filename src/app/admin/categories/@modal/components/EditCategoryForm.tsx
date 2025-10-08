'use client';

import { FormProvider, useForm } from "react-hook-form";
import { Category } from "../../../../../../generated/prisma";
import CategoryForm from "./CategoryForm";
import { editCategorySchema } from "../../schemas/edit-category.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateCategory } from "../../actions/action";

interface Props {
    category: Pick<Category, 'id' | 'name' | 'description'>
}

export default function EditCategoryForm({ category }: Props) {
    const form = useForm({
        resolver: zodResolver(editCategorySchema),
        defaultValues: {
            id: category.id,
            name: category.name,
            description: category.description
        }
    });

    return (
        <FormProvider {...form}>
            <CategoryForm
                title={category.name}
                submitButtonText="Update"
                serverAction={updateCategory}
            />
        </FormProvider>
    );
}