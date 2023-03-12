import React from 'react';
import {Text, View} from 'react-native';

import useCoord from './tripPlanner/hooks/useCoord';
import useGeolocation from './tripPlanner/hooks/useGeolocation';
const Home = () => {
  const geoPosition = useGeolocation('whenInUse');

  const {data} = useCoord(geoPosition);

  console.log('🐵 data ------ ', data);
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
