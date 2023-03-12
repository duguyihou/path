import React from 'react';
import {Text, View} from 'react-native';

import {NearbyCardProps} from './NearbyCard.types';

const NearbyCard = (props: NearbyCardProps) => {
  const {name, disassembledName} = props;

  return (
    <View>
      <Text>{name}</Text>
      <Text>{disassembledName}</Text>
    </View>
  );
};

export default NearbyCard;
