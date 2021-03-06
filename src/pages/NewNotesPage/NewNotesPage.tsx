import React, { useContext } from "react";
import { Form } from "../../components/Form/Form";
import { Main } from "../../components/layout/Main/Main";
import { NotesContext } from "../../context/notes/notes-context";


const NewNotesPage: React.FC = props => {

    const notesContext = useContext(NotesContext)

    return (
            <Main>
                <Form 
                      addNotes={notesContext.addNotes} 
                      currentId={notesContext.currentId}/>
            </Main>
    )
};

export { NewNotesPage };