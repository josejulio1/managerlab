import Footer from "@/components/footer/Footer";
import Header from "@/components/Header";
import { CustomerImages } from "./components/CustomerImages";
import { prisma } from "@/lib/prisma";
import Hero from "./components/Hero";
import Description from "./components/Description";
import CustomerValorations from "./components/CustomerValorations";
import customerValorationAdapter from "@/app/adapters/customer-valoration.adapter";
import { Category, Customer, Valoration } from "../../generated/prisma";
import Services from "@/components/service/Services";

export default async function Home() {
    const customersImages = await prisma.customer.findMany({
        select: {
            id: true,
            name: true,
            image: true
        }
    });

    const customersValorations = await prisma.customer.findMany({
        select: {
            id: true,
            name: true,
            image: true,
            categories: {
                select: {
                    category: {
                        select: {
                            name: true
                        }
                    }
                }
            },
            valoration: {
                select: {
                    review: true,
                    stars: true
                }
            }
        },
        where: {
            valoration: {
                isNot: null
            }
        }
    }) as {
        id: Customer['id'],
        name: Customer['name'],
        image: Customer['image'],
        categories: { category: Pick<Category, 'name'> }[],
        valoration: Pick<Valoration, 'review' | 'stars'>
    }[];

    const categories = await prisma.category.findMany();

    return (
        <>
            <Header />
            <main className="flex flex-col gap-24 px-4">
                <Hero />
                <CustomerImages customers={customersImages} />
                <Description />
                <Services services={categories} />
                <CustomerValorations customersValorations={customersValorations.map(customer => customerValorationAdapter(customer))} />
            </main>
            <Footer />
        </>
    );
}