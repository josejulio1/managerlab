import { ReactNode } from "react";

interface Props {
    modal: ReactNode
    children: ReactNode
}

export default function PlansLayout({ modal, children }: Props) {
    return (
        <>
            {modal}
            {children}
        </>
    );
}