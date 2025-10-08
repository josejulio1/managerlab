import { useFieldArray } from "react-hook-form";
import SocialNetworkItem from "./SocialNetworkItem";
import FormElement from "../../FormElement";

interface Props {
    name: string
    label: string
}

export default function SocialNetworks({ name, label }: Props) {
    const { fields } = useFieldArray({ name });

    return (
        <FormElement
            name={name}
            label={label}
            render={className => (
                <ul className="flex flex-col gap-4">
                    {
                        fields.map((field, i) => (
                            <SocialNetworkItem
                                key={field.id}
                                className={className}
                                name={name}
                                index={i}
                            />
                        ))
                    }
                </ul>
            )}
        />
    );
}