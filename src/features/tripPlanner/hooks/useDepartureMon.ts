import {useQuery} from '@tanstack/react-query';
import dayjs from 'dayjs';

import fetchDepartureMon, {
  DepartureMonitorResponse,
  DepartureMonitorResponseStopEvent,
} from '../api/fetchDepartureMon';
import {StopFinderLocation} from '../api/fetchStopFinder';

type Data = {
  locations: StopFinderLocation[];
  stopEvents: DepartureMonitorResponseStopEvent[];
};
const useDepartureMon = (
  name_dm: string,
  itdDate = dayjs().format('YYYYMMDD'),
  itdTime = dayjs().format('HHMM'),
) => {
  const queryResult = useQuery<DepartureMonitorResponse, Error, Data>({
    queryKey: ['coord', name_dm],
    queryFn: async () => fetchDepartureMon(name_dm, itdDate, itdTime),
    select: data => ({
      locations: data.locations,
      stopEvents: data.stopEvents,
    }),
    enabled: !!name_dm,
    staleTime: 1000 * 60,
  });

  return queryResult;
};

export default useDepartureMon;
