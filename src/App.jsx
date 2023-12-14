import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Categorias from './components/categorias';

function App() {
  return (
    <Router>
      <div className="text-center">
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/categorias/:categoria" element={<Categorias />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;