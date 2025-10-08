import { Plan, PlanDescription, TypePayment } from "../../../../../generated/prisma"

export interface PlanDto {
    id: Plan['id']
    name: Plan['name']
    price: Plan['price']
    typePayment: TypePayment['name']
    descriptions: Array<Pick<PlanDescription, 'id' | 'description'>>
}

export function planAdapter(plan: {
    id: Plan['id']
    name: Plan['name']
    price: Plan['price']
    typePayment: Pick<TypePayment, 'name'>
    descriptions: Array<Pick<PlanDescription, 'id' | 'description'>>
}): PlanDto {
    return {
        id: plan.id,
        name: plan.name,
        price: plan.price,
        typePayment: plan.typePayment.name,
        descriptions: plan.descriptions
    }
}