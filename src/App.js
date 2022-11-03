import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar';
import BooksPage from './pages/BooksPage';
import CategoriesPage from './pages/CategoriesPage';
import NomatchPage from './pages/NomatchPage';

const App = () => (
  <Router>
    <NavBar />
    <Routes>
      <Route index path="/" element={<BooksPage />} />
      <Route path="/categories" element={<CategoriesPage />} />
      <Route path="*" element={<NomatchPage />} />
    </Routes>
  </Router>
);

export default App;
