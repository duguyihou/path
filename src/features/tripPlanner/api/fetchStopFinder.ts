import configService from 'src/config';

type Parent = {
  id: string;
  name: string;
  type: string;
};
export type SFLocation = {
  id: string;
  isGlobalId: boolean;
  name: string;
  disassembledName: string;
  coord: number[];
  type: string;
  buildingNumber: string;
  streetName: string;
  modes: number[];
  matchQuality: number;
  isBest: boolean;
  partent: Parent;
  // assignedStops:
};
export type SFResponse = {
  version: string;
  systemMessages: {
    type: string;
    module: string;
    code: number;
    text: string;
  };
  locations: SFLocation[];
};

export enum SFType {
  Coord = 'coord',
  Poi = 'poi',
  Stop = 'stop',
  Any = 'any',
}
const fetchStopFinder = async (
  name_sf: string,
  type_sf: SFType,
): Promise<SFResponse> => {
  const {baseUrl, apiKey} = configService;

  const params = [
    'outputFormat=rapidJSON',
    `type_sf=${type_sf}`,
    `name_sf=${encodeURIComponent(name_sf)}`,
    `coordOutputFormat=${encodeURIComponent('EPSG:4326')}`,
    'TfNSWSF=true',
    'version=10.2.1.42',
  ].join('&');

  const url = `${baseUrl}/v1/tp/stop_finder?${params}`;

  const sfResponse = await fetch(url, {
    headers: {
      Authorization: `apikey ${apiKey}`,
    },
  });
  const sfResponseJson = await sfResponse.json();
  return sfResponseJson;
};

export default fetchStopFinder;
