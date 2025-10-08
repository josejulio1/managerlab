import { ReactNode } from "react";
import { useFormContext } from "react-hook-form";

interface Props {
    className?: string
    label?: string
    name: string
    render: (className: string) => ReactNode | ReactNode[]
}

export default function FormElement({ className, label, name, render }: Props) {
    const { formState: { errors } } = useFormContext();

    return (
        <article className="flex flex-col gap-2 w-full">
            {
                label && (
                    <label
                        className="text-[var(--color-surface)] text-lg"
                        htmlFor={name}
                    >
                        {label}
                    </label>
                )
            }
            {render(`border-b border-b-white/20 py-3.5 text-white text-lg outline-0 transition duration-[.4s] w-full focus:border-b-white ${className ? className : ''}`)}
            {
                errors[name]?.message && <p className="text-red-400">{errors[name].message.toString()}</p>
            }
        </article>
    );
}