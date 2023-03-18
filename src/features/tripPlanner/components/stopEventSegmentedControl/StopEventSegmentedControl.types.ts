import {DepartureMonitorResponseStopEvent} from '../../api/fetchDepartureMon';

export type StopEventSegmentedControlProps = {
  data: DepartureMonitorResponseStopEvent[];
  stopEventList: DepartureMonitorResponseStopEvent[];
  setStopEventList: React.Dispatch<
    React.SetStateAction<DepartureMonitorResponseStopEvent[] | undefined>
  >;
};
