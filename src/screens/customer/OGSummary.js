import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {moderateScale, scale} from 'react-native-size-matters';
import {Color} from '../../utils/Colors';
import BackAndName from '../../components/BackAndName';
import {Font} from '../../utils/font';
import { useNavigation } from '@react-navigation/native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Tyre service.',
    type: 'Vehicle Type : Car',
    Date: '2022-05-02',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Battery service.',
    type: 'Vehicle Type : Car',
    Date: '2022-05-03',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Tyre service.',
    type: 'Vehicle Type : Car',
    Date: '2022-05-04',
  },
  {
    id: '58694a0f-3da1-471f-bd96-1457171e29d73',
    title: 'Battery service.',
    type: 'Vehicle Type : Car',
    Date: '2022-05-05',
  },
];
const OGSummary = () => {
  const navigation = useNavigation();
  const Item = ({title, Date, type,onPress}) => (
    <TouchableOpacity 
    onPress={() => navigation.navigate('summary')}
    style={styles.CardBox}>
      <View style={{width: '80%'}}>
        <Text style={styles.Service}>{title}</Text>
        <Text style={styles.Service}>{type}</Text>
        <Text style={styles.Date}>Date : {Date}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.Container}>
      <BackAndName onPress={() => navigation.goBack()} title="Summaries" />
      <FlatList
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        data={DATA}
        renderItem={({item}) => (
          <Item title={item.title} Date={item.Date} type={item.type} />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  CardBox: {
    backgroundColor: '#f4f4f4',
    borderRadius: 20,
    width: '85%',
    alignSelf: 'center',
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(15),
    elevation: 3,
    marginBottom: scale(10),
    marginTop: scale(5),
  },
  Service: {
    fontSize: scale(17),
    color: Color.Black,
    lineHeight: 22,
    fontFamily: Font.Lato400,
  },

  Date: {
    fontSize: scale(17),
    color: Color.Main,
    fontFamily: Font.Lato400,
    lineHeight: 25,
  },
});
export default OGSummary;
