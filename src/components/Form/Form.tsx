import React, { useRef } from "react";
import { FormInterface } from "./interfaces/form";
import { Note } from '../../custom-types/notes-type';

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
        props.getDataFromForm(newNote);
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <label>Author
                <input type={'text'} ref={author}/>
            </label>
            <label>Note
                    <textarea ref={note}/>
            </label>
            <button type={'submit'}>Submit</button>
        </form>
    );
};

export { Form }