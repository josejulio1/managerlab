import { ReactElement } from "react"
import { IconBaseProps } from "react-icons"

export default interface Path {
    name: string
    href: string
    icon: ReactElement<IconBaseProps>
}