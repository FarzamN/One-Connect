import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {moderateScale, scale} from 'react-native-size-matters';
import {Color} from '../../utils/Colors';
import {Font} from '../../utils/font';
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
const Item = ({item, onPress, borderColor, props}) => (
  <View style={[styles.mainBox, {borderColor}]}>
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
      <View style={{position: 'absolute', right: 0, top: scale(10)}}>
        <Image style={styles.userImg} source={item.img} />
      </View>
    </View>
    <TouchableOpacity onPress={onPress}>
      <Text
        style={{
          color: Color.Main,
          textAlign: 'center',
          fontSize: scale(22),
          fontFamily : Font.Roborto500,
          borderTopWidth: 1,
          borderColor: Color.borderColor,
          paddingVertical: moderateScale(3),
        }}>
        {props.select}
      </Text>
    </TouchableOpacity>
  </View>
);
const CustomVehicalCard = props => {
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({item}) => {
    const borderColor = item.id === selectedId ? Color.Main : Color.borderColor;

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        borderColor={borderColor}
        props={props}
      />
    );
  };
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      extraData={selectedId}
    />
    
  );
};

const styles = StyleSheet.create({
  TextOne: {
    fontSize: scale(16),
    fontFamily : Font.Lato700,
    color: Color.Black,
  },
  TextThree: {
    fontSize: scale(14),
    color: Color.placeholderTextColor,
    fontFamily : Font.Roborto400
  },
  mainBox: {
    borderWidth: 1,
    marginVertical: scale(8),
    width: '90%',
    alignSelf: 'center',
    borderRadius: 15,
    elevation:5,
    backgroundColor:Color.White
  },
  userImg: {
    width: scale(140),
    height: scale(110),
    resizeMode:'contain',

  },
});
export default CustomVehicalCard;
