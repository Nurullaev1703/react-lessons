import { createFileRoute } from '@tanstack/react-router'
import { Cars } from '../../pages/cars/Cars'

export type CarsQuerySearch = {
  color?:string,
  minYear?:number,
  maxYear?:number,
  minPrice?:number,
  maxPrice?:number
}

export const Route = createFileRoute('/cars/')({
  component: CarsRoute
})

function CarsRoute(){
  const query = Route.useSearch<CarsQuerySearch>()

  return <Cars {...query} />
}