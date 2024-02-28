import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Color} from '../../utils/Colors';
import CustomButton from '../../components/CustomButton';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {Font} from '../../utils/font';

const CELL_COUNT = 4;
const OTP = ({navigation}) => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const [time, setTime] = useState(40);
  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime(time - 1), 1000);
    return () => clearInterval(timer);
  }, [time]);

  return (
    <SafeAreaView style={styles.Container}>
      <Text style={styles.WelcomeText}>Enter your OTP</Text>
      <Text style={styles.LongText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
      </Text>
      <CodeField
        ref={ref}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
      <CustomButton
        containerStyle={{width: '100%', marginTop: 20}}
        onPress={() => navigation.navigate('login')}
        title={'Confirm'}
      />
      <View style={styles.ImageBox}>
        <Image
          style={styles.Image}
          source={require('../../assets/Images/mainlogo.png')}
        />
      </View>
      <View style={{position: 'absolute', bottom: 10, alignSelf: 'center'}}>
        {time == 0 ? (
          <TouchableOpacity
            style={{
              backgroundColor: Color.Main,
              padding: 7,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}
            onPress={() => setTime(40)}>
            <Text
              style={{
                color: Color.White,
                fontSize: scale(15),
                fontFamily: Font.Lato400,
              }}>
              Resend
            </Text>
          </TouchableOpacity>
        ) : (
          <Text
            style={{
              color: Color.placeholderTextColor,
              fontSize: scale(14),
              alignSelf: 'center',
              fontFamily: Font.Lato400,
            }}>
            Wait {time} more seconds to resend the OTP
          </Text>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Color.White,
    paddingTop: moderateScale(50),
    paddingHorizontal: moderateScale(20),
  },
  WelcomeText: {
    fontSize: scale(28),
    fontFamily: Font.Lato700,
    color: Color.Black,
    marginBottom: scale(5),
  },
  LongText: {
    color: 'rgba(0, 0, 0, 0.7)',
    fontFamily: Font.Lato400,
    fontSize: scale(13),
    marginBottom: scale(5),
  },
  codeFieldRoot: {marginVertical: scale(20)},
  cell: {
    width: scale(65),
    height: scale(65),
    fontSize: scale(24),
    borderWidth: 2,
    borderRadius: 10,
    borderColor: Color.Main,
    textAlign: 'center',
    color: Color.Main,
    fontFamily: Font.Poppins400,
    textAlignVertical: 'center',
  },
  ImageBox: {
    marginTop: '30%',
    alignItems: 'center',
  },
  Image: {
    width: scale(220),
    height: scale(170),
    resizeMode: 'contain',
  },
});

export default OTP;