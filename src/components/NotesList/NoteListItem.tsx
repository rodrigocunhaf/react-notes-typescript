import React from "react";
import styled from "styled-components";
import { BGColor } from "./interfaces/note-list-item";
import { NoteListItemInterface } from "./interfaces/note-list-item";
import iconNote from '../../assets/icons/note-image.png';


const NoteContainer = styled.li <BGColor>`
    background-color:white;
    color:black;
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
    flex-direction:column;

    p {
        display:flex;
        align-items:center;
        font-size:1rem;
        width:100%;
        margin:20px auto 0 auto;
        padding:5px;
        border:1px solid;
        border-radius:70px;
        display:block;
        text-align:center;
        background-color:black;
        color:white;
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