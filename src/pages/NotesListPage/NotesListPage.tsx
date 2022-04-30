import React, { useContext } from "react";
import { Main } from "../../components/layout/Main/Main";
import { NoteList } from "../../components/NotesList/NoteList";
import { NotesContext } from "../../context/notes/notes-context";


const NotesListPage: React.FC = props => {

    const notesContext = useContext(NotesContext)

    return (
            <Main>
                <NoteList allNotes={notesContext.notesList}/>
            </Main>
    )
};

export { NotesListPage };