import React from 'react';
import {View} from 'react-native';

import useDepartureMon from '../../hooks/useDepartureMon';
import StopEvent from '../nearbyCard/StopEvent';
import {StopEventListProps} from './StopEventList.types';

const StopEventList = ({id}: StopEventListProps) => {
  const {data} = useDepartureMon(id);
  // TODO: flatlist
  return (
    <View>
      {data &&
        data.stopEvents.map((stopEvent, idx) => (
          <StopEvent key={idx} {...stopEvent} />
        ))}
    </View>
  );
};

export default StopEventList;
