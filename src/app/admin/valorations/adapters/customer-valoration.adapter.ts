import { Customer, Valoration } from "../../../../../generated/prisma";

export interface CustomerValorationDto {
    customerName: Customer['name']
    valoration: Pick<Valoration, 'id' | 'review' | 'stars'>
}

export function customerValorationAdapter(valoration: {
    id: Valoration['id']
    review: Valoration['review']
    stars: Valoration['stars']
    customer: Pick<Customer, 'name'>
}): CustomerValorationDto {
    return {
        customerName: valoration.customer.name,
        valoration: {
            id: valoration.id,
            review: valoration.review,
            stars: valoration.stars
        }
    }
}