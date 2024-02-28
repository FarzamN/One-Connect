import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';

import {Color} from '../../utils/Colors';
import {Font} from '../../utils/font';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    task: 'Task 1',
    Date: '1/1/2022',
    price: '$50',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    task: 'Task 2',
    Date: '1/1/2022',
    price: '$50',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    task: 'Task 3',
    Date: '1/1/2022',
    price: '$50',
  },
];
const Item = ({task, Date, price}) => (
  <View style={styles.PriceCardBox}>
    <View style={{flexDirection: 'row'}}>
      <View
        style={{
          backgroundColor: '#36C2CF',
          aspectRatio: 1 / 1,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 100,
        }}>
        <Fontisto
          style={{
            backgroundColor: '#D7F3F5',
            width: 20,
            height: 20,
            borderRadius: 100,
            textAlign: 'center',
            textAlignVertical: 'center',
          }}
          name={'dollar'}
          color={'#36C2CF'}
        />
      </View>
      <View style={{marginHorizontal: 10}}>
        <Text
          style={{
            color: Color.greyfont,
            fontSize: scale(15),
            fontFamily: Font.Poppins600,
          }}>
          {task}
        </Text>
        <Text
          style={{
            color: Color.greyfont,
            fontSize: scale(12),
            fontFamily:Font.Poppins400
          }}>
          {Date}
        </Text>
      </View>
    </View>
    <View>
      <Text
        style={{
          color: Color.greyfont,
          fontSize: scale(18),
          marginTop: scale(10),
          fontFamily:Font.Poppins400
          
        }}>
        {price}
      </Text>
    </View>
  </View>
);
const Wallet = ({navigation}) => {
  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.BackBtnBox}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.5}
          style={styles.arrow}>
          <AntDesign name={'arrowleft'} size={25} color={Color.White} />
        </TouchableOpacity>
        <Text style={styles.font}>Wallet</Text>
        <View style={styles.Menu}>
          <Feather name={'menu'} size={30} color={Color.Main} />
        </View>
      </View>
      <View style={styles.upperContainer}></View>
      <View style={styles.cardContainer}>
        <Text style={styles.myWalletText}>My Wallet</Text>
        <View style={styles.totalBalanceContainer}>
          <View style={styles.iconContainer}>
            <Ionicons name="wallet-outline" size={25} color={Color.White} />
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.balanceText}>Total Balance</Text>
            <Text style={styles.balanceText}>$10</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('bankdetail')}
          activeOpacity={0.7}
          style={styles.containerStyle}>
          <Text style={styles.Btnfont}>Add Money</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: moderateScale(20),
          marginTop: scale(20),
          alignItems: 'center',
        }}>
        <Text style={styles.History}> Transactions History</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('maintransactions')}>
          <Text style={styles.Show_all}>Show all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <Item task={item.task} Date={item.Date} price={item.price} />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {flex: 1, backgroundColor: Color.White},
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
    fontFamily: Font.Lato700,
    textTransform: 'capitalize',
  },
  cardContainer: {
    backgroundColor: Color.White,
    marginHorizontal: 20,
    marginTop: '-15%',
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(25),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  myWalletText: {
    color: '#000',
    fontSize: scale(16),
    fontFamily: Font.Poppins500,
    marginBottom: scale(20),
  },
  upperContainer: {
    backgroundColor: Color.Main,
    height: verticalScale(50),
  },
  WalletBox: {
    width: '90%',
    backgroundColor: Color.White,
    alignSelf: 'center',
    height: 100,
    position: 'absolute',
    top: scale(50),
    padding: 20,
  },
  totalBalanceContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  iconContainer: {
    backgroundColor: '#F46363',
    borderRadius: 100,
    height: 50,
    aspectRatio: 1 / 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  priceContainer: {
    paddingLeft: 10,
  },
  balanceText: {
    color: Color.Main,
    fontSize: 22,
    lineHeight: 25,
    fontFamily: Font.Poppins600,
  },
  containerStyle: {
    alignSelf: 'center',
    width: '90%',
    padding: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginTop: scale(15),
    backgroundColor: '#68D043',
  },

  Btnfont: {
    color: '#fff',
    fontSize: scale(15),
    textTransform: 'capitalize',
    fontFamily:Font.Poppins600
  },
  History: {
    color: '#414D5B',
    fontSize: scale(20),
    fontFamily:Font.Poppins400
  },
  Show_all: {
    color: Color.Main,
    fontSize: scale(14),
    fontFamily: Font.Inter400,
  },
  PriceCardBox: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 15,
    backgroundColor: '#FFEEEE',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(30),
    paddingVertical: moderateScale(20),
    marginTop: scale(10),
    // alignItems: 'center',
  },
});

export default Wallet;
