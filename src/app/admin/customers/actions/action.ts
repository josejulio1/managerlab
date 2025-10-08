'use server';

import { prisma } from "@/lib/prisma";
import { Customer, Prisma } from "../../../../../generated/prisma";
import { revalidatePath } from "next/cache";
import Envs from "@/config/Envs";
import path from "path";
import { NewCustomerForm, newCustomerSchema } from "../schemas/new-customer.schema";
import { EditCustomerForm, editCustomerSchema } from "../schemas/edit-customer.schema";
import ActionResponse from "../../interfaces/action";
import { StatusCodes } from "http-status-codes";
import FileManager from "@/services/FileManager";

const PATH = '/admin/customers';

export async function createCustomer(data: NewCustomerForm): Promise<ActionResponse> {
    const { success, error } = newCustomerSchema.safeParse(data);
    if (!success) {
        return {
            message: error.message,
            status: StatusCodes.BAD_REQUEST
        }
    }

    const { name, image, categories } = data;
    const customerExists = await prisma.customer.findUnique({
        select: {
            name: true
        },
        where: {
            name
        }
    });
    if (customerExists) {
        return {
            message: `The customer "${customerExists.name}" exists. Use other name`,
            status: StatusCodes.BAD_REQUEST
        }
    }

    const { file } = await FileManager.upload(Envs().IMAGES_CUSTOMERS_FOLDER, image);
    const { id } = await prisma.customer.create({
        data: {
            name,
            image: file
        },
        select: {
            id: true
        }
    });
    await prisma.categoryCustomer.createMany({
        data: categories.map(categoryId => ({
            categoryId: categoryId as number,
            customerId: id
        }))
    });

    revalidatePath(PATH);
    return {
        message: 'Customer created successfully',
        status: StatusCodes.CREATED
    }
}

export async function updateCustomer(data: EditCustomerForm): Promise<ActionResponse> {
    const { success, error } = editCustomerSchema.safeParse(data);
    if (!success) {
        return {
            message: error.message,
            status: StatusCodes.BAD_REQUEST
        }
    }
    
    const { id, name, image, categories } = data;
    const customerExists = await prisma.customer.findUnique({
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
    if (customerExists) {
        return {
            message: `The customer "${customerExists.name}" exists. Use other name`,
            status: StatusCodes.BAD_REQUEST
        }
    }

    const customerImage = await prisma.customer.findUnique({
        select: {
            image: true
        },
        where: {
            id
        }
    });
    if (!customerImage) {
        return {
            message: 'Customer not found',
            status: StatusCodes.NOT_FOUND
        }
    }
    
    const customerData: Prisma.CustomerUpdateInput = {
        name
    };
    if (image) {
        const { IMAGES_CUSTOMERS_FOLDER } = Envs();
        const isDeleted = await FileManager.delete(path.join(IMAGES_CUSTOMERS_FOLDER, customerImage.image));
        if (!isDeleted) {
            return {
                message: 'The image could not be deleted. Contact the administrator',
                status: StatusCodes.INTERNAL_SERVER_ERROR
            }
        }
        const { file } = await FileManager.upload(IMAGES_CUSTOMERS_FOLDER, image);
        customerData['image'] = file;
    }
    await prisma.customer.update({
        data: customerData,
        where: {
            id
        }
    });
    await prisma.categoryCustomer.deleteMany({
        where: {
            customerId: id
        }
    });
    await prisma.categoryCustomer.createMany({
        data: categories.map(categoryId => ({
            categoryId,
            customerId: id
        }))
    });

    revalidatePath(PATH);
    return {
        message: 'Customer updated successfully',
        status: StatusCodes.OK
    }
}

export async function deleteCustomer(id: Customer['id']): Promise<ActionResponse> {
    const customer = await prisma.customer.findUnique({
        select: {
            image: true
        },
        where: {
            id
        }
    });
    if (!customer) {
        return {
            message: 'Customer not found',
            status: StatusCodes.NOT_FOUND
        }
    }

    // Delete image
    const isDeleted = await FileManager.delete(path.join(Envs().IMAGES_CUSTOMERS_FOLDER, customer.image));
    if (!isDeleted) {
        return {
            message: 'The image could not be deleted. Contact the administrator',
            status: StatusCodes.INTERNAL_SERVER_ERROR
        }
    }

    await prisma.customer.delete({
        where: {
            id
        }
    });

    revalidatePath(PATH);
    return {
        message: 'Customer deleted successfully',
        status: StatusCodes.OK
    }
}