import { useState, useEffect } from 'react';
import { geocodeInstance } from '../modules/axios';
import config from '../config';

const useGoogleAddress = (address) => {
  const [map, setMap] = useState({});

  useEffect(() => {
    const getCoords = async () => {
      const response = await geocodeInstance.get(
        `json?address={address}&${config.mapsApiKey}`
      );
      const { location } = response.data.results[0].geometry;
      setMap(location);
    };

    getCoords();
  }, [address]);

  return map;
};

export default useGoogleAddress;
