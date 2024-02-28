import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';

const Validation = props => {
  return (
    <Text style={[styles.error, props.REStyle]}>{'* ' + props.title} </Text>
  );
};

export default Validation;

const styles = StyleSheet.create({
  error: {
    color: 'red',
    fontSize: 12,
    marginBottom: scale(10),
    marginHorizontal: scale(8),
  },
});
