import { useFieldArray } from "react-hook-form";
import FormElement from "../../FormElement";
import ListItem from "./ListItem";
import { KeyboardEvent, useState } from "react";

interface Props {
    name: string
    placeholder: string
}

export default function List({ name, placeholder }: Props) {
    const [inputValue, setInputValue] = useState('');
    const { fields, append, remove } = useFieldArray({ name });
    
    const onAdd = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key !== 'Enter' || !inputValue) {
            return;
        }
        e.preventDefault();
        append({ text: inputValue });
        setInputValue('');
    }

    return (
        <FormElement
            name={name}
            render={className => (
                <>
                    <input
                        className={`mb-4 ${className ? className : ''}`}
                        type="text"
                        placeholder={placeholder}
                        onKeyDown={onAdd}
                        onChange={({ target: { value } }) => setInputValue(value)}
                        value={inputValue}
                    />
                    {
                        fields.length > 0 && (
                            <ul className="flex flex-col gap-4 border border-white/20 rounded-xl p-4">
                                {
                                    fields.map((listItem, i) => (
                                        <ListItem
                                            key={listItem.id}
                                            index={i}
                                            name={name}
                                            onRemove={() => remove(i)}
                                        />
                                    ))
                                }
                            </ul>
                        )
                    }
                </>
            )}
        />
    );
}