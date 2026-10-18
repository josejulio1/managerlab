import Link from "next/link";
import { ReactElement } from "react";
import slug from "slug";

interface Props {
    title: string
    items: Array<{
        title: string
        content: ReactElement
    }>
}

export default function IndexedContent({ title, items }: Props) {
    return (
        <main className="px-8 max-w-3xl mx-auto text-(--color-surface)">
            <section className="flex flex-col gap-y-4 mb-16">
                <h1 className="text-center text-4xl">{title}</h1>
                <article className="flex flex-col gap-y-2">
                    <p>MANAGERLAB OÜ, private limited company registered in Estonia</p>
                    <p>Registry code: 17301987</p>
                    <p>VAT number: EE102891829</p>
                    <address>Registered address: Harju maakond, Tallinn, Lasnamäe linnaosa, Lõõtsa tn 5, 11415, Estonia</address>
                    <p>Contact: <Link href="mailto:hello@managerlab.net" className="underline">hello@managerlab.net</Link></p>
                </article>
            </section>
            <article className="text-white">
                <p>Index:</p>
                <ol className="underline">
                    {
                        items.map(({ title }, i) => (
                            <li key={title}>
                                <Link href={`#${slug(title)}`}>{i + 1}. {title}</Link>
                            </li>
                        ))
                    }
                </ol>
            </article>
            <hr className="my-8" />
            <section className="flex flex-col gap-y-16">
                {
                    items.map(({ title, content }, i) => (
                        <article
                            key={title}
                            className="flex flex-col gap-y-2"
                        >
                            <h4 className="text-2xl scroll-mt-50" id={slug(title)}>{i + 1}. {title}</h4>
                            {content}
                        </article>
                    ))
                }
            </section>
        </main>
    );
}