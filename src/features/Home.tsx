import React from 'react';
import {Text, View} from 'react-native';

import useGeolocation from './location/hooks/useGeolocation';
import useCoord from './tripPlanner/hooks/useCoord';

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
