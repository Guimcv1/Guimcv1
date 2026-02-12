// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "/src/pages/Home.jsx";

function App() {
  return (
    <BrowserRouter basename="/Guimcv1">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="*"
          element={<h1 style={{ color: "black" }}>Página não encontrada</h1>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
