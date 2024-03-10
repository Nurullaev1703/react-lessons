import { createFileRoute } from "@tanstack/react-router";
import { NotesList } from "../../pages/notes/NotesList";


export const Route = createFileRoute("/notes/")({
    component: NotesListRoute,
    staticData:{
        title: "Список заметок"
    }
})
function NotesListRoute(){
    return <NotesList />
}