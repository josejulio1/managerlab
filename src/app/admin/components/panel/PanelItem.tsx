import Link from "next/link";
import { cloneElement } from "react";
import Path from "../../interfaces/path";

interface Props {
    path: Path
    isSelected: boolean
    isPanelOpen: boolean
}

export default function PanelItem({ path, isSelected, isPanelOpen }: Props) {
    return (
        <Link
            key={path.name}
            href={path.href}
            className={`flex items-center gap-4 h-10 rounded-xl p-2 transition duration-[.2s] hover:bg-[var(--main-color)] ${isSelected ? 'bg-white/10' : ''} ${isPanelOpen ? 'w-full' : ''}`}
        >
            {
                cloneElement(path.icon, {
                    size: 20,
                    color: '#FFFFFF'
                })
            }
            <p className={`text-white ${isPanelOpen ? '' : 'hidden'}`}>{path.name}</p>
        </Link>
    );
}