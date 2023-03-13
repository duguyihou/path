import {useGeolocation} from 'features/location/hooks';
import {NearbyCardList} from 'features/tripPlanner';
import {useStopFinderByGeo} from 'features/tripPlanner/hooks';
import React from 'react';
import {View} from 'react-native';

const Home = () => {
  const geoPosition = useGeolocation('whenInUse');
  const {data} = useStopFinderByGeo(geoPosition);
  return <View>{data && <NearbyCardList stopFinderLocations={data} />}</View>;
};

export default Home;
