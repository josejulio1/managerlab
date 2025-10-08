import { prisma } from "@/lib/prisma";
import CrudPanel from "../../components/crud-panel/CrudPanel";
import ValorationCard from "./ValorationCard";
import { customerValorationAdapter } from "../adapters/customer-valoration.adapter";

export default async function Valorations() {
    const valorations = await prisma.valoration.findMany({
        select: {
            id: true,
            review: true,
            stars: true,
            customer: {
                select: {
                    name: true
                }
            }
        }
    });

    return (
        <CrudPanel
            newHref="/admin/valorations"
            items={valorations}
            render={valoration => (
                <ValorationCard
                    key={valoration.id}
                    customerValoration={customerValorationAdapter(valoration)}
                />
            )}
        />
    );
}