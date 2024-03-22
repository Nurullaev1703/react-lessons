import  { FC, useState } from 'react';
import { Button } from '../../shared/ui/Button';
import { Card } from '../../shared/ui/Card';
import { COLORS_BACKGROUND } from '../../shared/ui/colors';
import { Typography } from '../../shared/ui/Typography';
import { Link, useNavigate } from '@tanstack/react-router';
import { notesData } from './data/notes';
import { NoteModel } from './model/Note';

interface Props {

}

export const NotesList: FC<Props> = function NotesList() {
  const navigate = useNavigate()

  const notesList = notesData?.map((item) =>{
    return <li className="w-full" key={item.uuid}>
    <Card className={`${COLORS_BACKGROUND.alternative} border-2 flex flex-col gap-5`}>
      <Typography size={20} weight={600}>
          {item.title}
      </Typography>
      <Typography size={16}>
          {item.description}
      </Typography>
      <Link
        to="/notes/$noteId"
        params= {{noteId: item.uuid}}
      >
      <Button mode='dark'>
        {"Подробнее"}
      </Button>
      </Link>
    </Card>
    </li>
  })
  return <div className='gap-6'>
    <Button onClick={() => navigate({to: "/notes/add"})}>{"+"}</Button>
    <ul className="flex gap-4 flex-wrap">
      {notesList}
    </ul>
  </div>
};