import IToolbarButton from "./interfaces/toolbar-button";
import ToolbarButton from "./ToolbarButton";

interface Props {
    toolbarButtons: IToolbarButton[]
}

export default function ToolbarButtonGroup({ toolbarButtons }: Props) {
    return (
        <div className="border-l border-r border-white/20 px-4 flex items-center gap-2">
            {
                toolbarButtons.map((toolbarButton, i) => (
                    <ToolbarButton
                        key={i}
                        toolbarButton={toolbarButton}
                    />
                ))
            }
        </div>
    );
}