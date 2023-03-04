import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Color} from '../../utils/Colors';
import {moderateScale, scale} from 'react-native-size-matters';
import { Font } from '../../utils/font';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Battery service mechanic accepted',
    Timing: '03:04:20',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Battery service mechanic started the trip to your location.',
    Timing: '03:05:20',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Battery service mechanic started the job.',
    Timing: '03:10:10',
  },
  {
    id: '58694a0f-3da1-471f-bd96-1457171e29d73',
    title: 'Battery service mechanic started the job.',
    Timing: '03:15:10',
  },
];

const LiveTrackingCard = props => {
  const Item = ({title, Timing}) => (
    <TouchableOpacity onPress={props.onPress} style={styles.CardBox}>
      <View style={{width: '80%'}}>
        <Text style={styles.Service}>{title}</Text>
        <Text style={styles.Timing}>{Timing}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <FlatList
      scrollEnabled={true}
      showsVerticalScrollIndicator={false}
      data={DATA}
      renderItem={({item}) => <Item title={item.title} Timing={item.Timing} />}
      keyExtractor={item => item.id}
    />
  );
};

export default LiveTrackingCard;

const styles = StyleSheet.create({
  CardBox: {
    backgroundColor: '#f4f4f4',
    borderRadius: 20,
    width: '85%',
    alignSelf: 'center',
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(30),
    elevation: 3,
    marginBottom: scale(10),
  },
  Service: {
    fontSize: scale(17),
    fontFamily:Font.Lato400,
    color: Color.Black,
    lineHeight: 22,
  },

  Timing: {
    fontSize: scale(18),
    color: Color.Main,
    lineHeight:30,
    fontFamily:Font.Lato400
  },
});
