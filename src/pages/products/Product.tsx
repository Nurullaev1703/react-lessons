import  { FC } from 'react';
import { Typography } from '../../shared/ui/Typography';
import { products } from './model/Product';

interface Props{
  id: number
}

export const Product: FC<Props> = function Product(props) {

  const product = products.find((item) => item.id === props.id)

  return <Typography>{product? product.name : "Товар не найден"}</Typography>
};