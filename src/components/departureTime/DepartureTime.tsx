import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import updateLocale from 'dayjs/plugin/updateLocale';
import React from 'react';
import {Text} from 'react-native';
import {theme} from 'shared/theme';

import {DepartureTimeProps} from './DepartureTime.types';

dayjs.extend(relativeTime);
dayjs.extend(updateLocale);
dayjs.updateLocale('en', {
  relativeTime: {
    ...dayjs.Ls.en.relativeTime,
    past: '%s',
    future: '%s',
    s: 'now',
    m: '1 min',
    mm: '%d min',
    h: '1 hour',
    hh: '%d hour',
  },
});
const DepartureTime = (props: DepartureTimeProps) => {
  const {time, style} = props;
  return (
    <Text style={[style, dayjs(time).isBefore(dayjs()) && {color: theme.red}]}>
      {dayjs(time).toNow()}
    </Text>
  );
};

export default DepartureTime;
