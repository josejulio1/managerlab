'use client';

import { useRouter } from "next/navigation";
import { ReactNode, useContext, useEffect } from "react";
import { motion } from "motion/react";
import { MdClose } from "react-icons/md";
import { AdminContext } from "@/context/admin.context";

interface Props {
    className?: string
    title: string
    children: ReactNode | ReactNode[]
}

export default function Modal({ className, title, children }: Props) {
    const router = useRouter();
    const { dispatch } = useContext(AdminContext);

    useEffect(() => {
        dispatch({ type: 'IS-MODAL-OPEN', payload: true });
    }, [dispatch]);

    const onClick = () => {
        router.back();
        dispatch({ type: 'IS-MODAL-OPEN', payload: false });
    }

    return (
        <div
            className="fixed inset-0 flex flex-col justify-center items-center bg-[var(--theme-color)]/80 z-50 p-4"
            onMouseDown={onClick}
        >
            <motion.section
                className={`bg-[var(--bg-color)] rounded-xl p-8 overflow-y-auto ${className ? className : 'max-sm:w-full sm:w-xl '}`}
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { duration: .2 }
                }}
                onMouseDown={e => e.stopPropagation()}
            >
                <section className="flex justify-between items-center gap-8">
                    <h2 className="text-white text-3xl font-medium">{title}</h2>
                    <button
                        className="cursor-pointer"
                        onClick={onClick}
                    >
                        <MdClose
                            className="text-white"
                            size={40}
                        />
                    </button>
                </section>
                {children}
            </motion.section>
        </div>
    );
}