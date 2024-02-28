import React from 'react';
import { StyleSheet, Image, TouchableOpacity, View } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

import { Color } from '../utils/Colors';

const BackWithMenu = props => {
  return (
    <View style={styles.Container}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={props.onPress}
        style={styles.Menu}>
        <Entypo name={'menu'} size={30} color={Color.White} />
      </TouchableOpacity>

      <View>
        <Image
          style={styles.mainlogo}
          source={require('../assets/Images/mainlogo.png')}
        />
      </View>
      <TouchableOpacity
        onPress={props.onPress_back}
        activeOpacity={0.8}
        style={styles.arrow}>
        <MaterialCommunityIcons
          style={styles.FontAwesomeArrow}
          name={'bell-badge-outline'}
          size={30}
          color={Color.White}
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    backgroundColor: Color.Main,
    paddingHorizontal: scale(25),
    height: verticalScale(90),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomEndRadius: 20,
    borderBottomLeftRadius: 20,
  },
  arrow: {
    backgroundColor: Color.Main,
    width: scale(32),
    height: verticalScale(32),
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  FontAwesomeArrow: {
    marginRight: scale(5),
  },
  mainlogo: {
    width: scale(90),
    height: scale(60),
  },
});

export default BackWithMenu;
