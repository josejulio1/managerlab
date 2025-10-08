import { Controller } from "react-hook-form";
import Select from "react-select";
import FormElement from "../../FormElement";

interface Option {
    label: string
    value: string | number
}

export interface SelectFormProps {
    label: string
    name: string
    isMultiple?: boolean
    items: Option[]
}

export default function SelectForm({ label, name, isMultiple = false, items }: SelectFormProps) {
    return (
        <FormElement
            label={label}
            name={name}
            render={() => (
                <Controller
                    name={name}
                    render={({ field }) => (
                        <Select
                            styles={{
                                control: baseStyles => ({
                                    ...baseStyles,
                                    backgroundColor: 'var(--bg-color)',
                                    border: '1px solid rgba(255, 255, 255, .2)'
                                }),
                                menuList: baseStyles => ({
                                    ...baseStyles,
                                    backgroundColor: 'var(--bg-color)',
                                    border: '1px solid rgba(255, 255, 255, .2)',
                                    color: 'white',
                                    zIndex: 1000
                                }),
                                option: (baseStyles, state) => ({
                                    ...baseStyles,
                                    backgroundColor: state.isFocused ? 'rgba(255, 255, 255, .1)' : 'var(--bg-color)',
                                    ':active': {
                                        backgroundColor: 'var(--main-color)'
                                    }
                                }),
                                multiValue: baseStyles => ({
                                    ...baseStyles,
                                    backgroundColor: 'unset',
                                    border: '1px solid rgba(255, 255, 255, .3)',
                                    borderRadius: '1rem'
                                }),
                                multiValueLabel: baseStyles => ({
                                    ...baseStyles,
                                    color: 'white'
                                }),
                                multiValueRemove: baseStyles => ({
                                    ...baseStyles,
                                    color: 'white',
                                    cursor: 'pointer'
                                }),
                                singleValue: baseStyles => ({
                                    ...baseStyles,
                                    color: 'white'
                                }),
                                indicatorSeparator: baseStyles => ({
                                    ...baseStyles,
                                    backgroundColor: 'rgba(255, 255, 255, .2)'
                                })
                            }}
                            inputId={name}
                            isMulti={isMultiple}
                            options={items}
                            onChange={items => {
                                if (isMultiple) {
                                    field.onChange((items as Option[]).map(item => item.value));
                                } else {
                                    field.onChange((items as Option).value);
                                }
                            }}
                            value={
                                isMultiple
                                    ? items.filter(item => field.value.includes(item.value))
                                    : items.find(item => field.value === item.value)
                            }
                        />
                    )}
                />
            )}
        />
    );
}