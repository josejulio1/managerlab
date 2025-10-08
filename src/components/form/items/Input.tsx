import { HTMLInputAutoCompleteAttribute, HTMLInputTypeAttribute } from "react";
import { useFormContext } from "react-hook-form";
import FormElement from "../FormElement";

export interface InputProps {
    type: HTMLInputTypeAttribute
    name: string
    placeholder: string
    autoComplete: HTMLInputAutoCompleteAttribute
}

export default function Input({ type, name, placeholder, autoComplete }: InputProps) {
    const { register } = useFormContext();

    return (
        <FormElement
            name={name}
            render={className => (
                <input
                    {...register(name)}
                    className={className}
                    type={type}
                    placeholder={placeholder}
                    autoComplete={autoComplete}
                />
            )}
        />
    );
}