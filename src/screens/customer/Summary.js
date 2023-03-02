import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {useForm} from 'react-hook-form';
import BackAndName from '../../components/BackAndName';
import CustomInput from '../../components/CustomInput';
import CustomStarRating from '../../components/CustomStarRating';
import {Color} from '../../utils/Colors';

const Summary = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({mode: 'all'});
  return (
    <SafeAreaView style={styles.Container}>
      <ScrollView>
        <BackAndName onPress={() => navigation.goBack()} title="Summaries" />
        <View style={styles.CardContainer}>
          <Text style={styles.Service}>SERVICE NAME</Text>
          <Text style={styles.Price}>$30.89</Text>
          <View style={styles.DateBox}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.Text}></Text>
              <Text style={styles.Num}></Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.Text}>Date :</Text>
              <Text style={styles.Num}>2022-1-09</Text>
            </View>
          </View>
        </View>
        <Text style={styles.CustomerID}>Mechanic ID Number : 1234567</Text>
        <Text style={styles.Details}>Details</Text>
        <View style={styles.DateBox}>
          <Text style={styles.ServiceText}>Service </Text>
          <Text style={styles.ServiceText}>Battery Service</Text>
        </View>
        <View style={styles.DateBox}>
          <Text style={styles.ServiceText}>Location </Text>
          <Text style={styles.ServiceText}>MS 3987, USA</Text>
        </View>
        <View style={styles.DateBox}>
          <Text style={styles.ServiceText}>Subtotal </Text>
          <Text style={styles.ServiceText}>$29.89</Text>
        </View>
        <View style={styles.DateBox}>
          <Text style={styles.ServiceText}>Fee </Text>
          <Text style={styles.ServiceText}>$2.00</Text>
        </View>
        <View style={styles.BottomBorder}></View>
        <View style={styles.DateBox}>
          <Text style={styles.Total}>Total</Text>
          <Text style={styles.Total}>$30.98</Text>
        </View>
        <View style={styles.BottomEndBorder}></View>
        <Text
          style={[
            styles.CustomerID,
            {textAlign: 'left', marginLeft: scale(20)},
          ]}>
          Feedback from Customer
        </Text>
        <View style={styles.StarBox}>
          <CustomStarRating starSize={30} />
        </View>
        <CustomInput
          style={{
            borderTopWidth: 0,
            borderRightWidth: 0,
            borderLeftWidth: 0,
            borderBottomWidth: 1,
            borderBottomColor: Color.borderColor,
          }}
          control={control}
          keyboardType="email-address"
          name="your_comment"
          rules={{
            required: 'email is required',
            value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            message: 'Enter a valid email',
          }}
          placeholder="Comment"
          placeholderTextColor={'#32323266'}
        />
        <View style={{height: 10}}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  CardContainer: {
    backgroundColor: '#F0F0F0',
    paddingTop: moderateScale(25),
    paddingBottom: moderateScale(10),
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: Color.Main,
    borderTopColor: Color.Main,
  },
  Service: {
    textAlign: 'center',
    color: Color.Black,
    fontSize: scale(18),
    fontWeight: '700',
  },
  Price: {
    textAlign: 'center',
    color: Color.Main,
    fontSize: scale(30),
    fontWeight: '700',
    paddingVertical: moderateScale(10),
  },
  Num: {
    color: Color.Main,
    fontSize: scale(16),
    fontWeight: '600',
  },
  Text: {
    color: Color.Black,
    fontSize: scale(16),
    fontWeight: '600',
  },
  DateBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(20),
    marginVertical: verticalScale(5),
  },
  Details: {
    color: Color.Black,
    fontWeight: '700',
    fontSize: scale(20),
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
    fontWeight: '600',
    fontSize: scale(20),
    marginHorizontal: scale(20),
    marginTop: scale(15),
  },
  ServiceText: {
    color: Color.placeholderTextColor,
    fontSize: scale(15),
  },
  CustomerID: {
    color: Color.Black,
    fontWeight: '700',
    fontSize: scale(18),
    marginTop: scale(20),
    textAlign: 'center',
  },
  StarBox: {
    width: '50%',
    alignSelf: 'center',
    marginTop: scale(10),
  },
});

export default Summary;
