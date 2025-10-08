import { prisma } from "@/lib/prisma";
import NewCustomerForm from "../components/NewCustomerForm";

export default async function NewCustomerPage() {
    const categories = await prisma.category.findMany({
        select: {
            id: true,
            name: true
        },
        orderBy: {
            name: 'asc'
        }
    });

    return (
        <NewCustomerForm
            categories={categories}
        />
    );
}