import Image from "next/image";
import { CustomerValorationDto } from "@/app/adapters/customer-valoration.adapter";
import { ReactNode } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

interface Props {
    customerValoration: CustomerValorationDto
}

export default function CustomerValorationCard({ customerValoration }: Props) {
    const { stars } = customerValoration.valoration;

    const starsElements: ReactNode[] = [];
    for (let i = 0; i < 5; i++) {
        if (stars - i > 0) {
            starsElements.push(<FaStar key={i} color="#F1C232" />);
        } else {
            starsElements.push(<FaRegStar key={i} color="#F1C232" />);
        }
    }

    return (
        <article className="bg-[var(--bg-color)] rounded-2xl p-8 flex flex-col gap-8">
            <section className="flex justify-between h-20 gap-12">
                <Image
                    className="object-contain basis-12"
                    src={`/api/uploads/customers/${customerValoration.image}`}
                    alt={customerValoration.name}
                    width={0}
                    height={0}
                    sizes="100vw"
                />
                <p className="text-[var(--color-surface)] text-right">{ customerValoration.categories.join(' & ') }</p>
            </section>
            <p className="text-white md:text-[32px]/9 font-medium line-clamp-[8]">{customerValoration.valoration.review}</p>
            <section className="flex justify-between items-center">
                <p className="text-[var(--color-surface)]">{customerValoration.name}</p>
                <section className="flex gap-1">
                    {starsElements}
                </section>
            </section>
        </article>
    );
}