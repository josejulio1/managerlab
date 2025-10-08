'use client';

import { usePathname } from "next/navigation";
import paths from "../../data/paths";
import PanelItem from "./PanelItem";
import { MdMenu } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { AdminContext } from "@/context/admin.context";

export default function Panel() {
    const [isOpen, setIsOpen] = useState(true);
    const { state } = useContext(AdminContext);
    const pathname = usePathname();

    useEffect(() => {
        setIsOpen(window.innerWidth >= 768);
    }, [setIsOpen]);

    return (
        <aside className={`bg-[var(--bg-color)] p-4 shrink-0 flex flex-col items-start gap-4 ${isOpen ? 'basis-xs rounded-xl' : 'rounded-full'} ${state.isPanelHidden ? 'hidden' : ''}`}>
            <button
                className="flex items-center cursor-pointer w-full px-2"
                onClick={() => setIsOpen(state => !state)}
            >
                <MdMenu color="#FFFFFF" size={20} />
            </button>
            <hr className="text-white w-full" />
            <nav className="flex flex-col gap-4 items-start w-full">
                {
                    paths.map(path => (
                        <PanelItem
                            key={path.name}
                            path={path}
                            isSelected={pathname === path.href}
                            isPanelOpen={isOpen}
                        />
                    ))
                }
            </nav>
        </aside>
    );
}