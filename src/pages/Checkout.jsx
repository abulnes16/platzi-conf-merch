import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
import '../styles/components/Checkout.css';

const Checkout = () => (
  <div className="checkout">
    <div className="checkout-content">
      <h3>Lista de Pedidos:</h3>
      <div className="checkout-item">
        <div className="checkout-element">
          <h4>Item Name</h4>
          <span>$10</span>
        </div>
        <button type="button">
          <FaTrashAlt />
        </button>
      </div>
    </div>
    <div className="checkout-sidebar">
      <h3>Precio Total: $10</h3>
      <Link to="/checkout/info">
        <button type="button">Continuar pedido</button>
      </Link>
    </div>
  </div>
);

export default Checkout;
