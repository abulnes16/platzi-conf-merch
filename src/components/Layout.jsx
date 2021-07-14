import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/components/Layout.css';

const Layout = ({ children }) => (
  <main className="main">
    <Header />
    {children}
    <Footer />
  </main>
);

export default Layout;
