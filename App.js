import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AuthNavigation from './src/navigation/AuthNavigation';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }, []);
  return <AuthNavigation />;
};

const styles = StyleSheet.create({});
export default App;
