'use client';

import SweetAlert from "@/lib/sweetalert";
import Link from "next/link";
import { ReactNode } from "react";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import ActionResponse from "../../interfaces/action";

interface Props<T> {
    className?: string
    id: T
    editHref: string
    children: ReactNode | ReactNode[]
    deleteServerAction: (id: T) => Promise<ActionResponse>
}

export default function Card<T>({ className, id, editHref, children, deleteServerAction }: Props<T>) {
    const handleDelete = () => {
        SweetAlert({
            title: 'Are you sure?',
            text: 'This action cannot be undone!',
            icon: 'warning',
            confirmButtonText: 'Delete',
            cancelButtonText: 'Cancel'
        })
        .then(async result => {
            if (result.isConfirmed) {
                const { message, status } = await deleteServerAction(id);
                if (status >= 200 && status <= 299) {
                    toast.success(message);
                } else {
                    toast.error(message);
                }
            }
        });
    }

    return (
        <article className="rounded-2xl bg-[var(--bg-color)] flex justify-between overflow-hidden min-h-fit max-lg:flex-col">
            <Link
                href={`${editHref}/${id}`}
                className={`p-4 w-full transition duration-[.2s] cursor-pointer hover:bg-white/10 ${className ? className : ''}`}
            >
                {children}
            </Link>
            <div className="bg-white/15 max-lg:h-[1] lg:w-[1px]"></div>
            <button
                className="flex justify-center items-center transition duration-[.2s] p-4 cursor-pointer basis-16 hover:bg-red-500 hover:[&_svg]:text-black"
                onClick={handleDelete}
            >
                <MdDelete className="text-red-600 transition duration-[.2s]" size={20} />
            </button>
        </article>
    );
}