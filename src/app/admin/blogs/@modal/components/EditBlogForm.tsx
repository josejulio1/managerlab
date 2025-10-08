'use client';

import { FormProvider, useForm } from "react-hook-form";
import { Blog } from "../../../../../../generated/prisma";
import { zodResolver } from "@hookform/resolvers/zod";
import { editBlogSchema } from "../../schemas/edit-blog.schema";
import BlogForm from "./BlogForm";
import { updateBlog } from "../../actions/action";

interface Props {
    blog: Pick<Blog, 'id' | 'title' | 'shortDescription' | 'description' | 'image'>
}

export default function EditBlogForm({ blog }: Props) {
    const form = useForm({
        resolver: zodResolver(editBlogSchema),
        defaultValues: {
            id: blog.id,
            title: blog.title,
            shortDescription: blog.shortDescription,
            description: blog.description,
            image: undefined
        }
    });

    return (
        <FormProvider {...form}>
            <BlogForm
                title={blog.title}
                submitButtonText="Update"
                initialImageUrl={blog.image}
                serverAction={updateBlog}
            />
        </FormProvider>
    );
}