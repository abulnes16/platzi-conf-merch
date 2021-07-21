import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import config from '../config';

const mapStyles = {
  height: '50vh',
  width: '100%',
};

const Map = ({ location }) => {
  const defaultCenter = {
    lat: location.lat,
    lng: location.lng,
  };

  return (
    <LoadScript googleMapsApiKey={config.mapsApiKey}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={9} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
