import { ReactElement } from "react"

interface Props {
    title: string
    children: ReactElement
}

export default function FooterItem({ title, children }: Props) {
    return (
        <article className="text-[var(--color-surface)] flex flex-col gap-2">
            <p className="uppercase text-xs max-md:text-center">{title}</p>
            {children}
        </article>
    );
}