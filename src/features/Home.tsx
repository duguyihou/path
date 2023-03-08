import React from 'react';
import {Text, View} from 'react-native';

import useStopFinder from './tripPlanner/hooks/useStopFinder';

const Home = () => {
  const {data} = useStopFinder('circle');
  console.log('🐵 data ------ ', data);
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
