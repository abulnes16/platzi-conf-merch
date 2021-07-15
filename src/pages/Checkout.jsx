import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import '../styles/components/Checkout.css';
import CartItem from '../components/CartItem';

const Checkout = () => {
  const {
    state: { cart },
    removeFromCart,
  } = useContext(AppContext);

  const handleRemove = (product, index) => () => {
    removeFromCart(product, index);
  };

  const handleSumTotal = () =>
    cart.reduce(
      (accumulator, currentValue) => accumulator + currentValue.price,
      0
    );

  return (
    <div className="checkout">
      <div className="checkout-content">
        <h3>{cart.length > 0 ? 'Total Pedidos:' : 'Sin pedidos'} </h3>
        {cart.map((item, index) => (
          <CartItem
            // eslint-disable-next-line react/no-array-index-key
            key={`${item.id}-${index}`}
            product={item}
            handleRemove={handleRemove(item, index)}
          />
        ))}
      </div>
      {cart.length > 0 && (
        <div className="checkout-sidebar">
          <h3>Precio Total: ${handleSumTotal()}</h3>
          <Link to="/checkout/info">
            <button type="button">Continuar pedido</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;
