import React from 'react';
import {SafeAreaView, StyleSheet, Image, Text, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Ionicons';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {Color} from '../utils/Colors';
import {scale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import { Font } from '../utils/font';

const DrawerContainer = props => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff', borderRadius: 100}}>
      <View style={styles.linearGradient}>
        <Image
          source={require('../assets/Images/mainlogo.png')}
          style={styles.sideMenuProfileIcon}
        />
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          style={{backgroundColor: 'white'}}
          icon={() => <Entypo color={Color.Main} size={20} name={'log-out'} />}
          labelStyle={{color: '#1f1f1f', marginLeft: -15}}
          label="Log Out"
          onPress={() => navigation.navigate('login')}
        />
      </DrawerContentScrollView>

      <Text
        style={{
          fontSize: scale(18),
          color: Color.placeholderTextColor,
          fontFamily: Font.Poppins700,
          textTransform: 'capitalize',
          // marginBottom: scale(20),
          marginLeft: scale(10),
        }}>
        ONECONNECT ROADSIDE
        {`\n`}
        ASSISTANCE
      </Text>
      <Text
        style={{
          fontSize: 14,
          color: Color.borderColor,
          fontFamily: Font.Poppins400,
          textTransform: 'capitalize',
          marginBottom: scale(20),
          marginLeft: scale(10),
        }}>
        Version 1.0
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    backgroundColor: Color.Main,
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
    paddingTop: 30,
    paddingBottom: 50,
  },
  sideMenuProfileIcon: {
    width: 140,
    height: 100,
    marginTop: scale(20),
    alignSelf: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default DrawerContainer;
