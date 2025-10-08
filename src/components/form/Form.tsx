'use client';

import { FieldValues, useFormContext } from "react-hook-form";
import SubmitButton from "./SubmitButton";
import { ReactElement, useState } from "react";
import { useRouter } from "next/navigation";
import ActionResponse from "@/app/admin/interfaces/action";

interface Props<T, R> {
    submitButtonText: string
    children: ReactElement | ReactElement[]
    handleRouteBack?: boolean
    handlers?: {
        onSuccess?: (serverActionResponse: ActionResponse & R) => void
        onFailure?: (error: string) => void
    }
    serverAction: (data: T) => Promise<ActionResponse & R>
}

export default function Form<T extends FieldValues, R>({ submitButtonText, children, handleRouteBack = true, handlers, serverAction }: Props<T, R>) {
    const [isLoading, setIsLoading] = useState(false);
    const { handleSubmit } = useFormContext<T>();
    const router = useRouter();

    const onSubmit = async (data: T) => {
        setIsLoading(true);
        const response = await serverAction(data);
        if (response.status >= 200 && response.status <= 299) {
            handlers?.onSuccess?.(response);
            if (handleRouteBack) {
                router.back();
            }
        } else {
            handlers?.onFailure?.(response.message);
        }
        setIsLoading(() => false);
    }

    return (
        <form
            className="flex flex-col gap-4 w-full"
            onSubmit={handleSubmit(onSubmit)}
        >
            {children}
            <SubmitButton
                text={submitButtonText}
                isLoading={isLoading}
            />
        </form>
    );
}