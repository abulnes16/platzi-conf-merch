import config from '../config';

const options = {
  clientId: config.paypalClientId,
  intent: 'capture',
  currency: 'USD',
};

const buttonStyles = {
  layout: 'vertical',
  shape: 'rect',
};

const status = {
  completed: 'COMPLETED',
};

export default {
  options,
  buttonStyles,
  status,
};
