import dayjs from 'dayjs';
import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {STOP_EVENT_CARD_HEIGHT} from 'shared/constants';

import {DepartureMonitorResponseStopEvent} from '../../api/fetchDepartureMon';
import useDepartureMon from '../../hooks/useDepartureMon';
import {StopEventCard} from '../stopEventCard';
import {StopEventListProps} from './StopEventList.types';

const StopEventList = ({id}: StopEventListProps) => {
  const {data} = useDepartureMon(id);

  const renderItem = ({item}: {item: DepartureMonitorResponseStopEvent}) => (
    <StopEventCard {...item} />
  );
  if (!data) {
    return <Text>loading...</Text>;
  }
  const upcomingIndex = data.stopEvents.findIndex(stopEvent =>
    dayjs(stopEvent.departureTimePlanned).isAfter(dayjs()),
  );

  return (
    <View>
      <FlatList
        data={data.stopEvents}
        renderItem={renderItem}
        getItemLayout={(_, index) => ({
          length: STOP_EVENT_CARD_HEIGHT,
          offset: STOP_EVENT_CARD_HEIGHT * index,
          index,
        })}
        initialScrollIndex={upcomingIndex}
        keyExtractor={item =>
          item.transportation.properties.tripCode.toString()
        }
      />
    </View>
  );
};

export default StopEventList;
