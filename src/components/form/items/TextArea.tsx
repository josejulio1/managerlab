import { useFormContext } from "react-hook-form";
import FormElement from "../FormElement";

export interface TextAreaProps {
    name: string
    placeholder: string
    rows: number
}

export default function TextArea({ name, placeholder, rows }: TextAreaProps) {
    const { register } = useFormContext();
    
    return (
        <FormElement
            name={name}
            render={className => (
                <textarea
                    {...register(name)}
                    className={`${className} min-h-26`}
                    placeholder={placeholder}
                    rows={rows}
                ></textarea>
            )}
        >
        </FormElement>
    );
}