import configService from 'src/config';

type Parent = {
  id: string;
  name: string;
  type: string;
};
export type SFLocation = {
  id: string;
  name: string;
  disassembledName: string;
  coord: string[];
  streetName: string;
  type: string;
  matchQuality: number;
  isBest: boolean;
  partent: Parent;
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
const fetchStopFinder = async (name_sf: string): Promise<SFResponse> => {
  const {baseUrl, apiKey} = configService;

  const params = [
    'outputFormat=rapidJSON',
    'type_sf=any',
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
