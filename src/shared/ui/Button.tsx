import {ButtonHTMLAttributes, FC} from "react"
import { COLORS_BACKGROUND, COLORS_BORDER, COLORS_TEXT } from "./colors"

type ButtonType = "default" | "border" | "dark"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
    mode?: ButtonType
}

export const Button:FC<Props> = function Button(props){
    const {mode = "default", ...rest} = props
    
    let bgButton = COLORS_BACKGROUND.main400
    let textColor = COLORS_TEXT.alternative

    if(mode == "dark"){
        bgButton = COLORS_BACKGROUND.secondary400
    }
    else if(mode == "border"){
        bgButton = `border ${COLORS_BORDER.secondary200}`
        textColor = COLORS_TEXT.secondary400
    }
    if(props.disabled){
        bgButton = COLORS_BACKGROUND.secondary100
        textColor = COLORS_TEXT.secondary200
    }
    return <button 
        {...rest}
        className= {`rounded pb-2 pt-2 w-full ${bgButton} ${rest.className}`}
        >
            <p className= {`font-semibold ${textColor}`}>{rest.children}</p>
    </button>
}