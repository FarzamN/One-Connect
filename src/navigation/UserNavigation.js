import React from 'react';
import { } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import VehicalSelection from '../screens/customer/VehicalSelection';
import AvailableMechanics from '../screens/customer/AvailableMechanics';
import Home from '../screens/customer/Home';
import Progress from '../screens/customer/Progress';
import Bill from '../screens/customer/Bill';


const Stack = createNativeStackNavigator();
const UserNavigation = () => {
  return (

    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="vehicalselection" component={VehicalSelection} />
      <Stack.Screen name="availablemechanics" component={AvailableMechanics} />
      <Stack.Screen name="progress" component={Progress} />
      <Stack.Screen name="bill" component={Bill} />
    </Stack.Navigator>

  );
};

export default UserNavigation;
