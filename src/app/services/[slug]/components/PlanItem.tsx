import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { PlanDto } from "../adapters/plan.adapter";
import ListItem from "@/components/ListItem";

interface Props {
    plan: PlanDto
}

export default function PlanItem({ plan }: Props) {
    return (
        <article className="flex flex-col justify-between gap-8 bg-[var(--bg-color)] p-8 w-sm rounded-2xl">
            <section className="flex flex-col items-center gap-4">
                <section className="flex flex-col gap-8">
                    <h6 className="text-white text-2xl uppercase font-medium text-center">{plan.name}</h6>
                    <section className="flex flex-col items-center gap-4">
                        <p className="text-white text-7xl font-medium">{plan.price}$</p>
                        <p className="text-[var(--color-surface)]">{plan.typePayment}</p>
                    </section>
                </section>
                <hr className="text-white/15 w-full h-4" />
                <ul className="flex flex-col gap-4 w-full">
                    {
                        plan.descriptions.map(({ id, description }) => (
                            <ListItem
                                key={id}
                                className="bg-white/10"
                                text={description}
                            />
                        ))
                    }
                </ul>
            </section>
            <Link href="/contact" className="flex justify-center items-center gap-2 rounded-full w-full p-4 border border-white/30 transition hover:bg-[var(--main-color)] hover:[&_p]:text-[#212121] hover:[&_svg]:invert">
                <p className="text-white font-medium transition duration-[.4s]">Get Started</p>
                <GoArrowUpRight color="#FFFFFF" size={25} className="transition duration-[.4s]" />
            </Link>
        </article>
    );
}