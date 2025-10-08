import { prisma } from "@/lib/prisma";
import CrudPanel from "../../components/crud-panel/CrudPanel";
import TypePaymentCard from "./TypePaymentCard";

export default async function TypePayments() {
    const typePayments = await prisma.typePayment.findMany();

    return (
        <CrudPanel
            newHref="/admin/type-payments"
            items={typePayments}
            render={typePayment => (
                <TypePaymentCard
                    key={typePayment.id}
                    typePayment={typePayment}
                />
            )}
        />
    );
}