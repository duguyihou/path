import {useQuery} from '@tanstack/react-query';
import {GeoPosition} from 'react-native-geolocation-service';
import configService from 'src/config';

const useCoord = (geoPosition: GeoPosition | undefined) => {
  const {baseUrl, apiKey} = configService;
  const queryResult = useQuery({
    queryKey: ['coord', geoPosition],
    queryFn: async () => {
      const {latitude, longitude} = geoPosition?.coords ?? {};
      const params = [
        'outputFormat=rapidJSON',
        `coord=${encodeURIComponent(`${longitude}:${latitude}:EPSG:4326`)}`,
        `coordOutputFormat=${encodeURIComponent('EPSG:4326')}`,
        'inclFilter=1',
        'type_1=GIS_POINT',
        'radius_1=1000',
        'PoisOnMapMacro=true',
        'version=10.2.1.42',
      ].join('&');

      const url = `${baseUrl}/v1/tp/coord?${params}`;

      const coordResponse = await fetch(url, {
        headers: {
          Authorization: `apikey ${apiKey}`,
        },
      });
      const coordResponseJson = await coordResponse.json();
      return coordResponseJson;
    },
    enabled: !!geoPosition,
  });

  return queryResult;
};

export default useCoord;
