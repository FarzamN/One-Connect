import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {scale, verticalScale} from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {Color} from '../../utils/Colors';
import CustomInput from '../../components/CustomInput';
import {useForm} from 'react-hook-form';
import CustomButton from '../../components/CustomButton';
import { Font } from '../../utils/font';
const BankDetail = ({navigation}) => {
  const [index, setIndex] = useState(99);
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({mode: 'all'});
  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.BackBtnBox}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.5}
          style={styles.arrow}>
          <AntDesign name={'arrowleft'} size={25} color={Color.White} />
        </TouchableOpacity>
        <Text style={styles.font}>Bank Detail</Text>
        <View style={styles.Menu}>
          <Feather name={'menu'} size={30} color={Color.Main} />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{height:verticalScale(355)}}>
          <CustomInput
            onFocus={() => {
              setIndex(0);
            }}
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
            keyboardType="email-address"
            name="bank_name"
            rules={{
              required: 'email is required',
              value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
              message: 'Enter a valid email',
            }}
            placeholder="Name of the bank"
            placeholderTextColor={'#32323266'}
            placeholderStyle = {{fontFamily:Font.Lato400}}
          />
          <CustomInput
            onFocus={() => {
              setIndex(2);
            }}
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
            keyboardType="email-address"
            name="l_name"
            rules={{
              required: 'email is required',
              value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
              message: 'Enter a valid email',
            }}
            placeholder="IBAN/ACCOUNT Number"
            placeholderTextColor={'#32323266'}
          />
          <CustomInput
            onFocus={() => {
              setIndex(3);
            }}
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
            placeholder="Name of the account"
            placeholderTextColor={'#32323266'}
          />
          <CustomInput
            onFocus={() => {
              setIndex(4);
            }}
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
            keyboardType="email-address"
            name="phone_number"
            rules={{
              required: 'email is required',
              value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
              message: 'Enter a valid email',
            }}
            placeholder="Amount"
            placeholderTextColor={'#32323266'}
           
          />

          <CustomButton
            containerStyle={{width: '90%', marginTop: scale(25)}}
            title={'ADD'}
            
            
          />
        </View>

    
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  Container:{flex:1,backgroundColor:Color.White},
  
  BackBtnBox: {
    backgroundColor: Color.Main,
    padding: scale(15),
    height: verticalScale(80),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  font: {
    color: Color.White,
    fontSize: scale(18),
    fontWeight: '700',
    textTransform: 'capitalize',
  },
});
export default BankDetail;
