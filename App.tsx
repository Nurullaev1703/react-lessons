import {FC, useState} from "react"
import {Header} from "./src/components/Header"
import { BasketItem } from "./src/components/BasketItem"

const data = [
  {
    title: "bananas",
    price: 500
  },
  {
    title: "peaches",
    price: 400
  },
  {
    title: "apples",
    price: 340
  }
]
export const App:FC = function App() {
  const [sum,setSum] = useState<number>(0)

  const changeSum = (price: number) => {
    setSum((prevSum) => prevSum + price);
  };

  const list = data.map(item => <BasketItem key={item.title} title={item.title} price={item.price} changeSum={changeSum}/>)

  return (
    <>
    <Header sum = {sum}/>
    <ul>{list}</ul>
    </>
  )
}
