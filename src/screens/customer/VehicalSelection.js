import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import BackAndName from '../../components/BackAndName';
import CustomButton from '../../components/CustomButton';
import {scale} from 'react-native-size-matters';
import {Color} from '../../utils/Colors';
import {Font} from '../../utils/font';
import CustomVehicalCard from '../../components/CardComponent/CustomVehicalCard';

const VehicalSelection = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <BackAndName
        onPress={() => navigation.goBack()}
        title={'Vehicle Selection'}
        color={Color.Black}
        Menucolor={Color.White}
      />
      <CustomVehicalCard select="Select" />
      <CustomButton
        onPress={() => navigation.navigate('availablemechanics')}
        containerStyle={{
          width: '90%',
          marginBottom: scale(10),
          marginTop: 0,
          // backgroundColor: 'pink',
        }}
        title={'Next'}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.White,
  },
});
export default VehicalSelection;
