import Footer from "@/components/footer/Footer";
import Header from "@/components/Header";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { Category } from "../../../../generated/prisma";
import PlanItem from "./components/PlanItem";
import { planAdapter } from "./adapters/plan.adapter";

interface Props {
    params: Promise<Pick<Category, 'slug'>>
}

export default async function PricingPage({ params }: Props) {
    const { slug } = await params;
    const category = await prisma.category.findFirst({
        where: {
            slug
        },
        select: {
            name: true,
            plans: {
                select: {
                    id: true,
                    name: true,
                    price: true,
                    typePayment: {
                        select: {
                            name: true
                        }
                    },
                    descriptions: {
                        select: {
                            id: true,
                            description: true
                        }
                    }
                }
            }
        }
    });

    if (!category) {
        redirect('/');
    }

    return (
        <>
            <Header />
            <main className="max-w-7xl m-auto flex flex-col gap-12 px-4">
                <section className="flex flex-col gap-2 items-center pt-10">
                    <h2 className="text-[var(--color-surface)] text-4xl">{category.name}</h2>
                    <p className="text-white uppercase font-semibold max-md:text-4xl max-lg:text-8xl lg:text-9xl">Pricing Plan</p>
                </section>
                <hr className="text-white/15" />
                <section className="flex flex-wrap justify-center gap-8">
                    {
                        category.plans.map(plan => (
                            <PlanItem
                                key={plan.id}
                                plan={planAdapter(plan)}
                            />
                        ))
                    }
                </section>
            </main>
            <Footer />
        </>
    );
}