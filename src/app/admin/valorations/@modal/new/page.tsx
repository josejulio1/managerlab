import { prisma } from "@/lib/prisma";
import NewValorationForm from "./components/NewValorationForm";

export default async function NewValorationPage() {
    const customers = await prisma.customer.findMany({
        select: {
            id: true,
            name: true
        },
        orderBy: {
            name: 'asc'
        },
        where: {
            valoration: {
                is: null
            }
        }
    });

    return (
        <NewValorationForm
            customers={customers}
        />
    );
}