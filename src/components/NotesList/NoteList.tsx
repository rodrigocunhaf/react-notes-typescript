import React, { useState } from "react";
import { NoteListInterface } from "./interfaces/note-list";
import { NoteListItem } from "./NoteListItem";
import styled from 'styled-components';
import dataComponent from './data/note-list-item-data.json';
import { Filter } from "../Filter/Filter";
import { Pagination } from "../Pagination/Pagination";

const NoteListContainer = styled.div`
        display:flex;
        background-color:white;
        max-width:90%;
        margin:20px auto;
        height:fit-content;
        padding-bottom:50px;

        .box-itemList{
            width:100%;
            display:flex;
            flex-direction: column;
            justify-content:space-between;
            height: fit-content;
        }
        
        .itemsList {
            display:flex;
            flex-wrap:wrap;
            width:92%;
            justify-content:flex-start;
            padding-top: 50px;
            margin: auto auto;
        }

        pagination
            display:flex;

            li {
                cursor:pointer;
                display:inline-block
                color:red;
            }
        }
        
`

const NoteList: React.FC <NoteListInterface> = ( props ) => {

    const [itemsByPage, setItemsByPage] = useState <number> (8);

    const updateItensByPage = ( quantyItems:number) => {
        setItemsByPage(quantyItems);
    };
    
    return ( 
        <NoteListContainer>
            <div className="box-itemList">
                <Filter updateItensByPage={updateItensByPage}/>
                <ul className="itemsList">{ props.allNotes.slice(0,itemsByPage).map( item =>{
                    let randomColor = Math.round(Math.random()*10);
                    return <NoteListItem key={item.id} author={item.author} note={item.text} bgColor={dataComponent[randomColor]} />
                    })}
                </ul>
                <Pagination allNotes={props.allNotes}/>
            </div>
        </NoteListContainer>
    );
};

export { NoteList };