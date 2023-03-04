import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {scale, moderateScale, verticalScale} from 'react-native-size-matters';
import {Color} from '../../utils/Colors';
import CustomInput from '../CustomInput';
import {useForm} from 'react-hook-form';
import CustomButton from '../CustomButton';
import Modal from 'react-native-modal';
import {useNavigation} from '@react-navigation/native';

import CustomStarRating from '../CustomStarRating';
import CustomLoginButton from '../CustomLoginButton';
import {Font} from '../../utils/font';
const ServiceDetail = props => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({mode: 'all'});
  return (
    <View>
      <Text style={styles.Details}>Details</Text>
      <View style={styles.DateBox}>
        <Text style={styles.Text}>Service </Text>
        <Text style={styles.Text}>Battery Service</Text>
      </View>
      <View style={styles.DateBox}>
        <Text style={styles.Text}>Location </Text>
        <Text style={styles.Text}>MS 3987, USA</Text>
      </View>
      <View style={styles.DateBox}>
        <Text style={styles.Text}>{props.ChangeText} </Text>
        <Text style={styles.Text}>$29.89</Text>
      </View>
      {props.ChangeBox ? (
        <View style={styles.DateBox}>
          <Text style={styles.Text}>Extra Charges</Text>
          <Text style={styles.Text}>$25.00</Text>
        </View>
      ) : null}
      <View style={styles.DateBox}>
        <Text style={styles.Text}>Fee </Text>
        <Text style={styles.Text}>$2.00</Text>
      </View>

      <View style={styles.BottomBorder}></View>
      <View style={styles.DateBox}>
        <Text style={styles.Total}>Total</Text>
        <Text style={styles.Total}>$30.98</Text>
      </View>
      {props.Tip ? (
        <>
          <View style={styles.BottomEndBorder} />
          <CustomInput
            style={{
              
              width: '95%',
              
              // height: verticalScale(50),
              // backgroundColor: 'red',
              // borderWidth: 1,
              // borderColor: Color.Main,
              // borderBottomColor: 1,
              // borderRadius: 15,
              // marginTop: scale(20),
              // paddingHorizontal: moderateScale(15),
            }}
            control={control}
            keyboardType="email-address"
            name="forget_pass"
            rules={{
              required: 'email is required',
              value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
              message: 'Enter a valid email',
            }}
            placeholder="Enter the tip"
            placeholderTextColor={'#32323266'}
            restyle ={{borderWidth:1,borderColor:Color.Main}}
            Gapp={{paddingHorizontal:10}}
          
          />
        </>
      ) : null}

      <CustomButton
        onPress={() => {
          toggleModal();
          console.log('modal Open');
        }}
        title="PAY"
        containerStyle={{
          width: '85%',
          marginTop: scale(30),
        }}
      />
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}>
        <View style={styles.ModalMainBox}>
          <Text style={styles.FeedBack}>FeedBack</Text>
          <Text style={styles.Modal_Long_Text}>
            How was the service? Rate Mechanic
          </Text>
          <View
            style={{
              width: '60%',
              alignSelf: 'center',
              marginTop: scale(10),
            }}>
            <CustomStarRating starSize={35} disable={true} />
          </View>
          <CustomInput
            style={{
              borderTopWidth: 0,
              borderRightWidth: 0,
              borderLeftWidth: 0,
              borderBottomWidth: 1,
              borderBottomColor: Color.Main,
              
            }}
            control={control}
            keyboardType="email-address"
            name="your_comment"
            rules={{
              required: 'email is required',
              value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
              message: 'Enter a valid email',
            }}
            placeholder="Your Comment"
            placeholderTextColor={'#32323266'}
          />
          <CustomLoginButton
            activeOpacity={1}
            onPress={() => navigation.navigate('progress')}
            textStyle={{fontSize: scale(13)}}
            containerStyle={{
              marginTop: scale(10),
              width: '60%',
              paddingVertical: moderateScale(15),
              borderRadius: 20,
            }}
            title="Rate"
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  Text: {
    color: Color.placeholderTextColor,
    fontSize: scale(15),
    fontFamily: Font.Poppins400,
  },
  DateBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(20),
    marginBottom: scale(7),
  },
  Details: {
    color: Color.Black,
    fontFamily: Font.Poppins700,
    fontSize: scale(18),
    marginLeft: scale(20),
    marginVertical: scale(20),
  },
  BottomBorder: {
    borderBottomWidth: 1,
    marginHorizontal: 30,
    borderBottomColor: Color.borderColor,
    marginTop: 10,
  },
  BottomEndBorder: {
    borderBottomWidth: 1,
    borderBottomColor: Color.Black,
    marginTop: scale(10),
  },
  Total: {
    color: Color.Black,
    fontSize: scale(22),
    // marginHorizontal: scale(20),
    marginTop: scale(15),
    fontFamily: Font.Poppins600,
  },
  input: {
    height: verticalScale(40),
    margin: scale(12),
    borderWidth: 1,
    padding: 10,
  },
  ModalMainBox: {
    width: '100%',
    alignSelf: 'center',
    backgroundColor: Color.White,
    marginTop: scale(20),
    borderRadius: 20,
    paddingVertical: moderateScale(50),
    paddingHorizontal: moderateScale(30),
  },
  Modal_Long_Text: {
    fontSize: scale(12),
    color: Color.placeholderTextColor,
    paddingTop: verticalScale(10),
    fontFamily: Font.Poppins400,
    textAlign: 'center',
  },
  FeedBack: {
    fontSize: scale(27),
    color: Color.Main,
    textAlign: 'center',
    fontFamily: Font.Poppins700,
  },
});

export default ServiceDetail;
