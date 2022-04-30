import React from "react";
import { Note } from "../../custom-types/notes-type";
import { NotesInterface } from './interface/notes';

const InitialState: NotesInterface = {
    notesList:[],
    currentId:1,
    addNotes:(note:Note) => {}
};

const NotesContext = React.createContext <NotesInterface>(InitialState);

export { NotesContext , InitialState};