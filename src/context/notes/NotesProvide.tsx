import React, {useState} from "react";
import { Note } from "../../custom-types/notes-type";
import { NotesContext , InitialState} from "./notes-context";


const NotesProvider: React.FC <{ children:React.ReactNode }> = props => {

    const [notesControler , setNotesController ] = useState(InitialState);

    const addNotes = (note:Note) => {
        setNotesController( prevState => {
            return {
                ...prevState,
                notesList: [...prevState.notesList, note],
                currentId: prevState.currentId +=1
            }   

        });

    };
    
    return (
            <NotesContext.Provider value={
                                            {
                                                ...notesControler,
                                                addNotes
                                            }
                                         }>
                {props.children}
            </NotesContext.Provider>)
};

export {NotesProvider}