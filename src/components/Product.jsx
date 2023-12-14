import React from 'react';

const Product = ({ id }) => {
  return (
    <div>
      <h3>Producto {id}</h3>
      <p>Descripción del producto {id}</p>
      <button>Agregar al carrito</button>
    </div>
  );
};

export default Product;
