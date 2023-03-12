import {useQuery} from '@tanstack/react-query';
import {GeoPosition} from 'react-native-geolocation-service';

import fetchCoord, {CoordResponse, ItemType, Location} from '../api/fetchCoord';

/**
 * Find public transport stops, stations, wharfs and points of interest around that location
 * @param geoPosition longitude and latitude
 * @param type_1 GIS_POINT: GIS points, including Opal resellers (see inclDrawClasses_1)
 *               BUS_POINT: Stops/stations
 *               POI_POINT: Places of interest
 * @param radius_1 This indicates the maximum number of metres to search in all directions from the location specified in coord.
 * @returns
 */
const useCoord = (
  geoPosition: GeoPosition | undefined,
  type_1: ItemType,
  radius_1: number,
) => {
  const {latitude, longitude} = geoPosition?.coords ?? {
    latitude: 0,
    longitude: 0,
  };
  const queryResult = useQuery<CoordResponse, Error, Location[]>({
    queryKey: ['coord', geoPosition, type_1],
    queryFn: async () => fetchCoord({longitude, latitude}, type_1, radius_1),
    select: data => data.locations,
    enabled: !!geoPosition,
  });

  return queryResult;
};

export default useCoord;
