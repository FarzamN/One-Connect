import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Color} from '../utils/Colors';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const BottomTab = props => {
  return (
    <View
      style={{
        width: '90%',
        alignSelf: 'center',
        height: verticalScale(80),
        backgroundColor: Color.White,
        borderRadius: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: moderateScale(5),
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }}>
      <TouchableOpacity onPress={props.onPress}>
        <AntDesign name="caretleft" color={Color.Main} size={35} />
      </TouchableOpacity>
      <View
        style={{
          backgroundColor: Color.Main,
          height: scale(50),
          width: scale(70),
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 3,
        }}>
        <FontAwesome5 name="car-battery" color={Color.White} size={35} />
        <Text style={{color: Color.White, fontSize: scale(8)}}>Batteries</Text>
      </View>
      <View
        style={{
          backgroundColor: Color.White,
          height: scale(50),
          width: scale(70),
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 3,
        }}>
        <Image
          style={{width: 35, height: 35}}
          source={require('../assets/Images/repred.png')}
        />
        <Text
          style={{
            color: Color.Main,
            textAlign: 'center',
            fontSize: scale(8),
          }}>
          Clutch & Breaks
        </Text>
      </View>
      <View
        style={{
          backgroundColor: Color.Main,
          height: scale(50),
          width: scale(70),
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 3,
        }}>
        <Image
          style={{width: 35, height: 35}}
          source={require('../assets/Images/wheelwhite.png')}
        />
        <Text
          style={{
            color: Color.White,
            textAlign: 'center',
            fontSize: scale(8),
          }}>
          Tyres & Wheel
        </Text>
      </View>
      <TouchableOpacity>
        <AntDesign name="caretright" color={Color.Main} size={35} />
      </TouchableOpacity>
    </View>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});
