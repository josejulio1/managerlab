import bcrypt from "bcrypt";
import { PrismaClient } from "../generated/prisma";
import authenticatedUsers from "./data/authenticated-users";
import categories from "./data/categories";
import categoriesCustomer from "./data/categories-customers";
import customers from "./data/customers";
import planDescriptions from "./data/plan-descriptions";
import plans from "./data/plans";
import socialsNetworks from "./data/socials-networks";
import typesPayments from "./data/type-payment";
import users from "./data/users";
import usersSocialNetworks from "./data/users-socials-networks";
import valorations from "./data/valorations";

const prisma = new PrismaClient();

async function seed() {
    await prisma.authenticatedUsers.deleteMany();
    await prisma.planDescription.deleteMany();
    await prisma.plan.deleteMany();
    await prisma.categoryCustomer.deleteMany();
    await prisma.valoration.deleteMany();
    await prisma.userSocialNetwork.deleteMany();
    await prisma.user.deleteMany();
    await prisma.typePayment.deleteMany();
    await prisma.socialNetwork.deleteMany();
    await prisma.customer.deleteMany();
    await prisma.category.deleteMany();

    await prisma.category.createMany({
        data: categories
    });

    await prisma.customer.createMany({
        data: customers
    });

    await prisma.socialNetwork.createMany({
        data: socialsNetworks
    });

    await prisma.typePayment.createMany({
        data: typesPayments
    })

    await prisma.user.createMany({
        data: users
    });

    await prisma.userSocialNetwork.createMany({
        data: usersSocialNetworks
    });

    await prisma.valoration.createMany({
        data: valorations
    });

    await prisma.categoryCustomer.createMany({
        data: categoriesCustomer
    });

    await prisma.plan.createMany({
        data: plans
    });

    await prisma.planDescription.createMany({
        data: planDescriptions
    });

    await prisma.authenticatedUsers.createMany({
        data: authenticatedUsers.map(({ id, email, password }) => ({
            id,
            email,
            password: bcrypt.hashSync(password, 10)
        }))
    });
}

seed()
    .finally(async () => {
        await prisma.$disconnect();
    });