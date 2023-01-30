import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {scale, moderateScale, verticalScale} from 'react-native-size-matters';
import {Color} from '../../utils/Colors';
import CustomInput from '../CustomInput';
import {useForm} from 'react-hook-form';
import CustomButton from '../CustomButton';
import Modal from 'react-native-modal';

import CustomStarRating from '../CustomStarRating';
import CustomLoginButton from '../CustomLoginButton';
const ServiceDetail = () => {
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
        <Text style={styles.Text}>Subtotal </Text>
        <Text style={styles.Text}>$29.89</Text>
      </View>
      <View style={styles.DateBox}>
        <Text style={styles.Text}>Fee </Text>
        <Text style={styles.Text}>$2.00</Text>
      </View>
      <View style={styles.BottomBorder}></View>
      <View style={styles.DateBox}>
        <Text style={styles.Total}>Total</Text>
        <Text style={styles.Total}>$30.98</Text>
      </View>
      <View style={styles.BottomEndBorder}></View>
      <CustomInput
        style={{
          width: '90%',
          height: verticalScale(45),
          borderWidth: 1,
          borderColor: Color.Main,
          borderRadius: 20,
          marginTop: scale(20),
          paddingHorizontal: moderateScale(15),
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
      />
      <CustomButton
        onPress={() => {
          toggleModal();
          console.log('modal Open');
        }}
        title="PAY"
        textStyle={{fontSize: scale(18), fontWeight: '700'}}
        containerStyle={{
          width: '85%',
          height: verticalScale(55),
          marginTop: scale(50),
          paddingHorizontal: 30,
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
            <CustomStarRating starSize={35} />
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
            textStyle={{fontSize: scale(13)}}
            containerStyle={{marginTop: scale(10), width: scale(150)}}
            title="Book Now"
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  Text: {
    color: Color.placeholderTextColor,
    fontSize: scale(17),
  },
  DateBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(20),
    marginBottom: scale(10),
  },
  Details: {
    color: Color.Black,
    fontWeight: '700',
    fontSize: scale(22),
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
    fontWeight: '700',
    fontSize: scale(22),
    marginHorizontal: scale(20),
    marginTop: scale(15),
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  ModalMainBox: {
    width: '100%',
    alignSelf: 'center',
    backgroundColor: Color.White,
    marginTop: scale(20),
    borderRadius: 20,
    // paddingTop: verticalScale(15),
    alignItems: 'center',
    paddingVertical: moderateScale(50),
    paddingHorizontal: moderateScale(30),
  },
  Modal_Long_Text: {
    fontSize: scale(14),
    color: Color.placeholderTextColor,
    paddingTop: verticalScale(10),
  },
  FeedBack: {
    fontSize: scale(22),
    color: Color.Main,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default ServiceDetail;
