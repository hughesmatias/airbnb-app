import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import DestinationSearch from '../screens/DestinationSearch';
import Guests from '../screens/Guests';
import HomeTabNavigator from './HomeTabNavigator';
import SearchResult from '../screens/SearchResult';

const Stack = createStackNavigator();

const Router = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name={"Home"} component={HomeTabNavigator} options={{
        headerShown: false,
      }} />
      <Stack.Screen name={"SearchResult"} component={SearchResult} options={{
        headerShown: false,
      }} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Router;
