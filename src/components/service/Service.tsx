import Link from "next/link";
import { Category } from "../../../generated/prisma";
import { GoArrowUpRight } from "react-icons/go";

interface Props {
    service: Pick<Category, 'name' | 'description' | 'slug'>
}

export function Service({ service }: Props) {
    return (
        <Link href={`/services/${service.slug}`} className="flex justify-between items-center max-md:gap-10 md:gap-20 border-t border-b border-t-white/10 border-b-white/10 py-[20px] hover:[&_p]:opacity-100 hover:[&_h2]:text-[var(--main-color)] hover:[&_.icon]:bg-[var(--main-color)] hover:[&_svg]:invert">
            <h2 className="text-white text-[100px]/28 transition duration-[.4s] shrink-0 max-md:text-2xl max-lg:text-4xl">{service.name}</h2>
            <p className="opacity-0 transition text-[var(--color-surface)] duration-[.4s] max-md:hidden">{service.description}</p>
            <div className="icon border text-white/10 p-2 rounded-full flex justify-center items-center transition duration-[.4s]">
                <GoArrowUpRight color="#FFFFFF" size={30} className="transition duration-[.4s]" />
            </div>
        </Link>
    );
}