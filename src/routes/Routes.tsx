import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from 'screens/Home';
import Search from 'screens/Search';

import {HomeStackParamList, RouteName} from './Routes.types';

const HomeStack = createNativeStackNavigator<HomeStackParamList>();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Group>
        <HomeStack.Screen name={RouteName.Home} component={Home} />
      </HomeStack.Group>
    </HomeStack.Navigator>
  );
}
const RootTab = createBottomTabNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <RootTab.Navigator screenOptions={{headerShown: false}}>
        <RootTab.Screen
          name={RouteName.HomeStack}
          component={HomeStackScreen}
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
