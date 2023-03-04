import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import CustomInput from '../../components/CustomInput';
import {useForm} from 'react-hook-form';
import {Color} from '../../utils/Colors';
import CustomButton from '../../components/CustomButton';
import CustomLoginButton from '../../components/CustomLoginButton';
import {Font} from '../../utils/font';

const Register = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [index, setIndex] = useState(99);
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({mode: 'all'});
  return (
    <SafeAreaView style={styles.Container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.LogoBox}>
          <Image
            style={styles.logo}
            source={require('../../assets/Images/mainlogo.png')}
          />
        </View>
        <View style={styles.WorkBox}>
          <View style={{paddingHorizontal: 20}}>
            <Text style={styles.WelcomeText}>Create your account</Text>
            <Text style={styles.LongText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </Text>
          </View>
          <CustomInput
            onFocus={() => {
              setIndex(0);
            }}
            Hello={{paddingVertical: 0, marginTop: 5}}
            style={
              index === 0
                ? {
                    borderTopWidth: 0,
                    borderRightWidth: 0,
                    borderLeftWidth: 0,
                    borderBottomWidth: 1,
                    borderBottomColor: Color.Main,
                  }
                : {
                    borderTopWidth: 0,
                    borderRightWidth: 0,
                    borderLeftWidth: 0,
                    borderBottomWidth: 1,
                    borderBottomColor: Color.borderColor,
                  }
            }
            control={control}
            keyboardType="default"
            name="f_name"
            rules={{
              required: 'email is required',
              value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
              message: 'Enter a valid email',
            }}
            placeholder="First Name"
            placeholderTextColor={'#32323266'}
          />
          <CustomInput
            onFocus={() => {
              setIndex(2);
            }}
            Hello={{paddingVertical: 0, marginTop: 5}}
            style={
              index === 2
                ? {
                    borderTopWidth: 0,
                    borderRightWidth: 0,
                    borderLeftWidth: 0,
                    borderBottomWidth: 1,
                    borderBottomColor: Color.Main,
                  }
                : {
                    borderTopWidth: 0,
                    borderRightWidth: 0,
                    borderLeftWidth: 0,
                    borderBottomWidth: 1,
                    borderBottomColor: Color.borderColor,
                  }
            }
            control={control}
            keyboardType="default"
            name="l_name"
            rules={{
              required: 'email is required',
              value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
              message: 'Enter a valid email',
            }}
            placeholder="Last Name"
            placeholderTextColor={'#32323266'}
          />
          <CustomInput
            onFocus={() => {
              setIndex(3);
            }}
            Hello={{paddingVertical: 0, marginTop: 5}}
            style={
              index === 3
                ? {
                    borderTopWidth: 0,
                    borderRightWidth: 0,
                    borderLeftWidth: 0,
                    borderBottomWidth: 1,
                    borderBottomColor: Color.Main,
                  }
                : {
                    borderTopWidth: 0,
                    borderRightWidth: 0,
                    borderLeftWidth: 0,
                    borderBottomWidth: 1,
                    borderBottomColor: Color.borderColor,
                  }
            }
            control={control}
            keyboardType="email-address"
            name="email"
            rules={{
              required: 'email is required',
              value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
              message: 'Enter a valid email',
            }}
            placeholder="Email"
            placeholderTextColor={'#32323266'}
          />
          <CustomInput
            onFocus={() => {
              setIndex(4);
            }}
            Hello={{paddingVertical: 0, marginTop: 5}}
            style={
              index === 4
                ? {
                    borderTopWidth: 0,
                    borderRightWidth: 0,
                    borderLeftWidth: 0,
                    borderBottomWidth: 1,
                    borderBottomColor: Color.Main,
                  }
                : {
                    borderTopWidth: 0,
                    borderRightWidth: 0,
                    borderLeftWidth: 0,
                    borderBottomWidth: 1,
                    borderBottomColor: Color.borderColor,
                  }
            }
            control={control}
            keyboardType="numeric"
            name="phone_number"
            rules={{
              required: 'email is required',
              value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
              message: 'Enter a valid email',
            }}
            placeholder="Phone Number"
            placeholderTextColor={'#32323266'}
          />
          <CustomInput
            onFocus={() => {
              setIndex(5);
            }}
            Hello={{paddingVertical: 0, marginTop: 5}}
            style={
              index === 5
                ? {
                    borderTopWidth: 0,
                    borderRightWidth: 0,
                    borderLeftWidth: 0,
                    borderBottomWidth: 1,
                    borderBottomColor: Color.Main,
                  }
                : {
                    borderTopWidth: 0,
                    borderRightWidth: 0,
                    borderLeftWidth: 0,
                    borderBottomWidth: 1,
                    borderBottomColor: Color.borderColor,
                  }
            }
            control={control}
            keyboardType="default"
            name="state"
            rules={{
              required: 'email is required',
              value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
              message: 'Enter a valid email',
            }}
            placeholder="State"
            placeholderTextColor={'#32323266'}
          />
          <CustomInput
            onFocus={() => {
              setIndex(1);
            }}
            // restyle={{height: verticalScale(30)}}
            Hello={{paddingVertical: 0, marginTop: 5}}
            style={
              index === 1
                ? {
                    borderTopWidth: 0,
                    borderRightWidth: 0,
                    borderLeftWidth: 0,
                    borderBottomWidth: 1,
                    borderBottomColor: Color.Main,
                  }
                : {
                    borderTopWidth: 0,
                    borderRightWidth: 0,
                    borderLeftWidth: 0,
                    borderBottomWidth: 1,
                    borderBottomColor: Color.borderColor,
                  }
            }
            control={control}
            name="password"
            rules={{
              required: '*Password is required',
              minLength: {
                value: 8,
                message: '*Password too short (minimum length is 8)',
              },
              maxLength: {
                value: 16,
                message: '*Password too long (maximum length is 16)',
              },
            }}
            secureTextEntry={true}
            keyboardType="default"
            placeholder="Password"
            maxLength={20}
            placeholderTextColor={'#32323266'}
          />

          <View style={styles.termAndConditionsBox}>
            <CheckBox
              tintColors={{true: Color.Main, false: Color.Main}}
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate('termsandcondition')}>
              <Text
                style={{
                  color: Color.placeholderTextColor,
                  fontSize: scale(12),
                  fontFamily: Font.Lato400,
                }}>
                Accepting all the Terms and Conditions.
              </Text>
            </TouchableOpacity>
          </View>
          <CustomButton
            containerStyle={{width: '85%', marginTop: scale(15)}}
            onPress={() => navigation.navigate('otp')}
            title={'Register'}
          />
          <Text
            style={{
              color: Color.placeholderTextColor,
              fontSize: scale(12),
              alignSelf: 'center',
              paddingTop: scale(20),
              fontFamily: Font.Lato400,
            }}>
            Already have an account?
          </Text>
          <CustomLoginButton
            containerStyle={{width: '85%', marginTop: 0}}
            onPress={() => navigation.navigate('login')}
            title={'Sign In'}
          />
        </View>
        <View style={{height: verticalScale(50)}}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  LogoBox: {
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: scale(150),
    height: scale(100),
  },
  WorkBox: {
    height: '100%',
    backgroundColor: '#fff',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(30),
  },
  WelcomeText: {
    fontSize: scale(28),
    fontFamily: Font.Lato700,
    color: '#000',
    marginBottom: scale(5),
  },
  LongText: {
    color: 'rgba(0, 0, 0, 0.7)',
    fontFamily: Font.Lato400,
    fontSize: scale(13),
    marginBottom: scale(5),
  },
  FPassCon: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  image: {
    width: scale(30),
    height: verticalScale(35),
    left: scale(15),
  },
  termAndConditionsBox: {
    marginTop: scale(15),
    flexDirection: 'row',
    paddingLeft: moderateScale(20),
    alignItems: 'center',
  },
});

export default Register;