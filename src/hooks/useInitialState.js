import { useState } from 'react';
import initialState from '../mock/data';

const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (_payload, index) => {
    setState({
      ...state,
      cart: state.cart.filter((_items, i) => index !== i),
    });
  };

  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyer: [...state.buyer, payload],
    });
  };

  const addNewOrder = (payload) => {
    setState({
      ...state,
      orders: [...state.orders, payload],
    });
  };

  return { state, addToCart, removeFromCart, addToBuyer, addNewOrder };
};

export default useInitialState;
