'use client';

import Card from "../../components/card/Card";
import { deletePlan } from "../actions/action";
import { PlanCategoryTypePaymentDto } from "../adapters/plan-categories-type-payment.adapter";

interface Props {
    plan: PlanCategoryTypePaymentDto
}

export default function PlanCard({ plan }: Props) {
    return (
        <Card
            className="flex flex-col max-lg:items-center"
            editHref="/admin/plans"
            id={plan.id}
            deleteServerAction={deletePlan}
        >
            <h4 className="text-white text-xl font-normal">{plan.name}</h4>
            <p className="text-[var(--color-surface)]">{plan.price}$</p>
        </Card>
    );
}