import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

interface Props {
    className?: string
    text: string
    href: string
}

export default function PurpleLink({ className, text, href }: Props) {
    return (
        <Link
            href={href}
            className={`flex items-center gap-1 h-10 font-medium hover:[&_svg]:-translate-x-0 hover:[&_svg]:rotate-45 ${className ? className : ''}`}
        >
            <p className="text-[#0e0f11] rounded-full bg-[var(--main-color)] px-5 h-full flex justify-center items-center">{text}</p>
            <GoArrowUpRight
                color="#0e0f11"
                className="rounded-full bg-[var(--main-color)] p-2 w-10 h-full transition duration-[.4s] -translate-x-4"
                size={20}
            />
        </Link>
    );
}