import { Plan, PlanDescription } from "../../../../../generated/prisma";

export interface PlanDescriptionsDto {
    id: Plan['id']
    name: Plan['name']
    price: Plan['price']
    descriptions: Array<Pick<PlanDescription, 'id' | 'description'>>
    categoryId: Plan['categoryId']
    typePaymentId: Plan['typePaymentId']
}

export function planDescriptionsAdapter(plan: {
    id: Plan['id']
    name: Plan['name']
    price: Plan['price']
    descriptions: Array<{ planDescription: Pick<PlanDescription, 'id' | 'description'> }>
    categoryId: Plan['categoryId']
    typePaymentId: Plan['typePaymentId']
}): PlanDescriptionsDto {
    return {
        id: plan.id,
        name: plan.name,
        price: plan.price,
        descriptions: plan.descriptions.map(({ planDescription }) => ({
            id: planDescription.id,
            description: planDescription.description
        })),
        categoryId: plan.categoryId,
        typePaymentId: plan.typePaymentId,
    }
}