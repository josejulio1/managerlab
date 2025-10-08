import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { isInt } from "validator";
import EditBlogForm from "../components/EditBlogForm";

interface Props {
    params: Promise<{ id: string }>
}

export default async function EditBlogPage({ params }: Props) {
    const { id } = await params;
    if (!isInt(id)) {
        redirect('/admin/blogs');
    }
    const blog = await prisma.blog.findUnique({
        select: {
            id: true,
            title: true,
            shortDescription: true,
            description: true,
            image: true
        },
        where: {
            id: parseInt(id)
        }
    });
    if (!blog) {
        redirect('/admin/blogs');
    }

    return (
        <EditBlogForm
            blog={blog}
        />
    );
}