'use client';

import { FormProvider, useForm } from "react-hook-form";
import BlogForm from "./BlogForm";
import { createBlog } from "../../actions/action";
import { zodResolver } from "@hookform/resolvers/zod";
import { newBlogSchema } from "../../schemas/new-blog.schema";

export default function NewBlogForm() {
    const form = useForm({
        resolver: zodResolver(newBlogSchema),
        defaultValues: {
            title: '',
            shortDescription: '',
            description: '',
            image: undefined
        }
    });

    return (
        <FormProvider {...form}>
            <BlogForm
                title="New Blog"
                submitButtonText="Create"
                serverAction={createBlog}
            />
        </FormProvider>
    );
}