import React from 'react';
import {FlatList, View} from 'react-native';

import {StopFinderAssignedStop} from '../../api/fetchStopFinder';
import {useStopFinderById} from '../../hooks';
import {NearbyCard} from '../nearbyCard';
import {NearbyCardListProps} from './NearbyCardList.types';

const NearbyCardList = (props: NearbyCardListProps) => {
  const {stopFinderLocations} = props;
  const {id} = stopFinderLocations[0];
  const {data} = useStopFinderById(id);

  const renderItem = ({item}: {item: StopFinderAssignedStop}) => (
    <NearbyCard {...item} />
  );

  return (
    <View>
      {data && (
        <FlatList
          data={data[0].assignedStops.slice(0, 2)}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};

export default NearbyCardList;
