import {useQuery} from '@tanstack/react-query';
import configService from 'src/config';

const useStopFinder = (name_sf: string) => {
  const {baseUrl, apiKey} = configService;
  const queryResult = useQuery({
    queryKey: ['stop_finder', name_sf],
    queryFn: async () => {
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
    },
  });

  return queryResult;
};

export default useStopFinder;
