import React from 'react';
import { StyleSheet, Image, TouchableOpacity, View, Text } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

import { Color } from '../utils/Colors';

const BackAndName = props => {
  return (
    <View style={[styles.Container, props.ContainerRestyle]}>
      <TouchableOpacity
        onPress={props.onPress}
        activeOpacity={0.5}
        style={[styles.arrow, props.restyle]}>
        <AntDesign name={'arrowleft'} size={25} color={props.color} />
      </TouchableOpacity>
      <Text style={[styles.font, props.textStyle]}>{props.title}</Text>
      <View style={styles.Menu}>
        <Feather name={'menu'} size={30} color={Color.White} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#fff',
    padding: scale(15),
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  font: {
    color: '#000',
    fontSize: scale(16),
    fontFamily: 'Inter-Bold',
    textTransform: 'uppercase',
  },
});

export default BackAndName;
