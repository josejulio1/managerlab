import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { isInt } from "validator";
import EditCustomerForm from "../components/EditCustomerForm";
import { customerCategoriesSelectAdapter } from "../../adapters/customer-categories-select.adapter";

interface Props {
    params: Promise<{ id: string }>
}

export default async function EditCustomerPage({ params }: Props) {
    const { id } = await params;
    if (!isInt(id)) {
        redirect('/admin/categories');
    }
    const customer = await prisma.customer.findUnique({
        select: {
            id: true,
            name: true,
            image: true,
            categories: {
                select: {
                    categoryId: true
                }
            }
        },
        where: {
            id: parseInt(id)
        }
    });
    const categories = await prisma.category.findMany({
        select: {
            id: true,
            name: true
        }
    });
    if (!customer) {
        redirect('/admin/categories');
    }

    return (
        <EditCustomerForm
            customer={customerCategoriesSelectAdapter(customer)}
            categories={categories}
        />
    );
}