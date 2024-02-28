import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {scale, moderateScale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
const CustomLoginButton = props => {
  return (
    <TouchableOpacity
      activeOpacity={props.activeOpacity}
      onPress={props.onPress}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#E70100', '#DD0101', '#CA0101', '#BA0101']}
        style={[styles.containerStyle, props.containerStyle]}>
        <Text style={[styles.font, props.textStyle]}>{props.title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default CustomLoginButton;

const styles = StyleSheet.create({
  containerStyle: {
    width: '90%',
    paddingVertical: moderateScale(15),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginTop: scale(15),
    alignSelf: 'center',
  },

  font: {
    color: '#fff',
    fontSize: scale(17),
    textTransform: 'uppercase',
    // textAlign: 'center',
  },
});
