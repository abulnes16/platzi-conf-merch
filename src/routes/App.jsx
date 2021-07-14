import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Layout } from '../components';
import AppProvider from '../context/AppContext';
import {
  HomePage,
  CheckoutPage,
  InformationPage,
  PaymentPage,
  SuccessPage,
  NotFoundPage,
} from '../pages';

const App = () => (
  <AppProvider>
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/checkout/info" component={InformationPage} />
          <Route exact path="/checkout/payment" component={PaymentPage} />
          <Route exact path="/checkout/success" component={SuccessPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Layout>
    </BrowserRouter>
  </AppProvider>
);

export default App;
