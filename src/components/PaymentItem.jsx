import React from 'react';

const PaymentItem = ({ product }) => (
  <div className="payment-item">
    <div className="payment-element">
      <h4>{product.title}</h4>
      <span>${product.price}</span>
    </div>
  </div>
);

export default PaymentItem;
