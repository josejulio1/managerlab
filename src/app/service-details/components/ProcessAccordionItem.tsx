import { AccordionItem } from "@szhsin/react-accordion";

interface Props {
    id: number
    header: string
    text: string
    isInitial?: boolean
}

export default function ProcessAccordionItem({ id, header, text, isInitial }: Props) {
    return (
        <AccordionItem
            initialEntered={isInitial}
            className="transition"
            header={({ state: { isEnter } }) => (
                <section className={`flex items-center gap-20 py-4 cursor-pointer w-full transition border-t ${isEnter ? 'border-t-[var(--main-color)]' : 'border-t-transparent'}`}>
                    <p className={`text-sm transition ${isEnter ? 'text-[var(--main-color)]' : 'text-white'}`}>{id}.</p>
                    <p className={`text-xl transition text-left ${isEnter ? 'text-[var(--main-color)]' : 'text-white'}`}>{header}</p>
                </section>
            )}
            buttonProps={{
                className: 'w-full transition',
            }}
            contentProps={{
                className: 'transition-[height]'
            }}
        >
            <p className="text-[var(--color-surface)] pb-4 pl-[88px] text-sm">{text}</p>
        </AccordionItem>
    );
}