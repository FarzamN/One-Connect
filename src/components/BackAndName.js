import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

import {Color} from '../utils/Colors';

import {Font} from '../utils/font';
const BackAndName = props => {
  return (
    <View style={[styles.Container, props.ContainerRestyle]}>
      <TouchableOpacity
        onPress={props.onPress}
        activeOpacity={0.5}
        style={[styles.arrow, props.restyle]}>
        <AntDesign name={'arrowleft'} size={25} color={Color.Black} />
      </TouchableOpacity>
      <Text style={[styles.font, props.textStyle]}>{props.title}</Text>
      <View style={styles.Menu}>
        <Feather name={'menu'} size={30} color={'#fff'} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    backgroundColor: Color.White,
    padding: scale(15),
    height: verticalScale(80),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  font: {
    color: Color.Black,
    fontSize: scale(18),
    fontFamily: Font.Lato700,
    textTransform: 'capitalize',
  },
});

export default BackAndName;
