'use server';

import { revalidatePath } from "next/cache";
import { Category } from "../../../../../generated/prisma";
import { prisma } from "@/lib/prisma";
import slug from "slug";
import { NewCategoryForm, newCategorySchema } from "../schemas/new-category.schema";
import { EditCategoryForm, editCategorySchema } from "../schemas/edit-category.schema";
import ActionResponse from "../../interfaces/action";
import { StatusCodes } from "http-status-codes";

const PATH = '/admin/categories';

export default async function createCategory(data: NewCategoryForm): Promise<ActionResponse> {
    const { success, error } = newCategorySchema.safeParse(data);
    if (!success) {
        return {
            message: error.message,
            status: StatusCodes.BAD_REQUEST
        }
    }

    const { name, description } = data;
    const categoryExists = await prisma.category.findFirst({
        select: {
            name: true
        },
        where: {
            name
        }
    });
    if (categoryExists) {
        return {
            message: `The category "${categoryExists.name}" exists. Use other name`,
            status: StatusCodes.BAD_REQUEST
        }
    }

    await prisma.category.create({
        data: {
            name,
            description,
            slug: slug(name)
        }
    });

    revalidatePath(PATH);
    return {
        message: 'Category created successfully',
        status: StatusCodes.CREATED
    }
}

export async function updateCategory(data: EditCategoryForm): Promise<ActionResponse> {
    const { success, error } = editCategorySchema.safeParse(data);
    if (!success) {
        return {
            message: error.message,
            status: StatusCodes.BAD_REQUEST
        }
    }

    const { id, name, description } = data;
    const categoryExists = await prisma.category.findFirst({
        select: {
            name: true
        },
        where: {
            name,
            NOT: {
                id
            }
        }
    });
    if (categoryExists) {
        return {
            message: `The category "${categoryExists.name}" exists. Use other name`,
            status: StatusCodes.BAD_REQUEST
        }
    }

    await prisma.category.update({
        data: {
            name,
            slug: slug(name),
            description
        },
        where: {
            id
        }
    });

    revalidatePath(PATH);
    return {
        message: 'Category updated succesfully',
        status: StatusCodes.OK
    }
}

export async function deleteCategory(id: Category['id']): Promise<ActionResponse> {
    const category = await prisma.category.findUnique({
        select: {
            plans: {
                select: {
                    name: true
                }
            },
            customers: {
                select: {
                    customerId: true
                }
            }
        },
        where: {
            id
        }
    });
    if (!category) {
        return {
            message: 'Category not found',
            status: StatusCodes.NOT_FOUND
        }
    }
    if (category.plans.length > 0) {
        return {
            message: 'Plans found. Delete them first',
            status: StatusCodes.BAD_REQUEST
        }
    }
    if (category.customers.length > 0) {
        return {
            message: 'Customers found. Delete them first',
            status: StatusCodes.BAD_REQUEST
        }
    }

    await prisma.category.delete({
        where: {
            id
        }
    });
    
    revalidatePath(PATH);
    return {
        message: 'Category deleted successfully',
        status: StatusCodes.OK
    }
}