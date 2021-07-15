import React, { createContext } from 'react';
import useInitialState from '../hooks/useInitialState';

export const AppContext = createContext({});

const AppProvider = ({ children }) => {
  const { state, removeFromCart, addToCart, addToBuyer } = useInitialState();
  return (
    <AppContext.Provider
      value={{ state, removeFromCart, addToCart, addToBuyer }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
