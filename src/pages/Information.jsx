import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Information.css';

const Information = () => (
  <div className="information">
    <div className="information-content">
      <div className="information-head">
        <h2>Información de contacto: </h2>
      </div>
      <div className="information-form">
        <form>
          <input type="text" placeholder="Nombre completo" name="name" />
          <input type="email" placeholder="Correo electronico" name="email" />
          <input type="text" placeholder="Dirección" name="address" />
          <input type="text" placeholder="Apartamento" name="apto" />
          <input type="text" placeholder="Ciudad" name="city" />
          <input type="text" placeholder="País" name="country" />
          <input type="text" placeholder="Estado" name="state" />
          <input type="text" placeholder="Código Postal" name="cp" />
          <input type="text" placeholder="Teléfono" name="phone" />
        </form>
      </div>
      <div className="information-buttons">
        <Link to="/checkout">
          <div className="information-back">Regresar</div>
        </Link>
        <Link to="/checkout/payment">
          <div className="information-next">Pagar</div>
        </Link>
      </div>
    </div>
    <div className="information-sidebar">
      <h3>Pedido:</h3>
      <div className="information-item">
        <div className="information-element">
          <h4>Item Name</h4>
          <span>$10</span>
        </div>
      </div>
    </div>
  </div>
);

export default Information;
