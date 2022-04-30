import React, { useRef } from "react";
import { FormInterface } from "./interfaces/form";
import { Note } from '../../custom-types/notes-type';
import { ScreenBox } from "../ScreenBox/ScreenBox";
import styled from "styled-components"; 

const FormContainer = styled.div`
    display:flex;
    justify-content:center;
    
    form {
        display:flex;
        flex-direction:column;
        margin-top:30px;
    }

    form label {
        font-size: 1.5rem;
    }

    form input {
        height:30px;
        width:100%;
        margin-bottom:10px;
    }

    form input, textarea { 
        display:block;
        min-width:500px;
        box-sizing:border-box;
        padding:5px;
        font-size:1.4rem;

        &:focus {
            outline:0;
            border:0;
            box-shadow:0 0 3px 1px black;
        }
    }

    form textarea{
        min-height:500px;
        max-width:500px;
        max-height:500px;
    }

    form button {
        max-width:50%;
        margin:30px auto;
        width:100%;
        height:40px;
        cursor:pointer;
        border:0;
        border-radius:7px;
        background-color:#83C5BE;
        font-size:1.1rem;
        padding:30px;
        display:flex;
        align-items:center;
        justify-content:center;

        &:hover {
            box-shadow:0 0 3px 1px black;   
        }
    }
`

const Form: React.FC <FormInterface> = ( props ) => {

    const author = useRef <HTMLInputElement | null> (null);
    const note = useRef <HTMLTextAreaElement | null> (null);

    const onSubmitHandler = ( event:React.FormEvent) =>{
        event.preventDefault();
        const newNote: Note = {
            author:author.current?.value!,
            id:props.currentId,
            text:note.current?.value!
        }
        props.addNotes(newNote);
    };

    return (
        <ScreenBox>
            <FormContainer>
                <form onSubmit={onSubmitHandler}>
                    <label>Author
                        <input type={'text'} ref={author}/>
                    </label>
                    <label>Note
                            <textarea ref={note}/>
                    </label>
                    <button type={'submit'}>Submit</button>
                </form>
            </FormContainer>
        </ScreenBox>
    );
};

export { Form }