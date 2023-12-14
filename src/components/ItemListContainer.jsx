import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';

function ItemListContainer({ greeting, itemId }) {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch('/products.json');
        const data = await response.json();
        setProductos(data);
      } catch (error) {
        console.error('Error al cargar productos:', error);
      }
    };

    fetchProductos();
  }, []);

  return (
    <div className="container mt-4 text-center" style={{ marginTop: '70px' }}>
      <h2 className="animate__animated animate__fadeIn">{greeting}</h2>
      <div className="product-container">
        {productos.map(producto => (
          <div key={producto.id} className="product-card">
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="product-image"
            />
            <div className="product-info">
              <h5 className="card-title">{producto.nombre}</h5>
              <p className="card-text">{producto.descripcion}</p>
              <p className="card-text">${producto.precio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
