import React from 'react';
import CartWidget from './CartWidget';
import './NavBar.css';

function NavBar() {
  const handleColorToggle = () => {
    document.body.classList.toggle('invert-colors');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand mx-auto" href="#">El Nirvana Pirata</a>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={handleColorToggle}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Categorías</a>
            </li>
          </ul>
        </div>
        <div className="d-flex">
          <CartWidget />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
