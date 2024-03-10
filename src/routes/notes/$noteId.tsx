import { createFileRoute } from "@tanstack/react-router";
import { NoteOne } from "../../pages/notes/NoteOne";


export const Route = createFileRoute("/notes/$noteId")({
    component: NoteOneRoute,
    staticData:{
        title: "Заметка"
    }
})
function NoteOneRoute(){
    return <NoteOne />
}