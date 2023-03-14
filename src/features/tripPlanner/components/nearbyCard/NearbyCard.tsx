import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {theme} from 'shared/theme';

import useDepartureMon from '../../hooks/useDepartureMon';
import {NearbyCardProps} from './NearbyCard.types';
import StopEvent from './StopEvent';

const NearbyCard = (props: NearbyCardProps) => {
  const {disassembledName, id, distance} = props;
  const handlePress = () => console.log('🐵  ------ ', id);
  const {data} = useDepartureMon(id);
  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.stopName}>{disassembledName}</Text>
        <Text style={styles.distance}>{distance}m</Text>
      </View>
      <View style={styles.stopEvents}>
        {data &&
          data
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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  stopName: {
    fontSize: 18,
  },
  distance: {
    fontSize: 12,
    color: theme.grey_2,
  },
  stopEvents: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});
