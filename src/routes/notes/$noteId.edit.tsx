import { createFileRoute } from "@tanstack/react-router";
import { NoteForm } from "../../pages/notes/NoteForm";


export const Route = createFileRoute("/notes/$noteId/edit")({
    component: NoteFormRoute,
    staticData:{
        title: "Редактировать заметку"
    }
})
function NoteFormRoute(){
    const {noteId} = Route.useParams()
    return <NoteForm noteId = {noteId} />
}