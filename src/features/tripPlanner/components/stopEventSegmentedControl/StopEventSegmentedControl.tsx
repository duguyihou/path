import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {theme} from 'src/shared/theme';

import {StopEventSegmentedControlProps} from './StopEventSegmentedControl.types';

const Separator = () => <View style={styles.separator} />;
const StopEventSegmentedControl = (props: StopEventSegmentedControlProps) => {
  const {values} = props;
  const renderItem = ({item}: {item: string}) => (
    <Text style={styles.item}>{item}</Text>
  );
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <FlatList
          data={values}
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
