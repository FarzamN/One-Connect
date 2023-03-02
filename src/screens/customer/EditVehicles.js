import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {scale} from 'react-native-size-matters';
import BackAndName from '../../components/BackAndName';
import {Color} from '../../utils/Colors';

import CustomVehiclesBox from '../../components/CustomVehiclesBox';
import CustomButton from '../../components/CustomButton';

const EditVehicles = ({navigation}) => {
  return (
    <SafeAreaView style={styles.Container}>
      <BackAndName onPress={() => navigation.goBack()} title="Edit Vehicles" />

      <CustomVehiclesBox
        New_Vehicle="Edit Vehicle"
        LongText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor "
      />

      <CustomButton
        title="Save changes"
        textStyle={{fontSize: scale(16)}}
        containerStyle={{width: '90%', marginTop: scale(25)}}
      />
      <CustomButton
        title="DELETE VEHICLE"
        textStyle={{fontSize: scale(16)}}
        containerStyle={{width: '90%', marginTop: scale(25)}}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Color.White,
  },
});

export default EditVehicles;
