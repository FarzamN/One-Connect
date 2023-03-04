import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  scale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import { Font } from '../utils/font';
const CustomButton = props => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={props.onPress}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#E70100', '#DD0101', '#CA0101', '#BA0101']}
        style={[
          styles.containerStyle,
          props.containerStyle,
          props.buttonRestyle,
          {flexDirection: 'row', justifyContent: 'space-between'},
        ]}>
        <Text style={[styles.font, props.textStyle]}>{props.title}</Text>
        <FontAwesome name={'long-arrow-right'} size={25} color={'white'} />
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  containerStyle: {
    paddingVertical: moderateVerticalScale(15),
    paddingHorizontal: scale(25),
    width: '80%',
    padding: moderateScale(12),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginTop: scale(5),
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  font: {
    color: '#fff',
    fontSize: scale(15),
    textTransform: 'uppercase',
    fontFamily: Font.Lato700
  },
});
