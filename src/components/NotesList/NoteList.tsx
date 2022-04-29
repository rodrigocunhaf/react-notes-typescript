import React from "react";
import { NoteListInterface } from "./interfaces/note-list";
import { NoteListItem } from "./NoteListItem";

const NoteList: React.FC <NoteListInterface> = ( props ) => {
    
    return ( 
        <ul>{ props.allNote.map( item =>{
            return <NoteListItem key={item.id} author={item.author} note={item.text}/>
            })}
        </ul>
    );
};

export { NoteList };