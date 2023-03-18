import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {theme} from 'src/shared/theme';

import {DepartureMonitorResponseStopEvent} from '../../api/fetchDepartureMon';
import {StopEventSegmentedControlProps} from './StopEventSegmentedControl.types';

const Separator = () => <View style={styles.separator} />;
const StopEventSegmentedControl = (props: StopEventSegmentedControlProps) => {
  const {data, stopEventList, setStopEventList} = props;
  const [selectedItem, setSelectedItem] = useState<string | undefined>(
    undefined,
  );
  const stopEventCategory = [
    ...new Set(stopEventList.map(se => se.transportation.disassembledName)),
  ];
  console.log('🐵 selectedItem ------ ', selectedItem);
  useEffect(() => {
    if (selectedItem) {
      const filterByName = ({
        transportation,
      }: DepartureMonitorResponseStopEvent) =>
        transportation.disassembledName === selectedItem;
      setStopEventList(() => stopEventList.filter(filterByName));
    } else {
      setStopEventList(data);
    }
  }, [data, selectedItem, setStopEventList, stopEventList]);
  const handlePress = (item: string) => {
    setSelectedItem(prevState => (prevState === item ? undefined : item));
  };

  const renderItem = ({item}: {item: string}) => (
    <TouchableOpacity onPress={() => handlePress(item)}>
      <Text style={styles.item}>{item}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <FlatList
          data={stopEventCategory}
          horizontal={true}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={Separator}
        />
      </View>
    </View>
  );
};

export default StopEventSegmentedControl;

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    width: '100%',
    bottom: 20,
  },
  container: {
    marginHorizontal: 10,
    backgroundColor: theme.transparent,
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
    borderRadius: 10,
  },
  item: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    fontSize: 20,
    color: theme.secondary,
    backgroundColor: theme.primary,
    overflow: 'hidden',
    borderRadius: 10,
  },
  separator: {
    width: 10,
  },
});
