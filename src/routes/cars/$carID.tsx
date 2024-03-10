import { createFileRoute } from '@tanstack/react-router'
import { Car } from '../../pages/cars/Car'

export const Route = createFileRoute('/cars/$carID')({
  component: CarRoute
})

function CarRoute(){
  const {carID} = Route.useParams()

  return <Car uuid={carID}/>
}