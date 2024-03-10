import  { FC } from 'react';
import { cars } from './model/Car';
import { Card } from '../../shared/ui/Card';
import { Typography } from '../../shared/ui/Typography';
import { COLORS_BACKGROUND, COLORS_TEXT } from '../../shared/ui/colors';

interface props {
 uuid: string;
}

export const Car: FC<props> = function Car(props) {
  const car = cars.find(item => item.uuid === props.uuid)
  return Boolean(car) && <Card color={COLORS_BACKGROUND.secondary100}>
      <div className="text-container mb-2">
        <Typography size={16} weight={700}> {"Название машины"}</Typography>
        <Typography size={14} weight={400} color={COLORS_TEXT.alternative}> {`${car?.brand} ${car?.model}`}</Typography>
      </div>
      <div className="text-container mb-2">
        <Typography size={16} weight={700}> {"Цвет машины"}</Typography>
        <Typography size={14} weight={400} color={COLORS_TEXT.alternative}> {car?.color}</Typography>
      </div>
      <div className="text-container mb-2">
        <Typography size={16} weight={700}> {"Год выпуска"}</Typography>
        <Typography size={14} weight={400} color={COLORS_TEXT.alternative}> {car?.year}</Typography>
      </div>
      <div className="text-container">
        <Typography size={16} weight={700}> {"Цена машины"}</Typography>
        <Typography size={20} weight={400} color={COLORS_TEXT.alternative}> {car?.price}</Typography>
      </div>
  </Card> 
};