import Image from "next/image";
import Card from "../../components/card/Card";
import { deleteCustomer } from "../actions/action";
import { CustomerCategoriesDto } from "../adapters/customer-categories.adapter";

interface Props {
    customer: CustomerCategoriesDto
}

export default function CustomerCard({ customer }: Props) {
    return (
        <Card
            className="flex items-center max-lg:flex-col max-lg:gap-4 lg:gap-12"
            editHref="/admin/customers"
            id={customer.id}
            deleteServerAction={deleteCustomer}
        >
            <Image
                className="basis-40"
                src={`/api/uploads/customers/${customer.image}`}
                alt={customer.name}
                width={150}
                height={0}
            />
            <section className="flex flex-col gap-2 max-lg:items-center">
                <h4 className="text-white text-4xl font-medium">{customer.name}</h4>
                <p className="text-[var(--color-surface)] text-sm">{customer.categories}</p>
            </section>
        </Card>
    );
}