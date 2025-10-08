import { Plan } from "../../generated/prisma";

const plans: Array<Plan> = [
    {
        id: 1,
        name: 'Personal Manager 🕵️‍♀️',
        price: 500,
        categoryId: 3,
        typePaymentId: 1
    },
    {
        id: 2,
        name: 'Starter Pack 🔥',
        price: 400,
        categoryId: 1,
        typePaymentId: 1
    },
    {
        id: 3,
        name: 'Growth Pack 🔑',
        price: 680,
        categoryId: 1,
        typePaymentId: 1
    },
    {
        id: 4,
        name: 'Pro Pack ⭐',
        price: 1200,
        categoryId: 1,
        typePaymentId: 1
    },
    {
        id: 5,
        name: 'Package One 🌱',
        price: 350,
        categoryId: 2,
        typePaymentId: 2
    },
    {
        id: 6,
        name: 'Package Two 🌷',
        price: 500,
        categoryId: 2,
        typePaymentId: 2
    },
    {
        id: 7,
        name: 'Package Three 🍀',
        price: 960,
        categoryId: 2,
        typePaymentId: 2
    }
];

export default plans;