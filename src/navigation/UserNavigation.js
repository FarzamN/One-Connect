import React from 'react';
import {} from 'react-native';
// import Map from '../screens/customer/Map'

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import VehicalSelection from '../screens/customer/VehicalSelection';
import AvailableMechanics from '../screens/customer/AvailableMechanics';
import Home from '../screens/customer/Home';

const Stack = createNativeStackNavigator();
const UserNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="map"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="vehicalselection" component={VehicalSelection} />
        <Stack.Screen
          name="availablemechanics"
          component={AvailableMechanics}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default UserNavigation;
