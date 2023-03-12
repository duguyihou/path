import {useQuery} from '@tanstack/react-query';
import {GeoPosition} from 'react-native-geolocation-service';

import fetchStopFinder, {
  SFType,
  StopFinderLocation,
  StopFinderResponse,
} from '../api/fetchStopFinder';

export const useStopFinderByGeo = (geoPosition: GeoPosition | undefined) => {
  const {longitude, latitude} = geoPosition?.coords ?? {
    latitude: 0,
    longitude: 0,
  };
  const name_sf = `${longitude}:${latitude}:EPSG:4326`;
  const queryResult = useQuery<StopFinderResponse, Error, StopFinderLocation[]>(
    {
      queryKey: ['stop_finder', geoPosition],
      queryFn: async () => await fetchStopFinder(name_sf, SFType.Coord),
      select: data => data.locations,
      enabled: !!geoPosition,
    },
  );

  return queryResult;
};

export const useStopFinderByName = (name_sf: string) => {
  const queryResult = useQuery<StopFinderResponse, Error, StopFinderLocation[]>(
    {
      queryKey: ['stop_finder', name_sf],
      queryFn: async () => await fetchStopFinder(name_sf, SFType.Any),
      select: data => data.locations,
    },
  );

  return queryResult;
};
