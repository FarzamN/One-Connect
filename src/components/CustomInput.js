import React, {forwardRef, useState} from 'react';
import {useController, useForm} from 'react-hook-form';
import {
  StyleSheet,
  InputField,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import Zocial from 'react-native-vector-icons/Zocial';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { Font } from '../utils/font';

const CustomInput = forwardRef((props, ref) => {
  const {field} = useController({
    control: props.control,
    defaultValue: props.defaultValue || '',
    name: props.name,
    rules: props.rules,
  });
  return (
    <View style={[styles.smallbox, props.style,] }>
      <TextInput
        onFocus={props.onFocus}
        textContentType={props.textContentType}
        value={field.value}
        ref={ref}
        onChangeText={field.onChange}
        multiline={props.multiline}
        numberOfLines={props.numberOfLines}
        placeholder={props.placeholder}
        placeholderTextColor={'#999B9E'}
        style={[styles.InputStyles, props.Gapp, props.restyle]}
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType}
        textAlignVertical={props.textAlignVertical}
        pattern={props.pattern}
        label={props.label}
        placeholderStyle={{fontFamily : Font.Lato400}}
        fontSize={props.fontSize}
        maxLength={props.maxLength}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  InputStyles: {
    width: '100%',
    height: verticalScale(35),
    borderRadius: 12,
    alignItems: 'center',
    backgroundColor: '#FFF',
    color: 'black',
    top:scale(5),
    fontFamily:Font.Lato400,
    
    
  },
  smallbox: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 10,
    width: '85%',
    padding: 5,
    backgroundColor: 'white',
    // borderWidth: 2,
  },
});
export default CustomInput;
