import { FC, useState } from "react";
import { Card } from "../shared/ui/Card";
import { Typography } from "../shared/ui/Typography";
import { Button } from "../shared/ui/Button";

interface Props {
  title: string;
  price: number;
  changeSum: (price: number) => void;
}

export const BasketItem: FC<Props> = function BasketItem(props) {
  const [count, setCount] = useState<number>(1);
  const [isVisible,setVisible] = useState<boolean>(true)

    
  if(isVisible)return (
    <li>
      <Card>
        <Typography size={20} align="center" className="mb-4" weight={600}>
          {props.title}
        </Typography>
        <div className="flex">
          <Button
            mode="dark"
            onClick={() => {
               (count > 0) ? setCount(count - 1) : setVisible(false);
            }}
          >
            {"-"}
          </Button>
          <Typography
            size={16}
            className="w-full flex justify-center items-center"
          >
            {count}
          </Typography>
          <Button mode="dark" onClick={() => setCount(count + 1)}>
            {"+"}
          </Button>
        </div>
        <div className="flex mt-4 justify-between items-center">
            <Typography size={20} weight={700} className="w-1/3">
                {props.price * count}
            </Typography>
            <Button mode="border" className="w-1/3" onClick={() => props.changeSum(props.price * count)}>
                {"Купить"}
            </Button>
        </div>
      </Card>
    </li>
  );
};
