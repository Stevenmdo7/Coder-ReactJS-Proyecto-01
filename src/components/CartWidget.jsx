import React from 'react';

function CartWidget() {
  const logoUrl = 'https://cdn-icons-png.flaticon.com/512/8146/8146003.png';
  return (
    <div className="cart-widget">
      <a href="#" className="cart-link">
        <img src={logoUrl} alt="Logo del carrito" className="cart-logo" />
        <span className="badge bg-danger"></span>
      </a>
    </div>
  );
}

export default CartWidget;
