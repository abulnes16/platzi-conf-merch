import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import useForm from '../hooks/useForm';
import '../styles/components/Information.css';

const Information = () => {
  const {
    state: { cart },
    addToBuyer,
  } = useContext(AppContext);

  const { form, onChange } = useForm({
    name: '',
    email: '',
    address: '',
    apto: '',
    city: '',
    country: '',
    state: '',
    cp: '',
    phone: '',
  });

  const history = useHistory();

  const handleSubmit = () => {
    addToBuyer(form);
    history.push('/checkout/payment');
  };

  return (
    <div className="information">
      <div className="information-content">
        <div className="information-head">
          <h2>Información de contacto: </h2>
        </div>
        <div className="information-form">
          <form>
            <input
              type="text"
              value={form.name}
              onChange={onChange}
              placeholder="Nombre completo"
              name="name"
            />
            <input
              type="email"
              value={form.email}
              onChange={onChange}
              placeholder="Correo electronico"
              name="email"
            />
            <input
              type="text"
              value={form.address}
              onChange={onChange}
              placeholder="Dirección"
              name="address"
            />
            <input
              type="text"
              value={form.apto}
              onChange={onChange}
              placeholder="Apartamento"
              name="apto"
            />
            <input
              type="text"
              value={form.city}
              onChange={onChange}
              placeholder="Ciudad"
              name="city"
            />
            <input
              type="text"
              value={form.country}
              onChange={onChange}
              placeholder="País"
              name="country"
            />
            <input
              type="text"
              value={form.state}
              onChange={onChange}
              placeholder="Estado"
              name="state"
            />
            <input
              type="text"
              value={form.cp}
              onChange={onChange}
              placeholder="Código Postal"
              name="cp"
            />
            <input
              type="text"
              value={form.phone}
              onChange={onChange}
              placeholder="Teléfono"
              name="phone"
            />
          </form>
        </div>
        <div className="information-buttons">
          <Link to="/checkout">
            <div className="information-back">Regresar</div>
          </Link>
          <div className="information-next">
            <button type="button" onClick={handleSubmit}>
              Pagar
            </button>
          </div>
        </div>
      </div>
      <div className="information-sidebar">
        <h3>Pedido:</h3>
        {cart.map((item) => (
          <div key={item.title} className="information-item">
            <div className="information-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Information;
