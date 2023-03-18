import dayjs from 'dayjs';
import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {STOP_EVENT_CARD_HEIGHT} from 'shared/constants';

import {DepartureMonitorResponseStopEvent} from '../../api/fetchDepartureMon';
import useDepartureMon from '../../hooks/useDepartureMon';
import {StopEventCard} from '../stopEventCard';
import {StopEventSegmentedControl} from '../stopEventSegmentedControl';
import {StopEventListProps} from './StopEventList.types';

const StopEventList = ({id}: StopEventListProps) => {
  const {data} = useDepartureMon(id);
  const [stopEventList, setStopEventList] = useState(data?.stopEvents);

  const renderItem = ({item}: {item: DepartureMonitorResponseStopEvent}) => (
    <StopEventCard {...item} />
  );
  if (!stopEventList) {
    return <Text>loading...</Text>;
  }
  const upcomingIndex = stopEventList.findIndex(stopEvent =>
    dayjs(stopEvent.departureTimePlanned).isAfter(dayjs()),
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={stopEventList}
        renderItem={renderItem}
        getItemLayout={(_, index) => ({
          length: STOP_EVENT_CARD_HEIGHT,
          offset: STOP_EVENT_CARD_HEIGHT * index,
          index,
        })}
        initialScrollIndex={upcomingIndex}
        keyExtractor={(_, idx) => idx.toString()}
      />
      {data && (
        <StopEventSegmentedControl
          data={data.stopEvents}
          stopEventList={stopEventList}
          setStopEventList={setStopEventList}
        />
      )}
    </View>
  );
};

export default StopEventList;

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
});
