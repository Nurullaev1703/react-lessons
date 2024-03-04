import { createFileRoute } from '@tanstack/react-router'
import { Products } from '../../pages/products/Products'

export type ProductsQuerySearch = {
  from?: number,
  to?: number
}

export const Route = createFileRoute('/products/')({
  component: ProductsRoute
})

function ProductsRoute(){
  const query = Route.useSearch<ProductsQuerySearch>()

  return <Products {...query} />
}