'use client';

import { FormProvider, useForm } from "react-hook-form";
import { Category, TypePayment } from "../../../../../../generated/prisma";
import { createPlan } from "../../actions/action";
import PlanForm from "./PlanForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { newPlanSchema } from "../../schemas/new-plan.schema";

interface Props {
    categories: Array<Pick<Category, 'id' | 'name'>>
    typePayments: Array<Pick<TypePayment, 'id' | 'name'>>
}

export default function NewPlanForm({ categories, typePayments }: Props) {
    const form = useForm({
        resolver: zodResolver(newPlanSchema),
        defaultValues: {
            name: '',
            price: 0.0,
            descriptions: [],
            categoryId: undefined,
            typePaymentId: undefined
        }
    });

    return (
        <FormProvider {...form}>
            <PlanForm
                title="New Plan"
                submitButtonText="Create"
                categories={categories}
                typePayments={typePayments}
                serverAction={createPlan}
            />
        </FormProvider>
    );
}