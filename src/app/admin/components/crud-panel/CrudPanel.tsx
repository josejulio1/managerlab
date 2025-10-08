import { ReactElement } from "react";
import NewButton from "./NewButton";

interface Props<T> {
    className?: string
    items: Array<T>
    newHref: string
    render: (item: T) => ReactElement<T>
}

export default function CrudPanel<T>({ className, items, newHref, render }: Props<T>) {
    const isEmpty = items.length === 0;

    return (
        <>
            <section className="flex justify-end">
                <NewButton
                    href={newHref}
                />
            </section>
            <hr className="text-white/20" />
            <section className={`flex flex-col h-full overflow-y-auto ${className ? className : 'gap-4'} ${isEmpty ? 'justify-center items-center' : ''}`}>
                {
                    !isEmpty
                        ? (
                            items.map(item => (
                                render(item)
                            ))
                        )
                        : <p className="text-white text-5xl font-medium">Items not found</p>
                }
            </section>
        </>
    );
}