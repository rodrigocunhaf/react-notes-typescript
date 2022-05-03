import React from "react";
import styled from "styled-components";
import { BGColor } from "./interfaces/note-list-item";
import { NoteListItemInterface } from "./interfaces/note-list-item";
import iconNote from '../../../public/assets/icons/note-image.png';


const NoteContainer = styled.li <BGColor>`
    background-color:${props => props.bgColor};
    color:black;
    border:5px solid black;
    padding:50px;
    margin:10px;
    max-width:150px;
    width:100%;
    display:flex;
    border-radius:20px;
    justify-content:center;
    align-itens:center;
    font-weight:bold;
    font-size:1.5rem;
    cursor:pointer;
    max-height:150px;
    height:150px;

    p {
        display:flex;
        align-items:center;
    }
`

type NoteItemType = BGColor & NoteListItemInterface

const NoteListItem: React.FC <NoteItemType>= props => {

    return (
        <NoteContainer bgColor={props.bgColor}>
            <div>pipoca</div>
        </NoteContainer>
    );
};

export { NoteListItem};