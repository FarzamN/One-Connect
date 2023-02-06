import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

import AntDesign from 'react-native-vector-icons/AntDesign';

import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import Modal from 'react-native-modal';
import {
  launchCamera,
  launchImageLibrary,
  ImagePicker,
} from 'react-native-image-picker';
import {Color} from '../../utils/Colors';

const WithCamera = () => {
  const [proimg, setproimg] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);
  const [saveimage, setsaveimage] = useState();
  const [show, setShow] = useState(true);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'App Gallery Permission',
          message: 'App needs access to your gallery ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted == PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
        toggleModal();
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const photosave = () => {
    let options = {
      storageOptions: {
        mediaType: 'photo',
        path: 'image',
        includeExtra: true,
      },
      selectionLimit: 1,
    };

    launchImageLibrary(options, res => {
      if (res.didCancel) {
        console.log('first');
      } else if (res.error) {
        console.log('Secound');
      } else if (res.customButton) {
        alert(res.customButton);
      } else {
        setsaveimage(res.assets?.[0]?.uri);
        setShow(false);
      }
    });
  };
  const cameraLaunch = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchCamera(options, res => {
      const granted = PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
      );
      console.log('Response = ', res);
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        setsaveimage(res.assets?.[0]?.uri);
        setShow(false);
      }
    });
  };

  return (
    <View>
      <Modal
        backdropOpacity={0.2}
        onBackdropPress={() => setModalVisible(false)}
        isVisible={isModalVisible}
        style={{
          width: '100%',
          position: 'relative',
          right: scale(18),
          top: scale(20),
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <View style={styles.SecCon}>
            <TouchableOpacity
              onPress={() => {
                photosave();
                setModalVisible(false);
              }}
              style={styles.ModalBtn}>
              <Image
                style={styles.tinyLogo}
                source={require('../../assets/Images/photo.png')}
              />
              <Text style={styles.Text1}>Upload picture</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
              }}
              style={{
                backgroundColor: Color.Main,
                justifyContent: 'center',
                alignItems: 'center',
                width: scale(21),
                height: scale(21),
                borderRadius: 20,
                marginTop: scale(-10),
              }}>
              <Entypo name={'cross'} size={20} color={'#fff'} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                cameraLaunch();
                setModalVisible(false);
              }}
              style={styles.ModalBtn}>
              <Image
                style={styles.tinyLogo2}
                source={require('../../assets/Images/camera.png')}
              />
              <Text style={styles.Text1}>Take a picture</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <TouchableOpacity>
        {show ? (
          <Image
            resizeMode="cover"
            style={styles.circle}
            source={require('../../assets/Images/default.png')}
          />
        ) : (
          <Image
            resizeMode="cover"
            style={styles.circle}
            source={{uri: saveimage}}
          />
        )}
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          left: scale(40),
          bottom: scale(30),
        }}
        onPress={requestCameraPermission}>
        <View
          style={{
            backgroundColor: Color.Main,
            borderRadius: 100,
            elevation: 5,
            width: scale(30),
            height: verticalScale(30),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{
              width: scale(20),
              height: verticalScale(20),
            }}
            source={require('../../assets/Images/edit.png')}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default WithCamera;

const styles = StyleSheet.create({
  profile: {
    textAlign: 'center',
    fontSize: scale(30),
    color: Color.Black,
    fontWeight: '700',
    width: '70%',
  },
  circle: {
    width: scale(120),
    height: scale(120),
    backgroundColor: Color.White,
    borderRadius: 100,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: Color.Main,
  },
  ModalBtn: {
    flex: 1,
    backgroundColor: 'white',
    margin: scale(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text1: {
    fontSize: scale(11),
    fontWeight: '600',
    color: Color.Black,
  },
  SecCon: {
    height: verticalScale(50),
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flexDirection: 'row',
  },
  tinyLogo: {
    height: verticalScale(22),
    width: scale(22),
  },
  tinyLogo2: {
    height: verticalScale(22),
    width: scale(25),
  },
});
