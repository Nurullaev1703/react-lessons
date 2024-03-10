import { createFileRoute } from "@tanstack/react-router";
import { Product } from "../../pages/products/Product";


export const Route = createFileRoute("/products/$productID")({
  component: ProductRoute
})

function ProductRoute(){
  const {productID} = Route.useParams()
  
  return <Product id={Number(productID)}/>
}