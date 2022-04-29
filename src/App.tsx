import React, { useState } from 'react';
import { Form } from './components/Form/Form';
import { Footer } from './components/layout/footer/footer';
import { Header } from './components/layout/header/header';
import { Main } from './components/layout/Main/Main';
import { NoteList } from './components/NotesList/NoteList';
import { Note } from './custom-types/notes-type';
import { NotesControlType  } from './custom-types/notes-control-type';
import { Route, Routes } from 'react-router-dom';
import { NewNotesPage } from './pages/NewNotesPage/NewNotesPage';

let InitialState:NotesControlType = {
  notesList:[],
  currentId:1
};

const App: React.FC = ( ) => {
  const [notesControl, setNotesControl ] = useState (InitialState);
 
  const getDataFromForm = ( note:Note ):void => { 
      setNotesControl( prevState => {
        return {
          ...prevState,
          notesList:[...prevState.notesList, note],
          currentId:prevState.currentId+=1 
        }});
  };


  return (
        <React.Fragment>
          <Header/>
          <Routes>
              <Route path='/create-note' element={<NewNotesPage/>}/>
          </Routes>
          <Footer/>
        </React.Fragment>
        );
  };

export default App;
