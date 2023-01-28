import React, {useState} from 'react';
import {StyleSheet, Text, View, PermissionsAndroid} from 'react-native';
import {Marker} from 'react-native-maps';
import MapView, {PROVIDER_GOOGLE, Callout} from 'react-native-maps';
import GooglePlacesInput from './GooglePlacesInput';
import {Color} from '../../utils/Colors';

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
const Map = () => {
  const [Pin, setPin] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
  });
  return (
    <View style={styles.MainContainer}>
      <View style={styles.InputContainer}>
        <GooglePlacesInput
          style={styles.input}
          placeholder="Search The location"
        />
      </View>
      <MapView
        onPress={requestCameraPermission}
        style={styles.mapStyle}
        showsUserLocation={false}
        zoomEnabled={true}
        zoomControlEnabled={true}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 9.0922,
          longitudeDelta: 9.0421,
        }}>
        <Marker
          coordinate={Pin}
          draggable={true}
          pinColor={Color.Main}
          onDragStart={e => {
            console.log('hello map', e.nativeEvent.coordinate);
          }}
          onDragEnd={e => {
            setPin({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            });
            console.log('hell0 map');
          }}>
          {/* <Image source={require('../../assets/Images/car2.png')} /> */}
        </Marker>
      </MapView>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({});
