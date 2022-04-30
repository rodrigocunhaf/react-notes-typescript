import React from "react";
import { NoteListInterface } from "./interfaces/note-list";
import { NoteListItem } from "./NoteListItem";
import styled from 'styled-components';

const NoteListContainer = styled.div`
        display:flex;
        justify-content:center;
`

const NoteList: React.FC <NoteListInterface> = ( props ) => {
    
    return ( 
        <NoteListContainer>
            <ul>{ props.allNotes.map( item =>{
                return <NoteListItem key={item.id} author={item.author} note={item.text}/>
                })}
            </ul>
        </NoteListContainer>
    );
};

export { NoteList };