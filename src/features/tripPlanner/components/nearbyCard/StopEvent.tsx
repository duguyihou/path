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
    future: '%s',
    past: '%s ago',
    m: '1 minute',
    mm: '%d mins',
  },
});
const StopEvent = (props: DepartureMonitorResponseStopEvent) => {
  const {
    departureTimePlanned,
    transportation: {disassembledName, iconId},
  } = props;

  return (
    <View style={styles.container}>
      <Text style={[styles.name, {backgroundColor: getIconColor(iconId)}]}>
        {disassembledName}
      </Text>
      <Text
        style={[
          styles.time,
          dayjs(departureTimePlanned).isAfter(dayjs()) && {color: theme.red},
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
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.white,
    textAlign: 'center',
    width: 50,
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
