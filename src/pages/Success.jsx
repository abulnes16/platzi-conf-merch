import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Map } from '../components';
import useGoogleAddress from '../hooks/useGoogleAddress';
import '../styles/components/Success.css';

const Success = () => {
  const {
    state: { buyer },
  } = useContext(AppContext);
  const address = useGoogleAddress(buyer.address);

  return (
    <div className="success">
      <div className="success-content">
        <h2>{`${buyer.name}`}, Gracias por tu compra </h2>
        <span>Tu pedido llegara en 3 días a tu dirección</span>
        <div className="success-map">
          <Map location={address} />
        </div>
      </div>
    </div>
  );
};

export default Success;
