import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import BackAndName from '../../components/BackAndName';

const Transactions = ({navigation}) => {
  return (
    <SafeAreaView style={styles.Container}>
      <BackAndName onPress={() => navigation.goBack()} title="Transactions" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Transactions;
