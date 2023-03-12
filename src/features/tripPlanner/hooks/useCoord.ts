import {useQuery} from '@tanstack/react-query';
import {GeoPosition} from 'react-native-geolocation-service';

import fetchCoord, {CoordResponse} from '../api/fetchCoord';

const useCoord = (geoPosition: GeoPosition | undefined) => {
  const {latitude, longitude} = geoPosition?.coords ?? {
    latitude: 0,
    longitude: 0,
  };
  const queryResult = useQuery<CoordResponse, Error>({
    queryKey: ['coord', geoPosition],
    queryFn: async () => fetchCoord(longitude, latitude),
    enabled: !!geoPosition,
  });

  return queryResult;
};

export default useCoord;
