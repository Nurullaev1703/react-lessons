import {FC} from "react"
import { Typography } from "../shared/ui/Typography"
import { COLORS_TEXT } from "../shared/ui/colors"

interface Props{
    sum:number
}

export const Header:FC<Props> = function Header(props){

    return <header className="bg-blue-400 py-3">
        <Typography size={24} color={COLORS_TEXT.alternative} align="center">
            {`Список товаров в корзине: ${props.sum}`}
        </Typography>
    </header>
}