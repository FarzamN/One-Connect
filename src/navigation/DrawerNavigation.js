import React from 'react';
import {StyleSheet} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import UserNavigation from './UserNavigation';
import DrawerContainer from '../screens/DrawerContainer';
import {Color} from '../utils/Colors';
import Profile from '../screens/customer/Profile';
import AddEditVehicles from '../screens/customer/AddEditVehicles';

import Wallet from '../screens/customer/Wallet.js';
import Progress from '../screens/customer/Progress';
import OGSummary from '../screens/customer/OGSummary';
import { Font } from '../utils/font';
import OngoingJob from '../screens/customer/OngoingJob';

// import {NavigationContainer} from '@react-navigation/native';
export const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator();
  return (
    // <NavigationContainer>
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: '#1f1f1f',
        drawerActiveBackgroundColor: '#fff',
        drawerInactiveTintColor: '#1f1f1f',
        drawerInactiveBackgroundColor: 'white',
        drawerLabelStyle: {
          marginLeft: -15,
          fontFamily:Font.Poppins600
        },
        drawerStyle: {
          borderBottomRightRadius: 50,
          borderTopRightRadius: 50,
        },
      }}
      initialRouteName="home1"
      drawerContent={props => <DrawerContainer {...props} />}>
      <Drawer.Screen
        name="home1"
        component={UserNavigation}
        options={{
          title: 'Home',
          drawerIcon: () => (
            <Ionicons name="md-home" size={20} color={Color.Main} />
          ),
        }}
      />
      <Drawer.Screen
        options={{
          title: '  Profile',
          drawerIcon: () => (
            <FontAwesome name="user" size={20} color={Color.Main} />
          ),
        }}
        name="Profile"
        component={Profile}
      />
      <Drawer.Screen
        options={{
          title: 'Vehicles',
          drawerIcon: () => (
            <Ionicons name="car-sport" size={20} color={Color.Main} />
          ),
        }}
        name="Vehicles"
        component={AddEditVehicles}
      />
      <Drawer.Screen
        options={{
          title: 'Ongoing Jobs',
          drawerIcon: () => (
            <MaterialCommunityIcons
              name="dots-hexagon"
              size={20}
              color={Color.Main}
            />
          ),
        }}
        name="ongoingjobs"
        component={OngoingJob}
      />
      <Drawer.Screen
        options={{
          title: 'Summary',
          drawerIcon: () => (
            <MaterialCommunityIcons
              name="file-document-multiple"
              size={20}
              color={Color.Main}
            />
          ),
        }}
        name="ogsummary"
        component={OGSummary}
      />
      <Drawer.Screen
        options={{
          title: 'Wallet',
          drawerIcon: () => (
            <Entypo name="wallet" size={20} color={Color.Main} />
          ),
        }}
        name="wallet"
        component={Wallet}
      />
    </Drawer.Navigator>
    // </NavigationContainer>
  );
};
