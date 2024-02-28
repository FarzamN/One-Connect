import React from 'react';
import {} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../screens/authentication/Login';
import Register from '../screens/authentication/Register';
import OTP from '../screens/authentication/OTP';
import ForgetPass from '../screens/authentication/ForgetPass';

import {DrawerNavigation} from './DrawerNavigation';
import Splash from '../screens/authentication/Splash';
import TermsAndCondition from '../screens/authentication/TermsAndCondition';

const Stack = createNativeStackNavigator();

function AuthNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="termsandcondition" component={TermsAndCondition} />
        <Stack.Screen name="splash" component={Splash} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="otp" component={OTP} />
        <Stack.Screen name="forgetpass" component={ForgetPass} />
        <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AuthNavigation;
