import React from 'react';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
import BackWithMenu from '../../components/BackWithMenu';
import CustomButton from '../../components/CustomButton';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import Map from '../../components/MapFolder/Map';
import Swiper from 'react-native-swiper';
import { Color } from '../../utils/Colors';
const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <BackWithMenu
        onPress={() => navigation.openDrawer()} />
      {/* <Map /> */}
      <CustomButton
        onPress={() => navigation.navigate('vehicalselection')}
        containerStyle={{ width: '90%', alignSelf: 'center' }}
        title={'Next'}
      />
      {/* <Swiper
        nextButton={
          <Text style={styles.buttonText}>
            <AntDesign name={'caretright'} />
          </Text>
        }
        prevButton={
          <Text style={styles.buttonText}>
            <AntDesign name={'caretleft'} />
          </Text>
        }
        style={styles.wrapper}
        showsPagination={false}
        showsButtons={true}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Color.White },

  wrapper: { width: '90%', alignSelf: 'center' },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  buttonText: {
    color: Color.Main,
  },
});

export default Home;
