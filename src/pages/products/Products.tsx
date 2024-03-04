import  { FC } from 'react';
import { Typography } from '../../shared/ui/Typography';
import { products } from './model/Product';
import { Card } from '../../shared/ui/Card';
import { Link } from '@tanstack/react-router';
import { Button } from '../../shared/ui/Button';
import { ProductsQuerySearch } from '../../routes/products';


export const Products: FC<ProductsQuerySearch> = function Products(props) {
  const list = products.filter((item) =>
    item.price >= (props.from ?? item.price) &&
    item.price <= (props.to ?? item.price)
  )
  .map((item) =>
    <li key={item.id.toString()}>
      <Card>
        <Typography size={20} align='center'>
          {item.name}
        </Typography>
        <Link 
          to='/products/$productID'
          params={{productID: item.id.toString()}}
        >
          <Button mode='dark'>{"Go to"}</Button>
        </Link>
      </Card>
    </li>
  )
  return <ul>{list}</ul>
};