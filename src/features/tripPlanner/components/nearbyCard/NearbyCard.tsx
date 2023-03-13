import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {theme} from 'shared/theme';

import {NearbyCardProps} from './NearbyCard.types';

const NearbyCard = (props: NearbyCardProps) => {
  const {disassembledName, id, distance} = props;
  const handlePress = () => console.log('🐵  ------ ', id);
  console.log('🐵 props ------ ', props);
  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Text style={styles.stopName}>{disassembledName}</Text>
      <Text style={styles.distance}>{distance}m</Text>
    </TouchableOpacity>
  );
};

export default NearbyCard;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: theme.secondary,
  },
  stopName: {
    fontSize: 18,
    paddingBottom: 10,
  },
  distance: {
    fontSize: 12,
    color: theme.grey_2,
  },
});
