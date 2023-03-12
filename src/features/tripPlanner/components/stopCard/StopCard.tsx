import React from 'react';
import {Text, View} from 'react-native';

import {StopCardProps} from './StopCard.types';

const StopCard = (props: StopCardProps) => {
  const {name, disassembledName} = props;
  console.log('🐵  ------ ', props);
  console.log('🐵 dis ------ ', disassembledName);
  return (
    <View>
      <Text>{name}</Text>
      <Text>{disassembledName}</Text>
    </View>
  );
};

export default StopCard;
