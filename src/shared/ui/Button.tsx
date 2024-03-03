import {ButtonHTMLAttributes, FC} from "react"

type ButtonType = "default" | "border" | "dark"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
    mode?: ButtonType
}

export const Button:FC<Props> = function Button(props){
    const {mode = "default", ...rest} = props
    
    let bgButton = "bg-blue-400"
    let textColor = "text-white"

    if(mode == "dark"){
        bgButton = "bg-gray-800"
    }
    else if(mode == "border"){
        bgButton = "border bg-white border-gray-400"
        textColor = "text-gray-800"
    }

    return <button 
        {...rest}
        className= {`rounded pb-2 pt-2 w-full ${bgButton} ${rest.className}`}
        >
            <p className= {`font-semibold ${textColor}`}>{rest.children}</p>
    </button>
}