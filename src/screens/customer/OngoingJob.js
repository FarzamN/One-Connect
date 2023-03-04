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
import { Font } from '../../utils/font';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Tyre service.',
    type: 'Vehicle Type : Car',
    Timing: '03:04:20',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Battery service.',
    type: 'Vehicle Type : Car',
    Timing: '03:05:20',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Tyre service.',
    type: 'Vehicle Type : Car',
    Timing: '03:10:10',
  },
  {
    id: '58694a0f-3da1-471f-bd96-1457171e29d73',
    title: 'Battery service.',
    type: 'Vehicle Type : Car',
    Timing: '03:15:10',
  },
];

const OngoingJob = ({navigation}) => {
  const Item = ({title, Timing, type}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('progress')}
      style={styles.CardBox}>
      <View style={{width: '80%'}}>
        <Text style={styles.Service}>{title}</Text>
        <Text style={styles.Service}>{type}</Text>
        <Text style={styles.Timing}>{Timing}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.Container}>
      <BackAndName onPress={() => navigation.goBack()} title="Ongoing Jobs" />
      <FlatList
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        data={DATA}
        renderItem={({item}) => (
          <Item title={item.title} Timing={item.Timing} type={item.type} />
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
    marginTop:scale(5)
  },
  Service: {
    fontSize: scale(17),
    color: Color.Black,
    lineHeight: 22,
    fontFamily:Font.Lato400
  },

  Timing: {
    fontSize: scale(18),
    color: Color.Main,
    fontFamily:Font.Lato400,
    lineHeight:25
  },
});
export default OngoingJob;
