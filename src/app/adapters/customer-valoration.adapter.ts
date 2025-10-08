import { Category, Customer, Valoration } from "../../../generated/prisma"

export interface CustomerValorationDto {
    id: Customer['id']
    name: Customer['name']
    image: Customer['image']
    categories: Array<Category['name']>
    valoration: Pick<Valoration, 'review' | 'stars'>
}

export default function customerValorationAdapter(customer: {
    id: Customer['id']
    name: Customer['name']
    image: Customer['image']
    categories: Array<{ category: Pick<Category, 'name'> }>
    valoration: Pick<Valoration, 'review' | 'stars'>
}): CustomerValorationDto {
    return {
        id: customer.id,
        name: customer.name,
        image: customer.image,
        categories: customer.categories.map(({ category }) => category.name),
        valoration: {
            review: customer.valoration.review,
            stars: customer.valoration.stars
        }
    }
}