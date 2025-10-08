import { prisma } from "@/lib/prisma";
import CrudPanel from "../../components/crud-panel/CrudPanel";
import CustomerCard from "./CustomerCard";
import { customerCategoriesAdapter } from "../adapters/customer-categories.adapter";

export default async function Customers() {
    const customers = await prisma.customer.findMany({
        select: {
            id: true,
            name: true,
            image: true,
            categories: {
                select: {
                    category: {
                        select: {
                            name: true
                        }
                    }
                }
            }
        },
        orderBy: {
            name: 'asc'
        }
    });

    return (
        <CrudPanel
            newHref="/admin/customers"
            items={customers}
            render={customer => (
                <CustomerCard
                    key={customer.id}
                    customer={customerCategoriesAdapter(customer)}
                />
            )}
        />
    );
}