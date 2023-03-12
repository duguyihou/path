import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {useStopFinderById} from '../../hooks';
import {NearbyCardProps} from './NearbyCard.types';

const NearbyCard = (props: NearbyCardProps) => {
  const {disassembledName, id} = props;
  const {data} = useStopFinderById(id);
  const handlePress = () => console.log('🐵  ------ ', id);

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text>{disassembledName}</Text>
      {data &&
        data[0].assignedStops
          .map(e => e.disassembledName)
          .slice(0, 2)
          .map(e => <Text key={e}>{e}</Text>)}
    </TouchableOpacity>
  );
};

export default NearbyCard;
