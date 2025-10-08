import { Category, Plan, TypePayment } from "../../../../../generated/prisma";

export interface PlanCategoryTypePaymentDto {
    id: Plan['id']
    name: Plan['name']
    price: Plan['price']
    category: Category['name']
    typePayment: TypePayment['name']
}

export function planCategoryTypePaymentAdapter(plan: {
    id: Plan['id']
    name: Plan['name']
    price: Plan['price']
    category: Pick<Category, 'name'>
    typePayment: Pick<TypePayment, 'name'>
}): PlanCategoryTypePaymentDto {
    return {
        id: plan.id,
        name: plan.name,
        price: plan.price,
        category: plan.category.name,
        typePayment: plan.typePayment.name
    }
}