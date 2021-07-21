import axios from 'axios';

const geocodeInstance = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api/geocode/',
});

export { geocodeInstance };
