import  { FC } from 'react';
import { Typography } from '../../shared/ui/Typography';
import { Card } from '../../shared/ui/Card';
import { Link } from '@tanstack/react-router';
import { Button } from '../../shared/ui/Button';
import { CarsQuerySearch } from '../../routes/cars';
import { cars } from './model/Car';


export const Cars: FC<CarsQuerySearch> = function Cars(props) {
  const list = cars.filter(item => 
    (item.price >= (props.minPrice ?? item.price) &&
    item.price <= (props.maxPrice ?? item.price)) &&
    (item.year >= (props.minYear ?? item.year) &&
    item.year <= (props.maxYear ?? item.year)) &&
    (item.color.toLowerCase() == (props.color ?? item.color.toLowerCase()))
  ).map((item) =>
    <li key={item.uuid}>
      <Card>
        <Typography size={20} align='center' className='mb-2'>
          {`${item.brand} ${item.model}`}
        </Typography>
        <Typography size={20} align='center' className='mb-2'>
          {item.price}
        </Typography>
        <Link 
          to='/cars/$carID'
          params={{carID: item.uuid}}
        >
          <Button mode='dark'>{"Go to"}</Button>
        </Link>
      </Card>
    </li>
  )
  return <ul>{list}</ul>
};