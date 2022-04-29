import React from "react";
import { NoteListItemInterface } from "./interfaces/note-list-item";

const NoteListItem: React.FC <NoteListItemInterface>= props => {
    
    return (
        <li>
            <p>{props.author}</p>
            <p>{props.note}</p>
        </li>
    );
};

export { NoteListItem};