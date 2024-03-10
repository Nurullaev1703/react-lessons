import {FC, HTMLAttributes} from "react"
import { COLORS_BACKGROUND } from "../shared/ui/colors"

export const Header:FC<HTMLAttributes<HTMLElement>> = function Header(props){

    return <header className={`${COLORS_BACKGROUND.primary} py-3`}>
        {props.children}
    </header>
}