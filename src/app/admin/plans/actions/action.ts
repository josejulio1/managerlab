'use server';

import { prisma } from "@/lib/prisma";
import { Plan } from "../../../../../generated/prisma";
import { revalidatePath } from "next/cache";
import { NewPlanForm, newPlanSchema } from "../schemas/new-plan.schema";
import { EditPlanForm, editPlanSchema } from "../schemas/edit-plan.schema";
import ActionResponse from "../../interfaces/action";
import { StatusCodes } from "http-status-codes";

const PATH = '/admin/plans';

export async function createPlan(data: NewPlanForm): Promise<ActionResponse> {
    const { success, error } = newPlanSchema.safeParse(data);
    if (!success) {
        return {
            message: error.message,
            status: StatusCodes.BAD_REQUEST
        }
    }

    const { name, price, descriptions, categoryId, typePaymentId } = data;
    await prisma.plan.create({
        data: {
            name,
            price,
            descriptions: {
                createMany: {
                    data: descriptions.map(({ text }) => ({ description: text }))
                }
            },
            categoryId,
            typePaymentId
        }
    });

    revalidatePath(PATH);
    return {
        message: 'Plan created successfully',
        status: StatusCodes.CREATED
    }
}

export async function updatePlan(data: EditPlanForm): Promise<ActionResponse> {
    const { success, error } = editPlanSchema.safeParse(data);
    if (!success) {
        return {
            message: error.message,
            status: StatusCodes.BAD_REQUEST
        }
    }

    const { id, name, price, descriptions, categoryId, typePaymentId } = data;
    await prisma.planDescription.deleteMany({
        where: {
            planId: id
        }
    });
    await prisma.plan.update({
        data: {
            name,
            price,
            descriptions: {
                createMany: {
                    data: descriptions.map(({ text }) => ({ description: text }))
                }
            },
            categoryId,
            typePaymentId
        },
        where: {
            id
        }
    });

    revalidatePath(PATH);
    return {
        message: 'Plan updated successfully',
        status: StatusCodes.OK
    }
}

export async function deletePlan(id: Plan['id']): Promise<ActionResponse> {
    const planExists = await prisma.plan.findUnique({
        where: {
            id
        }
    });
    if (!planExists) {
        return {
            message: 'Plan not found',
            status: StatusCodes.NOT_FOUND
        }
    }

    await prisma.plan.delete({
        where: {
            id
        }
    });

    revalidatePath(PATH);
    return {
        message: 'Plan deleted successfully',
        status: StatusCodes.OK
    };
}