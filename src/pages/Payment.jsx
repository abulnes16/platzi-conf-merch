import React, { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { PaymentItem } from '../components';
import { paypal } from '../constants';
import { paymentHelpers } from '../helpers';
import '../styles/components/Payment.css';

const Payment = () => {
  const {
    state: { cart, buyer },
    addNewOrder,
  } = useContext(AppContext);

  const history = useHistory();

  const handlePaymentSuccess = (data) => {
    console.log(data);
    if (data.status === paypal.status.completed) {
      const newOrder = {
        buyer,
        products: cart,
        payment: data,
      };

      addNewOrder(newOrder);
      history.push('/checkout/success');
    }
  };

  return (
    <div className="payment">
      <div className="payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <PaymentItem key={`${item.id}-${index}`} product={item} />
        ))}
        <div className="payment-button">
          <PayPalButton
            paypalOptions={paypal.options}
            buttonStyles={paypal.buttonStyles}
            amount={paymentHelpers.handleSumTotal(cart)}
            onPaymentStart={() => console.log('Start Payment')}
            onPaymentSuccess={handlePaymentSuccess}
            onPaymentError={(error) => console.log(error)}
            onPaymentCancel={(data) => console.log(data)}
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
