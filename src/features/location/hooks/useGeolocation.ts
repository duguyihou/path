import {useEffect, useState} from 'react';
import Geolocation, {
  AuthorizationLevel,
  GeoPosition,
} from 'react-native-geolocation-service';

import useGeolocationAuth from './useGeolocationAuth';

const useGeolocation = (level: AuthorizationLevel) => {
  const [geoPosition, setGeoPosition] = useState<GeoPosition | undefined>(
    undefined,
  );
  const authResult = useGeolocationAuth(level);
  // "disabled" | "granted" | "denied" | "restricted"
  useEffect(() => {
    switch (authResult) {
      case 'granted':
        Geolocation.getCurrentPosition(
          position => setGeoPosition(position),
          error => console.error(error),
        );
        break;
      default:
        break;
    }
  }, [authResult]);
  return geoPosition;
};

export default useGeolocation;
