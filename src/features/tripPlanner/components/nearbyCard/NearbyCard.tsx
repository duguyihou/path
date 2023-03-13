import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import {NearbyCardProps} from './NearbyCard.types';

const NearbyCard = (props: NearbyCardProps) => {
  const {disassembledName, id} = props;
  const handlePress = () => console.log('🐵  ------ ', id);
  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Text>{disassembledName}</Text>
    </TouchableOpacity>
  );
};

export default NearbyCard;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
