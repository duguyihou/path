import {useGeolocation} from 'features/location/hooks';
import React from 'react';
import {FlatList, Text, View} from 'react-native';

import {CoordRequestResponseLocation, ItemType} from '../../api/fetchCoord';
import useCoord from '../../hooks/useCoord';
import StopCard from '../stopCard/StopCard';

const StopCardList = () => {
  const geoPosition = useGeolocation('whenInUse');

  const {data} = useCoord(geoPosition, ItemType.BusPoint, 1000);

  const renderItem = ({item}: {item: CoordRequestResponseLocation}) => (
    <StopCard {...item} />
  );
  return (
    <View>
      <Text>Stops</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default StopCardList;
