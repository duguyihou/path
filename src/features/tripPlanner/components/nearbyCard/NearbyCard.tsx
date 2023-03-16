import {Icon} from 'components/icon';
import dayjs from 'dayjs';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {theme} from 'shared/theme';

import useDepartureMon from '../../hooks/useDepartureMon';
import {NearbyCardProps} from './NearbyCard.types';
import StopEvent from './StopEvent';

const NearbyCard = (props: NearbyCardProps) => {
  const {disassembledName, id, distance} = props;
  const {data} = useDepartureMon(id);
  const [now, setNow] = useState(() => dayjs());
  useEffect(() => {
    const interval = setInterval(() => setNow(dayjs()), 1000 * 60);
    return () => clearInterval(interval);
  }, []);
  const handlePress = () => console.log('🐵  ------ ', id);

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.stopName} numberOfLines={1}>
          {disassembledName}
        </Text>
        <View style={styles.details}>
          {data &&
            data.locations[0].assignedStops[0].modes.map(mode => (
              <Icon key={mode} mode={mode} />
            ))}
          <Text style={styles.distance}>{distance}m</Text>
        </View>
      </View>
      <View style={styles.stopEvents}>
        {data &&
          data.stopEvents
            .filter(stopEvent =>
              dayjs(stopEvent.departureTimePlanned).isAfter(now),
            )
            .slice(0, 2)
            .map((stopEvent, idx) => <StopEvent key={idx} {...stopEvent} />)}
      </View>
    </TouchableOpacity>
  );
};

export default NearbyCard;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: theme.secondary,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  modes: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  stopName: {
    fontSize: 18,
  },
  distance: {
    fontSize: 12,
    color: theme.grey_2,
    paddingLeft: 10,
  },
  stopEvents: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});
