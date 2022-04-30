import React from 'react';
import { Footer } from './components/layout/footer/footer';
import { Header } from './components/layout/Header/Header';
import { Route, Routes } from 'react-router-dom';
import { NewNotesPage } from './pages/NewNotesPage/NewNotesPage';
import { NotesProvider } from './context/notes/NotesProvide';
import { NotesListPage } from './pages/NotesListPage/NotesListPage';
import { ScreenContainer } from './global';

const App: React.FC = ( ) => {

  return (
        <NotesProvider>
          <ScreenContainer/>
          <Header/>
          <Routes>
              <Route path='/create-note' element={<NewNotesPage/>}/>
              <Route path='/notes' element ={<NotesListPage/>}/>
          </Routes>
          <Footer/>
        </NotesProvider>
        );
  };

export default App;
