import React from 'react';
import 'animate.css/animate.min.css';

function ItemListContainer({ greeting }) {
  const productos = [
    { id: 1, nombre: 'Nirvanish', precio: 20 },
    { id: 2, nombre: 'Pink Cloyd', precio: 30 },
    { id: 3, nombre: 'Metallicow', precio: 25 },
  ];

  return (
    <div className="container mt-4 text-center">
      <h2 className="animate__animated animate__fadeIn">{greeting}</h2>
      <div className="row justify-content-center">
        {productos.map(producto => (
          <div key={producto.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">${producto.precio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
