// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Certificados from "./pages/Certificados";
import Projeto from "./pages/Projeto";

function App() {
  return (
    <BrowserRouter basename="/Guimcv1">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Projeto />} />
        <Route path="/certificados" element={<Certificados />} />
        <Route path="/projects" element={<Projeto />} />
        <Route path="/team" element={<Projeto />} />
        <Route
          path="*"
          element={<h1 style={{ color: "black" }}>Página não encontrada</h1>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
