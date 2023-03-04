import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  PermissionsAndroid,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Marker} from 'react-native-maps';
import MapView, {PROVIDER_GOOGLE, Callout} from 'react-native-maps';
import CustomButton from '../../components/CustomButton';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import BackWithMenu from '../../components/BackWithMenu';
import GooglePlacesInput from '../../components/MapFolder/GooglePlacesInput';
import BottomTab from '../../components/BottomTab';
import {Color} from '../../utils/Colors';
import {Font} from '../../utils/font';

const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Cool Photo App Camera Permission',
        message:
          'Cool Photo App needs access to your camera ' +
          'so you can take awesome pictures.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the camera');
    } else {
      console.log('Camera permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

const Home = ({navigation}) => {
  const [Pin, setPin] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
  });
  return (
    <SafeAreaView>
      <View
        style={{
          position: 'absolute',
          top: 0,
          alignSelf: 'center',
          width: '100%',
        }}>
        <BackWithMenu
          onPress_back={() => navigation.navigate('notification')}
          onPress={() => navigation.openDrawer()}
        />
        <GooglePlacesInput
          textStyle={{color: Color.White,fontFamily:Font.Lato700}}
          style={styles.GooglePlacesInput}
          placeholder="Location"
        />
      </View>
      <MapView
        onPress={requestCameraPermission}
        style={styles.mapStyle}
        showsUserLocation={false}
        zoomEnabled={true}
        // zoomControlEnabled={true}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={Pin}
          draggable={true}
          pinColor="red"
          onDragStart={e => {
            console.log('helo map', e.nativeEvent.coordinate);
          }}
          onDragEnd={e => {
            setPin({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            });
            // console.log('helo map');
          }}></Marker>
      </MapView>
      <View
        style={{
          position: 'absolute',
          bottom: scale(20),
          alignSelf: 'center',
          width: '100%',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('towlocation');
          }}
          style={{
            width: 80,
            alignSelf: 'flex-end',
            marginBottom: scale(8),
            marginHorizontal: scale(15),
          }}>
          <Image
            style={styles.icon}
            source={require('../../assets/Images/location.png')}
          />
        </TouchableOpacity>
        <CustomButton
          containerStyle={{
            width: '90%',
            paddingVertical: moderateScale(15),
            marginVertical: scale(10),
          }}
          onPress={() => navigation.navigate('vehicalselection')}
          title="Next"
        />
        <BottomTab />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  mapStyle: {
    height: '100%',
    width: '100%',
    zIndex: -17,
  },
  GooglePlacesInput: {
    width: '85%',
    marginHorizontal: scale(25),
    marginTop: scale(20),
    color: Color.Black,
  },

  icon: {
    marginHorizontal: scale(20),
    alignSelf: 'flex-end',
    height: verticalScale(40),
    width: verticalScale(40),
    resizeMode: 'contain',
  },
});
export default Home;
