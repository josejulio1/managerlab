import { ReactNode } from "react";

interface Props {
    modal: ReactNode
    children: ReactNode
}

export default function BlogsLayout({ modal, children }: Props) {
    return (
        <>
            {modal}
            {children}
        </>
    );
}