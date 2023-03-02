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
import CustomInput from '../../components/CustomInput';
import {useForm} from 'react-hook-form';

const ForgetPass = ({navigation}) => {
  const [time, setTime] = useState(30);
  const timerRef = useRef(time);

  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({mode: 'all'});

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
      <Text style={styles.WelcomeText}>Password Recovery</Text>
      <Text style={styles.LongText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
      </Text>
      <CustomInput
        style={{
          width: '100%',
          height: verticalScale(55),
          borderWidth: 1,
          borderColor: Color.Main,
          borderRadius: 20,
          marginBottom: scale(20),
          marginTop: scale(20),
          paddingHorizontal: moderateScale(20),
        }}
        control={control}
        keyboardType="email-address"
        name="forget_pass"
        rules={{
          required: 'email is required',
          value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
          message: 'Enter a valid email',
        }}
        placeholder="Enter your Email Address"
        placeholderTextColor={'#32323266'}
      />
      <CustomButton
        containerStyle={{width: '100%', marginTop: scale(25)}}
        onPress={() => navigation.navigate('login')}
        title={'Verify'}
      />
      <View style={styles.ImageBox}>
        <Image
          style={styles.Image}
          source={require('../../assets/Images/mainlogo.png')}
        />
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 10,
          alignSelf: 'center',
        }}>
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
    backgroundColor: '#fff',
    paddingVertical: moderateScale(50),
    paddingHorizontal: moderateScale(20),
  },
  WelcomeText: {
    fontSize: scale(28),
    fontWeight: '700',
    color: '#000',
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
    width: scale(60),
    height: scale(60),
    fontSize: scale(24),
    borderWidth: 2,
    borderRadius: 10,
    borderColor: Color.Main,
    textAlign: 'center',
    color: Color.Main,
    textAlignVertical: 'center',
  },
  ImageBox: {
    marginTop: scale(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  Image: {
    width: scale(220),
    height: scale(170),
  },
});

export default ForgetPass;
