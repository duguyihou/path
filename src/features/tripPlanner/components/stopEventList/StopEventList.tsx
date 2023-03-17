import React from 'react';
import {FlatList, View} from 'react-native';

import {DepartureMonitorResponseStopEvent} from '../../api/fetchDepartureMon';
import useDepartureMon from '../../hooks/useDepartureMon';
import {StopEventCard} from '../stopEventCard';
import {StopEventListProps} from './StopEventList.types';

const StopEventList = ({id}: StopEventListProps) => {
  const {data} = useDepartureMon(id);

  const renderItem = ({item}: {item: DepartureMonitorResponseStopEvent}) => (
    <StopEventCard {...item} />
  );
  return (
    <View>
      {data && (
        <FlatList
          data={data.stopEvents}
          renderItem={renderItem}
          keyExtractor={item =>
            item.transportation.properties.tripCode.toString()
          }
        />
      )}
    </View>
  );
};

export default StopEventList;
