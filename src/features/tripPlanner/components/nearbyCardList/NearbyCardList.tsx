import {useGeolocation} from 'features/location/hooks';
import React from 'react';
import {FlatList, View} from 'react-native';

import {StopFinderLocation} from '../../api/fetchStopFinder';
import {useStopFinderByGeo} from '../../hooks';
import {NearbyCard} from '../nearbyCard';

const NearbyCardList = () => {
  const geoPosition = useGeolocation('whenInUse');
  const {data} = useStopFinderByGeo(geoPosition);
  const renderItem = ({item}: {item: StopFinderLocation}) => (
    <NearbyCard {...item} />
  );

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default NearbyCardList;
