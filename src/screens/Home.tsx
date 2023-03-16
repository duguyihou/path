import {useNavigation} from '@react-navigation/native';
import {useGeolocation} from 'features/location/hooks';
import {NearbyCardList} from 'features/tripPlanner';
import {useStopFinderByGeo} from 'features/tripPlanner/hooks';
import React, {useLayoutEffect} from 'react';
import {View} from 'react-native';
import {HomeStackNavigationProps} from 'routes/Routes.types';

const Home = () => {
  const geoPosition = useGeolocation('whenInUse');
  const {data} = useStopFinderByGeo(geoPosition);
  const navigation = useNavigation<HomeStackNavigationProps>();
  useLayoutEffect(() => {
    const title = data ? data[0].disassembledName : 'Home';
    navigation.setOptions({title});
  });
  return <View>{data && <NearbyCardList stopFinderLocations={data} />}</View>;
};

export default Home;
