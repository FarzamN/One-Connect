import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import { Color } from '../../utils/Colors';
import { Font } from '../../utils/font';

const Transaction = props => {
  return (
    <View style={styles.TransactionsContainer}>
      <View style={styles.BoxOne}>
        <Text style={styles.MRText}>{props.FirstText}</Text>
        <Text style={styles.Texts}>Description</Text>
        <Text style={styles.Texts}>{props.Date}</Text>
      </View>

      <View style={styles.BoxTwo}>
        <Text style={[styles.income, props.color]}>{props.Amount}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  TransactionsContainer: {
    height: verticalScale(70),
    width: '100%',
    backgroundColor: '#EFF3FA',
    borderRadius: 16,
    borderWidth: 1.4,
    borderColor: '#EFF3FA',
    flexDirection: 'row',
    marginVertical: 10,
  },
  BoxOne: {
    width: '50%',
    height: '100%',
    borderRadius: 12,
    justifyContent: 'center',
    paddingHorizontal: moderateScale(20),
  },
  Texts: {
    fontSize: 12,
    color: 'black',
    opacity: 0.6,
    fontFamily: Font.Inter400
  },
  MRText: {
    fontSize: 12,
    color: Color.Main,
    fontStyle: 'normal',
    fontFamily: Font.Inter500,
  },
  BoxTwo: {
    width: '50%',
    height: '100%',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: moderateScale(15),
  },
  income: {
    color: '#17D85C',
    fontStyle: 'normal',
    fontSize: moderateScale(16),
    fontFamily:Font.Lato700,
    flexWrap: 'wrap',
  },
});
export default Transaction;
