import React from 'react';

const Product = ({ product }) => (
  <div className="products-item">
    <img src={product.image} alt={product.title} />
    <div className="products-item-info">
      <h2>{product.title}</h2>
      <span>$ {product.price} </span>
      <p>{product.desription}</p>
    </div>
    <button type="button">Comprar</button>
  </div>
);

export default Product;
