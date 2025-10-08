import { Controller } from "react-hook-form";
import FormElement from "../FormElement";
import NumericInput from "react-numeric-input";

interface Props {
    name: string
    placeholder: string
    min?: number
    step?: number
}

export default function NumberInput({ name, placeholder, min, step }: Props) {
    return (
        <FormElement
            name={name}
            render={className => (
                <Controller
                    name={name}
                    render={({ field }) => (
                        <NumericInput
                            style={false}
                            inputMode="decimal"
                            placeholder={placeholder}
                            className={className}
                            min={min}
                            precision={2}
                            step={step}
                            onChange={value => field.onChange(value)}
                            value={field.value}
                        />
                    )}
                />
            )}
        />
    );
}