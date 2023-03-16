import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import {StopEventList} from 'src/features/tripPlanner';
import {
  HomeRouteType,
  HomeStackNavigationProps,
  RouteName,
} from 'src/routes/Routes.types';

const DepartureMon = () => {
  const {
    params: {id, disassembledName},
  } = useRoute<HomeRouteType<RouteName.DepartureMon>>();
  const navigation = useNavigation<HomeStackNavigationProps>();
  useLayoutEffect(() => {
    navigation.setOptions({title: disassembledName});
  });
  return <StopEventList id={id} />;
};

export default DepartureMon;
