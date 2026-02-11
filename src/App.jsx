// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importe suas páginas
import Home from './pages/Home';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1 style={{color:'black'}}>Página não encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;