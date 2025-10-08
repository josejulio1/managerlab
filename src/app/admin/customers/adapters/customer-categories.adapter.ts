import { Category, Customer } from "../../../../../generated/prisma";

export interface CustomerCategoriesDto {
    id: Customer['id']
    name: Customer['name']
    image: Customer['image']
    categories: string
}

export function customerCategoriesAdapter(customer: {
    id: Customer['id']
    name: Customer['name']
    image: Customer['image']
    categories: Array<{ category: Pick<Category, 'name'> }>
}): CustomerCategoriesDto {
    return {
        id: customer.id,
        name: customer.name,
        image: customer.image,
        categories: customer.categories.map(({ category }) => category.name).join(' & ')
    }
}