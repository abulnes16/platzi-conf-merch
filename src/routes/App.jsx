import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {
  HomePage,
  CheckoutPage,
  InformationPage,
  PaymentPage,
  SuccessPage,
  NotFoundPage,
} from '../pages';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/checkout" component={CheckoutPage} />
      <Route exact path="/checkout/info" component={InformationPage} />
      <Route exact path="/checkout/payment" component={PaymentPage} />
      <Route exact path="/checkout/success" component={SuccessPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default App;
