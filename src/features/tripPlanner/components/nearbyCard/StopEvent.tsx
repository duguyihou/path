import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import updateLocale from 'dayjs/plugin/updateLocale';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {getIconColor} from 'shared/color';
import {theme} from 'shared/theme';

import {DepartureMonitorResponseStopEvent} from '../../api/fetchDepartureMon';

dayjs.extend(relativeTime);
dayjs.extend(updateLocale);
dayjs.updateLocale('en', {
  relativeTime: {
    ...dayjs.Ls.en.relativeTime,
    past: '%s',
    s: 'now',
    m: '1 minute',
    mm: '%d mins',
    h: '1 hour',
    hh: '%d hours',
  },
});
const StopEvent = (props: DepartureMonitorResponseStopEvent) => {
  const {
    departureTimePlanned,
    transportation: {disassembledName, iconId},
  } = props;
  console.log('🐵  ------ ', departureTimePlanned);
  return (
    <View style={styles.container}>
      <Text style={[styles.name, {backgroundColor: getIconColor(iconId)}]}>
        {disassembledName}
      </Text>
      <Text
        style={[
          styles.time,
          dayjs(departureTimePlanned).isBefore(dayjs()) && {color: theme.red},
        ]}>
        {dayjs(departureTimePlanned).toNow()}
      </Text>
    </View>
  );
};

export default StopEvent;

const styles = StyleSheet.create({
  container: {
    padding: 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.white,
    textAlign: 'center',
    width: 60,
    borderRadius: 4,
    overflow: 'hidden',
  },
  time: {
    fontSize: 12,
    marginLeft: 10,
    paddingHorizontal: 2,
    color: theme.primary,
  },
});
