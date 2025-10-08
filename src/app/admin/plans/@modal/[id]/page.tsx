import { isInt } from "validator";
import EditPlanForm from "../components/EditPlanForm";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

interface Props {
    params: Promise<{ id: string }>
}

export default async function EditPlanPage({ params }: Props) {
    const { id } = await params;
    if (!isInt(id)) {
        redirect('/admin/plans');
    }
    const idInt = parseInt(id);
    const plan = await prisma.plan.findUnique({
        select: {
            id: true,
            name: true,
            price: true,
            typePaymentId: true,
            categoryId: true,
            descriptions: {
                select: {
                    id: true,
                    description: true
                }
            }
        },
        where: {
            id: idInt
        }
    });
    if (!plan) {
        redirect('/admin/plans');
    }

    const categories = await prisma.category.findMany({
        select: {
            id: true,
            name: true
        }
    });

    const typePayments = await prisma.typePayment.findMany({
        select: {
            id: true,
            name: true
        },
        orderBy: {
            name: 'asc'
        }
    });

    return (
        <EditPlanForm
            plan={plan}
            categories={categories}
            typePayments={typePayments}
        />
    );
}