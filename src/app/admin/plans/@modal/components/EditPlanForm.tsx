'use client';

import { FormProvider, useForm } from "react-hook-form";
import PlanForm from "./PlanForm";
import { Category, TypePayment } from "../../../../../../generated/prisma";
import { updatePlan } from "../../actions/action";
import { zodResolver } from "@hookform/resolvers/zod";
import { editPlanSchema } from "../../schemas/edit-plan.schema";
import { PlanDescriptionsDto } from "../../adapters/plan-descriptions.adapter";

interface Props {
    plan: PlanDescriptionsDto
    categories: Array<Pick<Category, 'id' | 'name'>>
    typePayments: Array<Pick<TypePayment, 'id' | 'name'>>
}

export default function EditPlanForm({ plan, categories, typePayments }: Props) {
    const form = useForm({
        resolver: zodResolver(editPlanSchema),
        defaultValues: {
            id: plan.id,
            name: plan.name,
            price: plan.price,
            descriptions: plan.descriptions.map(({ description }) => ({ text: description })),
            categoryId: plan.categoryId,
            typePaymentId: plan.typePaymentId
        }
    });

    return (
        <FormProvider {...form}>
            <PlanForm
                title={plan.name}
                submitButtonText="Update"
                categories={categories}
                typePayments={typePayments}
                serverAction={updatePlan}
            />
        </FormProvider>
    );
}