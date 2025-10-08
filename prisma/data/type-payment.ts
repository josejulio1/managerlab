import { TypePayment } from "../../generated/prisma";

const typesPayments: Array<TypePayment> = [
    {
        id: 1,
        name: 'Per Month'
    },
    {
        id: 2,
        name: 'One-Time'
    }
];

export default typesPayments;