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
import {Font} from '../../utils/font';

const ForgetPass = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({mode: 'all'});
  const [time, setTime] = useState(40);
  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime(time - 1), 1000);
    return () => clearInterval(timer);
  }, [time]);
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
          borderRadius: 10,
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
      <View style={{position: 'absolute', bottom: 10, alignSelf: 'center'}}>
        {time == 0 ? (
          <TouchableOpacity
            style={{
              backgroundColor: Color.Main,
              paddingHorizontal: 10,
              paddingVertical: 5,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
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
    backgroundColor: '#fff',
    paddingVertical: moderateScale(50),
    paddingHorizontal: moderateScale(20),
  },
  WelcomeText: {
    fontSize: scale(28),
    fontFamily: Font.Lato700,
    color: '#000',
    marginBottom: scale(5),
  },
  LongText: {
    color: 'rgba(0, 0, 0, 0.7)',
    fontSize: scale(13),
    marginBottom: scale(5),
    fontFamily: Font.Lato400,
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
    fontFamily: Font.Poppins800,
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