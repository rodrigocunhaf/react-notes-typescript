import React from 'react';
import { Footer } from './components/layout/footer/footer';
import { Header } from './components/layout/Header/Header';
import { Route, Routes } from 'react-router-dom';
import { NewNotesPage } from './pages/NewNotesPage/NewNotesPage';
import { NotesProvider } from './context/notes/NotesProvide';
import { NotesListPage } from './pages/NotesListPage/NotesListPage';
import { ScreenContainer } from './global';
import { Welcome } from './pages/WelcomePage/WelcomePage';
import { NotFound } from './pages/NotFoundPage/NotFoundPage';

const App: React.FC = ( ) => {

  return (
        <NotesProvider>
          <ScreenContainer/>
          <Header/>
          <Routes>
              <Route path='/' element={<Welcome/>}/>
              <Route path='/create-note' element={<NewNotesPage/>}/>
              <Route path='/notes' element ={<NotesListPage/>}/>
              <Route path='*'  element ={<NotFound/>}/>
          </Routes>
          <Footer/>
        </NotesProvider>
        );
  };

export default App;
