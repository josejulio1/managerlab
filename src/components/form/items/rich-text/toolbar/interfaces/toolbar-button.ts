import { ReactElement } from "react";
import { IconBaseProps } from "react-icons";

export default interface IToolbarButton {
    icon: ReactElement<IconBaseProps>
    isActive: boolean
    command: () => boolean
}