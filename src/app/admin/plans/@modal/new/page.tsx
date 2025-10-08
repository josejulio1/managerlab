import { prisma } from "@/lib/prisma";
import NewPlanForm from "../components/NewPlanForm";

export default async function NewPlanPage() {
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
        }
    });

    return (
        <NewPlanForm
            categories={categories}
            typePayments={typePayments}
        />
    );
}