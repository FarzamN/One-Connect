import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Transaction from '../Transaction';

const AllTransaction = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Transaction
        FirstText={'Money Recieved'}
        Date={'07/07/2022'}
        Amount={'+$1,056,000'}
        color={{color: '#17D85C'}}
      />
      <Transaction
        FirstText={'Petroling Service'}
        Date={'07/07/2022'}
        Amount={'-$7,000,000'}
        color={{color: '#FF6854'}}
      />
      <Transaction
        FirstText={'Patroling Service'}
        Date={'07/07/2022'}
        Amount={'-$7,000,000'}
        color={{color: '#17D85C'}}
      />
      <Transaction
        FirstText={'Patroling Service'}
        Date={'07/07/2022'}
        Amount={'-$7,000,000'}
        color={{color: '#FF6854'}}
      />
      <Transaction
        FirstText={'Patroling Service'}
        Date={'07/07/2022'}
        Amount={'-$7,000,000'}
        color={{color: '#17D85C'}}
      />
      <Transaction
        FirstText={'Patroling Service'}
        Date={'07/07/2022'}
        Amount={'-$7,000,000'}
        color={{color: '#FF6854'}}
      />
      <Transaction
        FirstText={'Patroling Service'}
        Date={'07/07/2022'}
        Amount={'-$7,000,000'}
        color={{color: '#17D85C'}}
      />
      <Transaction
        FirstText={'Patroling Service'}
        Date={'07/07/2022'}
        Amount={'-$7,000,000'}
        color={{color: '#FF6854'}}
      />
      <Transaction
        FirstText={'Patroling Service'}
        Date={'07/07/2022'}
        Amount={'-$7,000,000'}
        color={{color: '#17D85C'}}
      />
      <Transaction
        FirstText={'Patroling Service'}
        Date={'07/07/2022'}
        Amount={'-$7,000,000'}
        color={{color: '#FF6854'}}
      />
      <Transaction
        FirstText={'Patroling Service'}
        Date={'07/07/2022'}
        Amount={'-$7,000,000'}
        color={{color: '#17D85C'}}
      />
      <Transaction
        FirstText={'Patroling Service'}
        Date={'07/07/2022'}
        Amount={'-$7,000,000'}
        color={{color: '#FF6854'}}
      />
      <Transaction
        FirstText={'Patroling Service'}
        Date={'07/07/2022'}
        Amount={'-$7,000,000'}
        color={{color: '#17D85C'}}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({});
export default AllTransaction;
