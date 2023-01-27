import React from 'react';
import { } from 'react-native';
// import Map from '../screens/customer/Map'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import VehicalSelection from '../screens/customer/VehicalSelection';

const Stack = createNativeStackNavigator();
const UserNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="map"
        screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="map" component={Map} /> */}
        <Stack.Screen name="vehicalselection" component={VehicalSelection} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default UserNavigation;
