import React, { createContext } from 'react';
import useInitialState from '../hooks/useInitialState';

export const AppContext = createContext({});

const AppProvider = ({ children }) => {
  const { state, removeFromCart, addToCart } = useInitialState();
  return (
    <AppContext.Provider value={{ state, removeFromCart, addToCart }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
