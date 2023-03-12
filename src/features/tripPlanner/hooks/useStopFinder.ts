import {useQuery} from '@tanstack/react-query';

import fetchStopFinder, {SFResponse} from '../api/fetchStopFinder';

const useStopFinder = (name_sf: string) => {
  const queryResult = useQuery<SFResponse, Error>({
    queryKey: ['stop_finder', name_sf],
    queryFn: async () => await fetchStopFinder(name_sf),
  });

  return queryResult;
};

export default useStopFinder;
