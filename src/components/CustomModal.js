import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Modal from 'react-native-modal';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
import CustomStarRating from './CustomStarRating';
import {Color} from '../utils/Colors';
import {Font} from '../utils/font';
import CustomButton from './CustomButton';

const CustomModal = props => {
  return (
    <Modal onBackdropPress={props.onBackdropPress} isVisible={props.isVisible}>
      <View style={[styles.ModalMainBox, props.ModalMainBox]}>
        <Text style={[styles.Modal_Text, props.Modal_Text_Restyle]}>
          {props.Modal_Text}
        </Text>
        <Image
          style={styles.image}
          source={require('../assets/Images/dpone.png')}
        />
        <Text style={[styles.Modal_Name, props.Modal_Name_Restyle]}>
          {props.Name}
        </Text>
        <View
          style={{
            width: '80%',
            alignSelf: 'center',
            marginTop: scale(10),
          }}>
          <CustomStarRating starSize={35} />
        </View>
        <Text style={styles.Details}>Details</Text>
        <Text style={[styles.Modal_Long_Text, props.Modal_Long_Text_Restyle]}>
          {props.Long_Text}
        </Text>
        <CustomButton
          containerStyle={{marginTop: scale(30), width: '100%'}}
          title="Book Now"
          onPress = {props.onPress} 
         />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  ModalMainBox: {
    width: '100%',
    alignSelf: 'center',
    backgroundColor: Color.White,
    marginTop: scale(20),
    borderRadius: 20,
    paddingVertical: moderateScale(50),
    paddingHorizontal: moderateScale(30),
  },
  Modal_Text: {
    fontSize: scale(25),
    color: Color.Black,
    fontFamily:Font.Lato700,
    textAlign: 'center',
  },
  Modal_Name: {
    fontSize: scale(30),
    color: Color.Black,
    fontFamily: Font.Lato700,
    textAlign: 'center',
  },
  Details: {
    fontSize: scale(20),
    color: Color.Black,
    fontFamily: Font.Poppins700,
    textAlign: 'center',
  },
  Modal_Long_Text: {
    fontSize: scale(13),
    color: Color.placeholderTextColor,
    paddingTop: verticalScale(10),
    textAlign: 'center',
    fontFamily:Font.Lato400
  },
  image: {
    width: scale(130),
    height: scale(130),
    marginVertical: scale(20),
    alignSelf: 'center',
  },
});

export default CustomModal;
