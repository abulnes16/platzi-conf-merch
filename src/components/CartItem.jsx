import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const CartItem = ({ product, handleRemove }) => (
  <div className="checkout-item">
    <div className="checkout-element">
      <h4>{product.title}</h4>
      <span>${product.price}</span>
    </div>
    <button className="remove-button" type="button" onClick={handleRemove}>
      <FaTrashAlt />
    </button>
  </div>
);

export default CartItem;
