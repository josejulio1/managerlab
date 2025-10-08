import { redirect } from "next/navigation";
import { isInt } from "validator";
import EditTypePaymentForm from "../components/EditTypePaymentForm";
import { prisma } from "@/lib/prisma";

interface Props {
    params: Promise<{ id: string }>
}

export default async function EditTypePaymentPage({ params }: Props) {
    const { id } = await params;
    if (!isInt(id)) {
        redirect('/admin/type-payments');
    }
    const typePayment = await prisma.typePayment.findUnique({
        select: {
            id: true,
            name: true
        },
        where: {
            id: parseInt(id)
        }
    });
    if (!typePayment) {
        redirect('/admin/type-payments');
    }

    return (
        <EditTypePaymentForm
            typePayment={typePayment}
        />
    );
}