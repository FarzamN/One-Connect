import React, {useState} from 'react';
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
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import InputFields from '../../components/InputFields';
import {useForm} from 'react-hook-form';
import {Color} from '../../utils/Colors';
import CustomButton from '../../components/CustomButton';
import CustomLoginButton from '../../components/CustomLoginButton';
import {Font} from '../../utils/font';

const Login = ({navigation}) => {
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
            <Text style={styles.WelcomeText}>Welcome back</Text>
            <Text style={styles.LongText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </Text>
          </View>
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
                    borderBottomWidth: 2,
                    borderBottomColor: Color.Main,
                  }
                : {
                    borderTopWidth: 0,
                    borderRightWidth: 0,
                    borderLeftWidth: 0,
                    borderBottomWidth: 2,
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
                      borderBottomWidth: 2,
                      borderBottomColor: Color.Main,
                    }
                  : {
                      borderTopWidth: 0,
                      borderRightWidth: 0,
                      borderLeftWidth: 0,
                      borderBottomWidth: 2,
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
            containerStyle={{width: '90%', marginTop: scale(10)}}
            onPress={() => navigation.navigate('DrawerNavigation')}
            title={'Login'}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate('forgetpass')}
            style={[
              styles.FPassCon,
              {marginTop: scale(10), marginRight: scale(10)},
            ]}>
            <Text
              style={{
                fontSize: scale(15),
                fontFamily: Font.Lato400,
                color: Color.Main,
                textDecorationLine: 'underline',
              }}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
          <View>
            <Text
              style={{
                color: Color.placeholderTextColor,
                fontSize: scale(12),
                alignSelf: 'center',
                paddingTop: scale(8),
                fontFamily: Font.Lato400,
              }}>
              Or Signin with
            </Text>

            <TouchableOpacity style={styles.googleContainer}>
              <Image
                style={styles.image}
                source={require('../../assets/Images/google.png')}
              />
              <Text style={styles.SigningText}>Login With Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.googleContainer}>
              <Image
                style={styles.image}
                source={require('../../assets/Images/facebook.png')}
              />
              <Text style={styles.SigningText}>Login With facebook</Text>
            </TouchableOpacity>
          </View>

          <Text
            style={{
              color: Color.placeholderTextColor,
              fontSize: scale(12),
              alignSelf: 'center',
              paddingTop: scale(15),
              fontFamily: Font.Lato400,
            }}>
            Don't have an account?
          </Text>
          <CustomLoginButton
            containerStyle={{marginTop: 0}}
            onPress={() => navigation.navigate('register')}
            title={'Create an accout'}
          />
        </View>
        <View style={{height: verticalScale(30)}}></View>
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
    flex: 1,
    backgroundColor: Color.White,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    paddingHorizontal: moderateScale(10),
    paddingTop: moderateScale(35),
    paddingBottom: moderateScale(50),
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
    width: scale(25),
    height: scale(25),
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
    width: '90%',
    borderRadius: 20,
  },
  SigningText: {
    color: 'black',
    fontSize: scale(14),
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingHorizontal: scale(30),
    fontFamily: Font.Lato400,
  },
});

export default Login;