'use server';

import { prisma } from "@/lib/prisma";
import { Valoration } from "../../../../../generated/prisma";
import { revalidatePath } from "next/cache";
import { NewValorationForm, newValorationSchema } from "../schemas/new-valoration.schema";
import { EditValorationForm, editValorationSchema } from "../schemas/edit-valoration.schema";
import { StatusCodes } from "http-status-codes";
import ActionResponse from "../../interfaces/action";

const PATH = '/admin/valorations';

export async function createValoration(data: NewValorationForm): Promise<ActionResponse> {
    const { success, error } = newValorationSchema.safeParse(data);
    if (!success) {
        return {
            message: error.message,
            status: StatusCodes.BAD_REQUEST
        }
    }

    const { review, stars, customerId } = data;
    await prisma.valoration.create({
        data: {
            review,
            stars,
            customerId
        }
    });

    revalidatePath(PATH);
    return {
        message: 'Valoration created successfully',
        status: StatusCodes.CREATED
    }
}

export async function updateValoration(data: EditValorationForm): Promise<ActionResponse> {
    const { success, error } = editValorationSchema.safeParse(data);
    if (!success) {
        return {
            message: error.message,
            status: StatusCodes.BAD_REQUEST
        }
    }

    const { id, review, stars, customerId } = data;
    const valoration = await prisma.valoration.findUnique({
        select: {
            id: true
        },
        where: {
            id
        }
    });
    if (!valoration) {
        return {
            message: 'Valoration not found',
            status: StatusCodes.NOT_FOUND
        }
    }

    await prisma.valoration.update({
        data: {
            review,
            stars,
            customerId
        },
        where: {
            id
        }
    });

    revalidatePath(PATH);
    return {
        message: 'Valoration updated successfully',
        status: StatusCodes.OK
    }
}

export async function deleteValoration(id: Valoration['id']): Promise<ActionResponse> {
    const valoration = await prisma.valoration.findUnique({
        select: {
            id: true
        },
        where: {
            id
        }
    });
    if (!valoration) {
        return {
            message: 'Valoration not found',
            status: StatusCodes.NOT_FOUND
        }
    }

    await prisma.valoration.delete({
        where: {
            id
        }
    });

    revalidatePath(PATH);
    return {
        message: 'Valoration deleted successfully',
        status: StatusCodes.OK
    }
}