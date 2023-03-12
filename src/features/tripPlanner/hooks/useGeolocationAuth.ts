import {useCallback, useEffect, useState} from 'react';
import Geolocation, {
  AuthorizationLevel,
  AuthorizationResult,
} from 'react-native-geolocation-service';

const useGeolocationAuth = (authLevel: AuthorizationLevel) => {
  const [authResult, setAuthResult] = useState<AuthorizationResult>('denied');

  const requestAuth = useCallback(async () => {
    const result = await Geolocation.requestAuthorization(authLevel);
    setAuthResult(result);
  }, [authLevel]);

  useEffect(() => {
    requestAuth();
  }, [authLevel, requestAuth]);
  return authResult;
};

export default useGeolocationAuth;
