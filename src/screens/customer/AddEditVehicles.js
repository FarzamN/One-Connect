import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import BackAndName from '../../components/BackAndName';
import {Color} from '../../utils/Colors';

const DATA = [
  {
    id: '1',
    Name: 'Desdamona',
    Car: 'MH 04 CD 1234',
    Reg: 'Reg ID: 15329875',
    img: require('../../assets/Images/car.png'),
  },
  {
    id: '2',
    Name: 'Baleno',
    Car: 'MC 20 FR 1546',
    Reg: 'Reg ID: 15438293',
    img: require('../../assets/Images/car.png'),
  },
  {
    id: '3',
    Name: 'Eleanor',
    Car: 'HM 86 TBH 1977',
    Reg: 'Reg ID: 14285850',
    img: require('../../assets/Images/car.png'),
  },
  {
    id: '4',
    Name: 'Desdamona',
    Car: 'MH 04 CD 1234',
    Reg: 'Reg ID: 15329875',
    img: require('../../assets/Images/car.png'),
  },
  {
    id: '5',
    Name: 'Baleno',
    Car: 'MC 20 FR 1546',
    Reg: 'Reg ID: 15438293',
    img: require('../../assets/Images/car.png'),
  },
  {
    id: '6',
    Name: 'Eleanor',
    Car: 'HM 86 TBH 1977',
    Reg: 'Reg ID: 14285850',
    img: require('../../assets/Images/car.png'),
  },
];
const Item = ({item, onPress}) => (
  <View style={styles.mainBox}>
    <View
      style={{
        flexDirection: 'row',
        paddingVertical: moderateScale(30),
      }}>
      <View style={{paddingHorizontal: moderateScale(20)}}>
        <Text style={styles.TextOne}>{item.Name}</Text>
        <Text style={styles.TextOne}>{item.Car}</Text>
        <Text style={styles.TextThree}>{item.Reg}</Text>
      </View>
      <View style={{position: 'absolute', right: 0, top: scale(20)}}>
        <Image style={styles.userImg} source={item.img} />
      </View>
    </View>
    <TouchableOpacity onPress={onPress}>
      <Text
        style={{
          color: Color.Main,
          textAlign: 'center',
          fontSize: scale(22),
          fontWeight: '700',
          borderTopWidth: 1,
          borderColor: Color.borderColor,
          paddingVertical: moderateScale(3),
        }}>
        Edit
      </Text>
    </TouchableOpacity>
  </View>
);
const AddEditVehicles = ({navigation}) => {
  const renderItem = ({item}) => {
    return (
      <Item item={item} onPress={() => navigation.navigate('editvehicles')} />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <BackAndName onPress={() => navigation.goBack()} title="Vehicles" />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        // extraData={selectedId}
      />
      <View style={styles.AddBox}>
        <Text style={styles.Add}>Add Another Vehicle</Text>
        <View style={styles.row}>
          <TextInput
            style={{color: Color.Black}}
            placeholder="Registration ID..."
            placeholderTextColor={Color.placeholderTextColor}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate('addvehicles')}
            style={styles.AddBtnBox}>
            <Text style={styles.AddBtn}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.White,
  },
  AddBox: {
    marginHorizontal: scale(20),
  },
  Add: {
    color: Color.Black,
    fontSize: scale(15),
    fontWeight: '600',
  },

  row: {
    flexDirection: 'row',
    height: verticalScale(50),
    margin: scale(10),
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Color.borderColor,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: moderateScale(20),
  },
  AddBtn: {
    color: Color.Main,
  },
  AddBtnBox: {
    borderWidth: 1,
    borderColor: Color.Main,
    borderRadius: 10,
    width: scale(50),
    height: scale(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextOne: {
    fontSize: scale(16),
    fontWeight: '600',
    color: Color.Black,
  },
  TextThree: {
    fontSize: scale(15),
    color: Color.placeholderTextColor,
  },
  mainBox: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: Color.White,
    marginVertical: scale(8),
    width: '90%',
    alignSelf: 'center',
    borderRadius: 15,
  },
  userImg: {
    width: scale(140),
    height: scale(100),
    resizeMode:'contain',
    

  },
});

export default AddEditVehicles;
