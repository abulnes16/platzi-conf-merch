import React from 'react';
import { FaShoppingBasket } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/components/Header.css';

const Header = () => (
  <header className="header">
    <Link to="/">
      <h1 className="header-title">PlatziConf Merch</h1>
    </Link>
    <div className="header-checkout">
      <Link to="/checkout">
        <FaShoppingBasket size="2x" />
      </Link>
    </div>
  </header>
);

export default Header;
