import configService from 'src/config';
import {ApiErrorResponse} from 'types/error';

import {StopFinderLocation} from './fetchStopFinder';

export type RouteProduct = {
  name: string;
  class: number;
  iconId: number;
};

type Inline_model_7 = {
  id: string;
  name: string;
};

type Inline_model_8 = {
  id: string;
  name: string;
};

type Inline_model_9 = {
  tripCode: number;
  isTTB: boolean;
};

type Inline_model_13 = {
  from: string;
  to: string;
};
type Inline_model_14 = {
  from: string;
  to: string;
};
export type AdditionalInfoResponseTimestamps = {
  creation: string;
  lastModification: string;
  availability: Inline_model_13;
  validity: Inline_model_14;
};
export type TripRequestResponseJourneyLegStopInfo = {
  timestamps: AdditionalInfoResponseTimestamps;
  priority: string;
  id: string;
  version: string;
  urlText: string;
  url: string;
  content: string;
  subtitle: string;
};
export type TripTransportation = {
  id: string;
  name: string;
  disassembledName: string;
  number: string;
  iconId: number;
  description: string;
  product: RouteProduct;
  operator: Inline_model_7;
  destination: Inline_model_8;
  properties: Inline_model_9;
};
export type DepartureMonitorResponseStopEvent = {
  location: StopFinderLocation;
  departureTimePlanned: string;
  transportation: TripTransportation;
  infos: TripRequestResponseJourneyLegStopInfo;
};
export type DepartureMonitorResponse = {
  version: string;
  error: ApiErrorResponse;
  locations: StopFinderLocation[];
  stopEvents: DepartureMonitorResponseStopEvent[];
};

const fetchDepartureMon = async (
  name_dm: string,
  itdDate: string,
  itdTime: string,
  type_dm: string = 'stop',
  mode: string = 'direct',
): Promise<DepartureMonitorResponse> => {
  const {baseUrl, apiKey} = configService;
  const params = [
    'outputFormat=rapidJSON',
    `coordOutputFormat=${encodeURIComponent('EPSG:4326')}`,
    `mode=${mode}`,
    `type_dm=${type_dm}`,
    `name_dm=${name_dm}`,
    `itdDate=${itdDate}`,
    `itdTime=${itdTime}`,
    'departureMonitorMacro=true',
    'TfNSWDM=true',
    'version=10.2.1.42',
  ].join('&');

  const url = `${baseUrl}/v1/tp/departure_mon?${params}`;

  const response = await fetch(url, {
    headers: {
      Authorization: `apikey ${apiKey}`,
    },
  });
  const responseJson = await response.json();
  return responseJson;
};

export default fetchDepartureMon;
