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

const CELL_COUNT = 4;
const OTP = ({navigation}) => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const [time, setTime] = useState(30);
  const timerRef = useRef(time);

  useEffect(() => {
    const timerId = setInterval(() => {
      timerRef.current -= 1;
      if (timerRef.current < 0) {
        clearInterval(timerId);
      } else {
        setTime(timerRef.current);
      }
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);
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
        <Text
          style={{
            color: Color.placeholderTextColor,
            fontSize: scale(14),
            alignSelf: 'center',
          }}>
          Wait {time} more seconds to resend the OTP
        </Text>
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
    fontWeight: '700',
    color: Color.Black,
    marginBottom: scale(5),
  },
  LongText: {
    color: 'rgba(0, 0, 0, 0.7)',
    fontWeight: '400',
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
