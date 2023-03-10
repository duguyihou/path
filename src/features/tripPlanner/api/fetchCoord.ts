import configService from 'src/config';
import {ApiErrorResponse} from 'types/error';
import {ParentLocation} from 'types/parentLocation';

export type Inline_model_16 = {
  distance: number;
  POI_DRAW_CLASS_TYPE: string;
  POI_DRAW_CLASS: string;
  POI_HIERARCHY_KEY: string;
  POI_HIERARCHY_0: string;
  GIS_DRAW_CLASS_TYPE: string;
  GIS_DRAW_CLASS: string;
  GIS_NIVEAU: string;
};
export type CoordRequestResponseLocation = {
  id: string;
  type: string;
  name: string;
  disassembledName: string;
  coord: number[];
  parent: ParentLocation;
  properties: Inline_model_16;
};
export type CoordRequestResponse = {
  version: string;
  error: ApiErrorResponse;
  locations: CoordRequestResponseLocation[];
};

export enum ItemType {
  GISPoint = 'GIS_POINT',
  BusPoint = 'BUS_POINT',
  POIPoint = 'POI_POINT',
}

/**
 * Find public transport stops, stations, wharfs and points of interest around that location
 * @param geoPosition longitude and latitude
 * @param type_1 GIS_POINT: GIS points, including Opal resellers (see inclDrawClasses_1)
 *               BUS_POINT: Stops/stations
 *               POI_POINT: Places of interest
 * @param radius_1 This indicates the maximum number of metres to search in all directions from the location specified in coord.
 * @returns
 */
const fetchCoord = async (
  coord: {latitude: number; longitude: number},
  type_1: ItemType,
  radius_1: number,
): Promise<CoordRequestResponse> => {
  const {longitude, latitude} = coord;
  const {baseUrl, apiKey} = configService;
  const params = [
    'outputFormat=rapidJSON',
    `coord=${encodeURIComponent(`${longitude}:${latitude}:EPSG:4326`)}`,
    `coordOutputFormat=${encodeURIComponent('EPSG:4326')}`,
    'inclFilter=1',
    `type_1=${type_1}`,
    `radius_1=${radius_1}`,
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
};

export default fetchCoord;
