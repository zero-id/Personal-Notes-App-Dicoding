import React from 'react';
import HomePageWrapper from './pages/HomePage';
import Navigation from './components/Navigation';
import { Routes, Route } from 'react-router-dom'
import PageNotFound404 from './pages/PageNotFound404';
import DetailNotesPageWrapper from './pages/DetailNotesPage';
import ArchivePageWrapper from './pages/ArchivePage';
import AddNotesPage from './pages/AddNotePage';

function App() {
  return (
    <div className="app-container">
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/*" element={<PageNotFound404 />}></Route>
          <Route path="/" element={<HomePageWrapper />} />
          <Route path="/notes/:id" element={<DetailNotesPageWrapper />} />
          <Route path="/archives" element={<ArchivePageWrapper />} />
          <Route path='/notes/new' element={<AddNotesPage />} />

        </Routes>
      </main>
    </div>
  );
}

export default App;
