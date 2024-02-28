import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {moderateScale, scale} from 'react-native-size-matters';
import {Alert} from 'react-native/Libraries/Alert/Alert';
import {Color} from '../../utils/Colors';
import {Font} from '../../utils/font';
import CustomModal from '../CustomModal';
import CustomStarRating from '../CustomStarRating';
import { useNavigation } from '@react-navigation/native';

const DATA = [
  {
    id: '1',
    Name: 'Kal-El ',
    Km: '1 km',
    Price: '$20',
    img: require('../../assets/Images/dpone.png'),
  },
  {
    id: '2',
    Name: 'Diana Prince',
    Km: '1 Km',
    Price: '$20',
    img: require('../../assets/Images/dptwo.png'),
  },
  {
    id: '3',
    Name: 'Bruce Wayne',
    Km: '1 Km',
    Price: '$20',
    img: require('../../assets/Images/dpthree.png'),
  },
  {
    id: '4',
    Name: 'Barry Allen',
    Km: '1 Km',
    Price: '$20',
    img: require('../../assets/Images/dpfour.png'),
  },
  {
    id: '5',
    Name: 'Hal Jordan',
    Km: '1 Km',
    Price: '$20',
    img: require('../../assets/Images/dpfive.png'),
  },
  {
    id: '6',
    Name: 'Arthur Curry',
    Km: '1 Km',
    Price: '$20',
    img: require('../../assets/Images/dpsix.png'),
  },
];
const Item = ({
  item,
  onPress,
  backgroundColor,
  textColor,
  onPressMore,
  props,
}) => (
  <View style={styles.mainBox}>
    <View
      style={{
        flexDirection: 'row',
        paddingVertical: moderateScale(20),
      }}>
      <View style={{width: '50%', alignItems: 'center'}}>
        <Image style={styles.userImg} source={item.img} />
      </View>
      <View style={{width: '50%', paddingHorizontal: moderateScale(30)}}>
        <Text style={styles.Text}>{item.Name}</Text>
        <Text style={styles.Text}>{item.Km}</Text>
        <Text style={styles.Text}>{item.Price}</Text>
        <View style={{marginTop: scale(5)}}>
          <CustomStarRating starSize={20} />
        </View>
      </View>
    </View>
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity
        onPress={onPressMore}
        style={{
          width: '50%',
          borderRightWidth: 1,
          borderRightColor: Color.borderColor,
        }}>
        <Text style={styles.btnText}>More Info</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          {
            width: '50%',
            borderRightWidth: 1,
            borderRightColor: Color.borderColor,
          },
          {backgroundColor},
        ]}
        onPress={onPress}>
        <Text style={[styles.btnText, {color: textColor}]}>Book Now</Text>
      </TouchableOpacity>
    </View>
  </View>
);
const CustomMechanicCard = () => {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState();
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? Color.Main : Color.White;
    const color = item.id === selectedId ? Color.White : Color.Main;

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
        onPressMore={() => {
          setShowModal(toggleModal());
          // console.log('modal Open');
        }}
      />
    );
  };
  return (
    <>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
      {showModal == false ? (
        <CustomModal
          Long_Text="Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor "
          Name="John Elliot"
          Modal_Text="Profile"
          isVisible={isModalVisible}
          onBackdropPress={() => setModalVisible(false)}
          onPress ={()=>navigation.navigate('progress')}
        />
      ) : (
        setShowModal(false)
      )}
    </>
  );
};

const styles = StyleSheet.create({
  mainBox: {
    elevation: 3,
    backgroundColor: Color.White,
    marginVertical: scale(8),
    width: '90%',
    alignSelf: 'center',
  },
  userImg: {
    width: scale(80),
    height: scale(80),
  },
  Text: {
    fontSize: scale(16),
    color: Color.Black,
    lineHeight: 30,
    fontFamily:Font.Roborto700
  },
  btnText: {
    color: Color.Main,
    fontSize: scale(22),
    fontFamily:Font.Roborto500,
    borderTopWidth: 1,
    borderColor: Color.borderColor,
    paddingVertical: moderateScale(5),
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});
export default CustomMechanicCard;
