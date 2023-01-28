import React from 'react';

import {StyleSheet, SafeAreaView} from 'react-native';
import BackAndName from '../../components/BackAndName';
import {Color} from '../../utils/Colors';
import CustomMechanicCard from '../../components/CardComponent/CustomMechanicCard';

const AvailableMechanics = ({navigation}) => {
  return (
    <SafeAreaView style={styles.Container}>
      <BackAndName
        onPress={() => navigation.goBack()}
        title={'Available Mechanics'}
        color={Color.Black}
        Menucolor={Color.White}
      />
      <CustomMechanicCard />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Color.White,
  },
});

export default AvailableMechanics;
