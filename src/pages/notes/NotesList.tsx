import  { FC } from 'react';
import { Button } from '../../shared/ui/Button';
import { Card } from '../../shared/ui/Card';
import { COLORS_BACKGROUND } from '../../shared/ui/colors';
import { Typography } from '../../shared/ui/Typography';
import { useNavigate } from '@tanstack/react-router';

interface Props {

}

export const NotesList: FC<Props> = function NotesList() {
  const navigate = useNavigate()

  return <div className='gap-6'>
    <Button onClick={() => navigate({to: "/notes/add"})}>{"+"}</Button>
    <ul className="flex gap-4 flex-wrap">
      <li className="w-full">
        <Card className={`${COLORS_BACKGROUND.alternative} border-2`}>
          <Typography size={20} weight={600}>
              {"Заголовок"}
          </Typography>
          <Typography size={16}>
              {"описание заметки"}
          </Typography>
        </Card>
      </li>
    </ul>
  </div>
};