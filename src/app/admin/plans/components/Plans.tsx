import { prisma } from "@/lib/prisma";
import CrudPanel from "../../components/crud-panel/CrudPanel";
import CardGroup from "../../components/card/CardGroup";
import PlanCard from "./PlanCard";
import { planCategoryTypePaymentAdapter } from "../adapters/plan-categories-type-payment.adapter";

export default async function Plans() {
    const categoriesWithPlans = await prisma.category.findMany({
        select: {
            id: true,
            name: true,
            plans: {
                select: {
                    id: true,
                    name: true,
                    price: true,
                    category: {
                        select: {
                            name: true
                        }
                    },
                    typePayment: {
                        select: {
                            name: true
                        }
                    }
                }
            }
        },
        where: {
            plans: {
                some: {}
            }
        },
        orderBy: {
            name: 'asc'
        }
    });

    return (
        <>
            <CrudPanel
                className="gap-12"
                newHref="/admin/plans"
                items={categoriesWithPlans}
                render={categoryWithPlans => (
                    <CardGroup
                        key={categoryWithPlans.id}
                        title={categoryWithPlans.name}
                        cards={categoryWithPlans.plans}
                        render={plan => (
                            <PlanCard
                                key={plan.id}
                                plan={planCategoryTypePaymentAdapter(plan)}
                            />
                        )}
                    />
                )}
            />
        </>
    );
}