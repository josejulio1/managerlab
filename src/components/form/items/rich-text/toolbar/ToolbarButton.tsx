import { cloneElement } from "react";
import IToolbarButton from "./interfaces/toolbar-button";

interface Props {
    toolbarButton: IToolbarButton
}

export default function ToolbarButton({ toolbarButton }: Props) {
    return (
        <button
            className={`p-2 rounded cursor-pointer ${toolbarButton.isActive ? 'bg-white/20' : ''}`}
            onClick={e => {
                e.preventDefault();
                toolbarButton.command();
            }}
        >
            {
                cloneElement(toolbarButton.icon, {
                    className: 'text-white',
                    size: 20
                })
            }
        </button>
    );
}