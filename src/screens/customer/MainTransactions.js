import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {moderateScale, verticalScale, scale} from 'react-native-size-matters';
import BackAndName from '../../components/BackAndName';
import MainTopnavigator from '../../components/MainTopnavigator';
import {Color} from '../../utils/Colors';

import AllTransaction from './TransactionsFolder/TransactionAll';
import TransactionCredit from './TransactionsFolder/TransactionCredit';
import TransactionDebit from './TransactionsFolder/TransactionDebit';

const MainTransaction = ({navigation}) => {
  const [btn1, setBtn1] = useState(true);
  const [btn2, setBtn2] = useState(false);
  const [btn3, setBtn3] = useState(false);

  const AllOne = () => {
    setBtn1(true);
    setBtn2(false);
    setBtn3(false);
  };
  const CreditTwo = () => {
    setBtn2(true);
    setBtn1(false);
    setBtn3(false);
  };
  const DebitThree = () => {
    setBtn3(true);
    setBtn1(false);
    setBtn2(false);
  };
  return (
    <View style={styles.MainContainer}>
      <BackAndName onPress={() => navigation.goBack()} title={'Transaction'} />
      <MainTopnavigator
        All={AllOne}
        AllText={{
          color: btn1 ? 'white' : 'black',
        }}
        AllBG={{
          backgroundColor: btn1 ? Color.Main : '#D7D7D7',
        }}
        Credit={CreditTwo}
        CreditText={{
          color: btn2 ? 'white' : 'black',
        }}
        BGCOLOR={{
          backgroundColor: btn2 ? Color.Main : '#D7D7D7',
        }}
        Debit={DebitThree}
        DebitText={{
          color: btn3 ? 'white' : 'black',
        }}
        DebitBG={{
          backgroundColor: btn3 ? Color.Main : '#D7D7D7',
        }}
        NameOne={'all'}
        NameTwo={'credit'}
        NameThree={'debit'}
      />

      <View style={{paddingVertical: scale(10), flex: 1}}>
        {btn1 && <AllTransaction />}
        {btn2 && <TransactionCredit />}
        {btn3 && <TransactionDebit />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingHorizontal: moderateScale(20),
    paddingTop: verticalScale(15),
    backgroundColor: 'white',
  },
});
export default MainTransaction;
