import {ColoredName} from 'components/coloredName';
import {DepartureTime} from 'components/departureTime';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {theme} from 'shared/theme';

import {DepartureMonitorResponseStopEvent} from '../../api/fetchDepartureMon';

const StopEvent = (props: DepartureMonitorResponseStopEvent) => {
  const {
    departureTimePlanned,
    transportation: {disassembledName, iconId},
  } = props;

  return (
    <View style={styles.container}>
      <ColoredName
        name={disassembledName}
        style={styles.name}
        iconId={iconId}
      />
      <DepartureTime time={departureTimePlanned} style={styles.time} />
    </View>
  );
};

export default StopEvent;

const styles = StyleSheet.create({
  container: {
    padding: 2,
    width: 120,
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
    color: theme.primary,
    marginLeft: 10,
    paddingHorizontal: 2,
  },
});
