import { Category, CategoryCustomer, Customer } from "../../../../../generated/prisma";

export interface CustomerCategoriesSelectDto {
    id: Customer['id']
    name: Customer['name']
    image: Customer['image']
    categories: Array<Category['id']>
}

export function customerCategoriesSelectAdapter(customer: {
    id: Customer['id']
    name: Customer['name']
    image: Customer['image']
    categories: Array<Pick<CategoryCustomer, 'categoryId'>>
}): CustomerCategoriesSelectDto {
    return {
        id: customer.id,
        name: customer.name,
        image: customer.image,
        categories: customer.categories.map(({ categoryId }) => categoryId)
    }
}