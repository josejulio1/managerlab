'use server';

import { prisma } from "@/lib/prisma";
import { TypePayment } from "../../../../../generated/prisma";
import { revalidatePath } from "next/cache";
import { NewTypePaymentForm, newTypePaymentSchema } from "../schemas/new-type-payment.schema";
import { EditTypePaymentForm, editTypePaymentSchema } from "../schemas/edit-type-payment.schema";
import ActionResponse from "../../interfaces/action";
import { StatusCodes } from "http-status-codes";

const PATH = '/admin/type-payments';

export async function createTypePayment(data: NewTypePaymentForm): Promise<ActionResponse> {
    const { success, error } = newTypePaymentSchema.safeParse(data);
    if (!success) {
        return {
            message: error.message,
            status: StatusCodes.BAD_REQUEST
        }
    }

    const { name } = data;
    const typePaymentExists = await prisma.typePayment.findUnique({
        select: {
            name: true
        },
        where: {
            name
        }
    });
    if (typePaymentExists) {
        return {
            message: `The type payment "${typePaymentExists.name}" exists. Use other name`,
            status: StatusCodes.BAD_REQUEST
        }
    }

    await prisma.typePayment.create({
        data: {
            name
        }
    });

    revalidatePath(PATH);
    return {
        message: 'Type payment created successfully',
        status: StatusCodes.CREATED
    }
}

export async function updateTypePayment(data: EditTypePaymentForm): Promise<ActionResponse> {
    const { success, error } = editTypePaymentSchema.safeParse(data);
    if (!success) {
        return {
            message: error.message,
            status: StatusCodes.BAD_REQUEST
        }
    }

    const { id, name } = data;
    const typePaymentExists = await prisma.typePayment.findUnique({
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
    if (typePaymentExists) {
        return {
            message: `The type payment "${typePaymentExists.name}" exists. Use other name`,
            status: StatusCodes.BAD_REQUEST
        }
    }
    
    await prisma.typePayment.update({
        data: {
            name
        },
        where: {
            id
        }
    });

    revalidatePath(PATH);
    return {
        message: 'Type payment updated successfully',
        status: StatusCodes.OK
    }
}

export async function deleteTypePayment(id: TypePayment['id']): Promise<ActionResponse> {
    const typePayment = await prisma.typePayment.findUnique({
        where: {
            id
        }
    });
    if (!typePayment) {
        return {
            message: 'Type payment not found',
            status: StatusCodes.NOT_FOUND
        }
    }
    
    await prisma.typePayment.delete({
        where: {
            id
        }
    });

    revalidatePath(PATH);
    return {
        message: 'Type payment deleted successfully',
        status: StatusCodes.OK
    }   
}