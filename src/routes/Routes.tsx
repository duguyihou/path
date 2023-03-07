import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Home from 'src/features/Home';
import Search from 'src/features/Search';

import {RouteName} from './Routes.types';

const RootTab = createBottomTabNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <RootTab.Navigator screenOptions={{headerShown: false}}>
        <RootTab.Screen
          name={RouteName.Home}
          component={Home}
          options={{title: RouteName.Home}}
        />
        <RootTab.Screen
          name={RouteName.Search}
          component={Search}
          options={{title: RouteName.Search}}
        />
      </RootTab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
