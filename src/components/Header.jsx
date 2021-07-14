import React, { useContext, useMemo } from 'react';
import { FaShoppingBasket } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import '../styles/components/Header.css';

const Header = () => {
  const {
    state: { cart },
  } = useContext(AppContext);

  const quantityInCart = useMemo(() => cart.length, [cart]);

  return (
    <header className="header">
      <Link to="/">
        <h1 className="header-title">PlatziConf Merch</h1>
      </Link>
      <div className="header-checkout">
        <Link to="/checkout">
          <FaShoppingBasket size="2x" />
        </Link>
        {quantityInCart > 0 && (
          <div className="header-alert">{quantityInCart}</div>
        )}
      </div>
    </header>
  );
};

export default Header;
