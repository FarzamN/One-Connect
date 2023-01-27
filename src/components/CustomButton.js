import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {scale, moderateScale} from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
const CustomButton = props => {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={props.activeOpacity}
        onPress={props.onPress}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#E70100', '#DD0101', '#CA0101', '#BA0101']}
          style={[
            styles.containerStyle,
            props.containerStyle,
            {flexDirection: 'row', justifyContent: 'space-between'},
          ]}>
          <Text style={[styles.font, props.textStyle]}>{props.title}</Text>
          <AntDesign name={'arrowright'} size={30} color={'white'} />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  containerStyle: {
    width: '100%',
    padding: moderateScale(15),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginTop: scale(15),
  },

  font: {
    color: '#fff',
    fontSize: scale(20),
    fontFamily: 'Inter-Bold',
    textTransform: 'uppercase',
  },
});
