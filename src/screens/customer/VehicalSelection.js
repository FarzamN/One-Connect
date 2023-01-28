import React, {useState} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import BackAndName from '../../components/BackAndName';
import CustomButton from '../../components/CustomButton';
import {scale} from 'react-native-size-matters';
import {Color} from '../../utils/Colors';
import CustomVehicalCard from '../../components/CardComponent/CustomVehicalCard';

const VehicalSelection = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <BackAndName
        title={'Vehicle Selection'}
        color={Color.Black}
        Menucolor={Color.White}
      />
      <CustomVehicalCard />
      <CustomButton
        onPress={() => navigation.navigate('availablemechanics')}
        containerStyle={{
          width: '90%',
          marginBottom: scale(10),
          marginTop: 0,
          backgroundColor: 'pink',
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
