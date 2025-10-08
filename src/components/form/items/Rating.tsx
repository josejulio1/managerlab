'use client';

import { Controller } from "react-hook-form";
import ReactStars from "react-stars";
import FormElement from "../FormElement";

export interface RatingProps {
    name: string
}

export default function Rating({ name }: RatingProps) {
    return (
        <FormElement
            label="Stars"
            name={name}
            render={() => (
                <Controller
                    name={name}
                    render={({ field }) => (
                        <ReactStars
                            count={5}
                            size={30}
                            half={false}
                            onChange={value => field.onChange(value)}
                            value={field.value}
                        />
                    )}
                />
            )}
        />
    );
}