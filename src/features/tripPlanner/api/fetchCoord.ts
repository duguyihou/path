import configService from 'src/config';

export type Location = {
  id: string;
  name: string;
  type: string;
  coord: string[];
  properties: {
    distance: number;
    GIS_DRAW_CLASS_TYPE: string;
    GIS_DRAW_CLASS: string;
    GIS_NIVEAU: string;
  };
};
export type CoordResponse = {
  version: string;
  locations: Location[];
};

const fetchCoord = async (
  longitude: number,
  latitude: number,
): Promise<CoordResponse> => {
  const {baseUrl, apiKey} = configService;
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
};

export default fetchCoord;
