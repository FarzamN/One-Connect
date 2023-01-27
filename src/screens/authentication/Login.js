import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import InputFields from '../../components/InputFields';
import { useForm } from 'react-hook-form';
import { Color } from '../../utils/Colors';
import CustomButton from '../../components/CustomButton';
import CustomLoginButton from '../../components/CustomLoginButton';

const Login = ({ navigation }) => {
  const [index, setIndex] = useState(99);
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'all' });
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
          <Text style={styles.WelcomeText}>Welcome back</Text>
          <Text style={styles.LongText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </Text>
          {/* <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}> */}
          <InputFields
            onFocus={() => {
              setIndex(0);
            }}
            InputContainerStyle={
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
            IconName={'user'}
            keyboardType="email-address"
            name="email"
            rules={{
              required: 'email is required',
              value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
              message: 'Enter a valid email',
            }}
            placeholder="User name"
            placeholderTextColor={'#32323266'}
          />
          {/* </KeyboardAvoidingView> */}
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <InputFields
              onFocus={() => {
                setIndex(1);
              }}
              InputContainerStyle={
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
              IconName={'lock'}
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
              password={true}
              keyboardType="default"
              placeholder="Password"
              maxLength={20}
              placeholderTextColor={'#32323266'}
            />
          </KeyboardAvoidingView>
          <CustomButton
            onPress={() => navigation.navigate('map')}
            title={'Login'} />
          <TouchableOpacity
            onPress={() => navigation.navigate('forgetpass')}
            style={[styles.FPassCon, { marginTop: scale(10) }]}>
            <Text
              style={{
                fontSize: scale(16),
                fontWeight: '500',
                color: Color.Main,
                fontStyle: 'normal',
                textDecorationLine: 'underline',
              }}>
              Forget Password?
            </Text>
          </TouchableOpacity>
          <View>
            <Text
              style={{
                color: Color.placeholderTextColor,
                fontFamily: 'Poppins-Medium',
                fontSize: scale(12),
                alignSelf: 'center',
                paddingTop: scale(8),
              }}>
              Or SignIn with
            </Text>

            <TouchableOpacity style={styles.googleContainer}>
              <Image
                style={styles.image}
                source={require('../../assets/Images/google.png')}
              />
              <Text style={styles.SigningText}>Sign In With Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.googleContainer}>
              <Image
                style={styles.image}
                source={require('../../assets/Images/facebook.png')}
              />
              <Text style={styles.SigningText}>Sign In With facebook</Text>
            </TouchableOpacity>
          </View>

          <Text
            style={{
              color: Color.placeholderTextColor,
              fontFamily: 'Poppins-Medium',
              fontSize: scale(12),
              alignSelf: 'center',
              paddingTop: scale(8),
            }}>
            Don`t have an account
          </Text>
          <CustomLoginButton
            onPress={() => navigation.navigate('register')}
            title={'Create an accout'}
          />
        </View>
        <View style={{ height: verticalScale(50) }}></View>
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
    height: '80%',
    backgroundColor: '#fff',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    padding: moderateScale(20),
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
  FPassCon: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    // marginTop: scale(5),
  },
  image: {
    width: scale(30),
    height: verticalScale(35),
    left: scale(15),
  },
  googleContainer: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#435CA8',
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: scale(10),
    marginTop: scale(15),
    width: '100%',
    borderRadius: 20,
  },
  SigningText: {
    color: 'black',
    fontFamily: 'Poppins-Medium',
    fontSize: scale(16),
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingHorizontal: scale(30),
  },
});

export default Login;
