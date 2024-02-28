import React from 'react';
import {} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import VehicalSelection from '../screens/customer/VehicalSelection';
import AvailableMechanics from '../screens/customer/AvailableMechanics';
import Home from '../screens/customer/Home';
import Progress from '../screens/customer/Progress';
import Bill from '../screens/customer/Bill';
import AddVehicles from '../screens/customer/AddVehicles.js';
import EditVehicles from '../screens/customer/EditVehicles';
import BankDetail from '../screens/customer/BankDetail';
import MainTransactions from '../screens/customer/MainTransactions';
import Notification from '../screens/customer/Notification.js';
import OngoingJob from '../screens/customer/OngoingJob';
import OGSummary from '../screens/customer/OGSummary';
import TowLocation from '../screens/customer/TowLocation';
import Summary from '../screens/customer/Summary';
const Stack = createNativeStackNavigator();
const UserNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="notification" component={Notification} />
      <Stack.Screen name="vehicalselection" component={VehicalSelection} />
      <Stack.Screen name="availablemechanics" component={AvailableMechanics} />
      <Stack.Screen name="progress" component={Progress} />
      <Stack.Screen name="bill" component={Bill} />
      <Stack.Screen name="addvehicles" component={AddVehicles} />
      <Stack.Screen name="editvehicles" component={EditVehicles} />
      <Stack.Screen name="bankdetail" component={BankDetail} />
      <Stack.Screen name="maintransactions" component={MainTransactions} />
      <Stack.Screen name="ongoingjob" component={OngoingJob} />
      <Stack.Screen name="summary" component={Summary} />
      <Stack.Screen name="towlocation" component={TowLocation} />
    </Stack.Navigator>
  );
};

export default UserNavigation;
