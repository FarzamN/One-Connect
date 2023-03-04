import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import BackAndName from '../../components/BackAndName';
import LiveTrackingCard from '../../components/CardComponent/LiveTrackingCard';
import CustomStarRating from '../../components/CustomStarRating';
import {Color} from '../../utils/Colors';
import { Font } from '../../utils/font';

const Progress = ({navigation}) => {
  return (
    <SafeAreaView style={styles.continer}>
      <BackAndName onPress={() => navigation.goBack()} title="Progress" />

      <View style={styles.CardContainer}>
        <Image
          style={styles.UserDp}
          source={require('../../assets/Images/dpone.png')}
        />
        <View style={styles.CardBox}>
          <Text style={styles.Text}>Name of Mechanic</Text>
          <Text style={styles.Text}>Location</Text>
          <View style={{width: '60%',paddingVertical:verticalScale(5)}}>
            <CustomStarRating starSize={18} />
          </View>
        </View>
      </View>
      <ScrollView>
        <View style={styles.Live_Tracking_Box}>
          <Text style={styles.Live_Tracking_Text}>Live Tracking</Text>
          <LiveTrackingCard onPress={() => navigation.navigate('bill')} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  continer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  CardContainer: {
    flexDirection: 'row',
    backgroundColor: '#F0F0F0',
    paddingVertical: moderateScale(30),
    alignItems: 'center',
    elevation: 3,
  },
  UserDp: {
    width: scale(80),
    height: scale(80),
    marginLeft: scale(20),
  },
  CardBox: {
    paddingHorizontal: moderateScale(20),
  },
  Text: {
    color: Color.placeholderTextColor,
    fontSize: scale(15),
    lineHeight: 25,
    fontFamily: Font.Roborto700,
  },
  Live_Tracking_Box: {
    marginTop: scale(20),
  },
  Live_Tracking_Text: {
    color: Color.Main,
    fontFamily: Font.Lato700,
    fontSize: scale(22),
    marginLeft: scale(20),
    marginBottom: scale(10),
  },
});

export default Progress;
