import { ReactElement } from "react";

interface Props<T> {
    title: string
    cards: T[]
    render: (card: T) => ReactElement<T>
}

export default function CardGroup<T>({ title, cards, render }: Props<T>) {
    return (
        <section className="flex flex-col gap-2">
            <h4 className="text-white text-3xl font-medium max-lg:text-center">{title}</h4>
            <section className="flex flex-col gap-4">
                {
                    cards.map(card => (
                        render(card)
                    ))
                }
            </section>
        </section>
    );
}