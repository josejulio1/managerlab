import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { isInt } from "validator";
import EditCategoryForm from "../components/EditCategoryForm";

interface Props {
    params: Promise<{ id: string }>
}

export default async function EditCategoryPage({ params }: Props) {
    const { id } = await params;
    if (!isInt(id)) {
        redirect('/admin/categories');
    }
    const category = await prisma.category.findUnique({
        select: {
            id: true,
            name: true,
            description: true
        },
        where: {
            id: parseInt(id)
        }
    });
    if (!category) {
        redirect('/admin/categories');
    }

    return (
        <EditCategoryForm
            category={category}
        />
    );
}