import Link from "next/link";
import { cloneElement, ReactElement } from "react";
import { IconBaseProps } from "react-icons"

interface Props {
    icon: ReactElement<IconBaseProps>
    href: string
    className?: string
}

export default function SocialNetworkIcon({ icon, href, className }: Props) {
    return (
        <Link href={href} className={`w-12 h-12 flex justify-center items-center border border-white/10 rounded-4xl transition duration-[.4s] hover:border-white ${className ? className : ''}`}>
            {
                cloneElement(icon, {
                    size: 15,
                    color: '#FFFFFF'
                })
            }
        </Link>
    );
}