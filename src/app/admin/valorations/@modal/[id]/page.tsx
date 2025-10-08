import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { isInt } from "validator";
import EditValorationForm from "../new/components/EditValorationForm";

interface Props {
    params: Promise<{ id: string }>
}

export default async function EditValorationPage({ params }: Props) {
    const { id } = await params;
    if (!isInt(id)) {
        redirect('/admin/valorations');
    }
    const idInt = parseInt(id);
    const valoration = await prisma.valoration.findUnique({
        select: {
            id: true,
            review: true,
            stars: true,
            customerId: true
        },
        where: {
            id: idInt
        }
    });
    if (!valoration) {
        redirect('/admin/valorations');
    }

    const customers = await prisma.customer.findMany({
        select: {
            id: true,
            name: true
        },
        orderBy: {
            name: 'asc'
        },
        where: {
            OR: [
                {
                    valoration: {
                        is: null
                    }
                },
                {
                    valoration: {
                        id: idInt
                    }
                }
            ]
        }
    });

    return (
        <EditValorationForm
            valoration={valoration}
            customers={customers}
        />
    );
}