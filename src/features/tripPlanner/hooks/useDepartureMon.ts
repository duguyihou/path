import {useQuery} from '@tanstack/react-query';
import dayjs from 'dayjs';

import fetchDepartureMon, {
  DepartureMonitorResponse,
  DepartureMonitorResponseStopEvent,
} from '../api/fetchDepartureMon';

const useDepartureMon = (
  name_dm: string,
  itdDate = dayjs().format('YYYYMMDD'),
  itdTime = dayjs().format('HHMM'),
) => {
  const queryResult = useQuery<
    DepartureMonitorResponse,
    Error,
    DepartureMonitorResponseStopEvent[]
  >({
    queryKey: ['coord', name_dm],
    queryFn: async () => fetchDepartureMon(name_dm, itdDate, itdTime),
    select: data =>
      data.stopEvents.sort((a, b) =>
        a.departureTimePlanned.localeCompare(b.departureTimePlanned),
      ),
    enabled: !!name_dm,
    refetchInterval: 1000 * 60 * 2,
  });

  return queryResult;
};

export default useDepartureMon;
