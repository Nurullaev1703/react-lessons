import { TextField } from '@mui/material';
import  { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from '../../shared/ui/Button';

interface Props {

}

type Form = {
  title:string,
  description:string
}

export const NoteForm: FC<Props> = function NoteForm() {

  const {handleSubmit, control, formState: { isValid}} = useForm<Form>({
    defaultValues:{
      title:"",
      description:""
    }
  })

  return <form 
    className={`gap-6 flex flex-col pt-4`}
    onSubmit={handleSubmit((form) =>{
      console.log(form)
    })}
  >
    <Controller
      name={"title"}
      control={control}
      rules={{
        required:"Это поле обязательно",
        validate: (value) => value.length > 5 || "Минимум 5 символов"
      }}
      render={({ field, fieldState: {error} }) => (
        <TextField
          {...field}
          error={Boolean(error?.message)}
          helperText={error?.message}
          label={"Заголовок"} 
          fullWidth= {true} 
          variant='outlined' 
      />
      )} 
    />
    <Controller
      name={"description"}
      control={control}
      rules={{
        required:"Это поле обязательно",
        validate: (value) => value.length > 5 || "Минимум 5 символов"
      }}
      render={({ field, fieldState: {error} }) => (
        <TextField
          {...field}
          error={Boolean(error?.message)}
          helperText={error?.message}
          label={"Описание"} 
          fullWidth= {true} 
          multiline= {true}
          maxRows={4}
      />
      )} 
    />
    
    <Button disabled={!isValid} type='submit'>{"Добавить"}</Button>
  </form>
};