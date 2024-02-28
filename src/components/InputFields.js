import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  Platform,
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import {useController} from 'react-hook-form';
import React, {forwardRef, useState} from 'react';
import {Color} from '../utils/Colors';
import { Font } from '../utils/font';

const Input = forwardRef((props, ref) => {
  const {field} = useController({
    control: props.control,
    defaultValue: props.defaultValue || '',
    name: props.name,
    rules: props.rules,
  });
  const [showPassword, setShowPassword] = useState(true);

  return (
    <SafeAreaView>
      <View style={[styles.smallbox, props.InputContainerStyle]}>
        <Feather name={props.IconName} color={Color.Main} size={25} />
        <TextInput
          style={[styles.input, props.style, {width: '100%'}]}
          placeholderTextColor={Color.placeholderTextColor}
          onFocus={props.onFocus}
          value={field.value}
          ref={ref}
          underlineColorAndroid="transparent"
          multiline={props.multiline}
          placeholder={props.placeholder}
          onChangeText={field.onChange}
          onChange={props.onChange}
          keyboardType={props.keyboardType}
          onSubmitEditing={props.onSubmitEditing}
          secureTextEntry={props.password ? showPassword : false}
          defaultValue={props.defaultValue}
          maxLength={props.maxLength}
        />
      </View>
    </SafeAreaView>
  );
});

export default Input;

const styles = StyleSheet.create({
  input: {
    color: '#32323266',
    fontSize: 14,
    paddingHorizontal: 15,
    fontFamily:Font.Lato400
    
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
    borderWidth: 2,
  },
  viewText: {
    color: Color.Main,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 13,
    padding: 10,
  
  },
});
