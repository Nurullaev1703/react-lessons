import  { FC } from 'react';
import { COLORS_BACKGROUND, COLORS_TEXT } from '../../shared/ui/colors';
import { Card } from '../../shared/ui/Card';
import { Typography } from '../../shared/ui/Typography';
import { NoteModel } from './model/Note';
import { notesData } from './data/notes';
import { Button } from '../../shared/ui/Button';
import { Link } from '@tanstack/react-router';

interface Props {
  uuid:string
}

export const NoteOne: FC<Props> = function NoteOne(props) {
  const note = notesData?.find(item => item.uuid === props.uuid);

  return Boolean(note) &&  <Card className={`${COLORS_BACKGROUND.alternative} border-2 w-1/2`} key={note?.uuid}>
    <Typography size={20} weight={600}>
        {note?.title}
    </Typography>
    <Typography size={16}>
        {note?.description}
    </Typography>
    <Typography size={16} color={COLORS_TEXT.main400}>
      {note?.dateDistance}
    </Typography>
    <Link
      to = {"/notes/$noteId/edit"}
      params = {{noteId: note?.uuid ?? ""}}
    >
    <Button mode='border'>
      {"Редактировать"}
    </Button>
    </Link>
  </Card>
};