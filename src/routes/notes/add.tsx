import { createFileRoute } from "@tanstack/react-router";
import { NoteForm } from "../../pages/notes/NoteForm";


export const Route = createFileRoute("/notes/add")({
    component: NoteFormRoute,
    staticData:{
        title: "Добавление заметки"
    }
})
function NoteFormRoute(){
    return <NoteForm />
}