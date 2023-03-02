import React from 'react';
import {StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import {scale} from 'react-native-size-matters';
import BackAndName from '../../components/BackAndName';
import {Color} from '../../utils/Colors';

import CustomVehiclesBox from '../../components/CustomVehiclesBox';
import CustomButton from '../../components/CustomButton';

const AddVehicles = ({navigation}) => {
  return (
    <SafeAreaView style={styles.Container}>
      <BackAndName onPress={() => navigation.goBack()} title="Add Vehicles" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <CustomVehiclesBox
          New_Vehicle="Add New Vehicle"
          LongText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor "
        />
        <CustomButton
          title="Add Vehicles"
          textStyle={{fontSize: scale(16)}}
          containerStyle={{width: '90%', marginTop: scale(25)}}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Color.White,
  },
});

export default AddVehicles;
