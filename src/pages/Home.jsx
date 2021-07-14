import React from 'react';
import { Products } from '../components';
import initialState from '../mock/data';

const Home = () => <Products products={initialState.products} />;

export default Home;
