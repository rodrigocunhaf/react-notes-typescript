import { Note } from "../../../custom-types/notes-type";

export interface NotesInterface {
        notesList:Note[],
        currentId:number,
        addNotes:(note:Note) => void;
};


