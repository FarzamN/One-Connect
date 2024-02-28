import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Color} from '../../utils/Colors';
import LinearGradient from 'react-native-linear-gradient';
import {moderateScale, scale} from 'react-native-size-matters';
import {Font} from '../../utils/font';
const Splash = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={['#E80202', '#DE0101', '#C40101', '#BA0101']}
        style={styles.containerStyle}>
        <View style={styles.MainBox}>
          <Image
            style={styles.Image}
            source={require('../../assets/Images/mainlogo.png')}
          />
          <View style={styles.textBox}>
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              in mi pharetra, sollicitudin turpis a, rhoncus sem. Nam eu
              sollicitudin neque, non maximus dolor. Aenean laoreet pharetra
              orci eu volutpat. Curabitur porttitor ipsum massa, eu laoreet
              justo varius sit amet. Sed et sollicitudin nulla. In vestibulum
              blandit ullamcorper. Integer egestas, augue sit amet sollicitudin
              suscipit, lacus sapien ultrices nisi, non eleifend augue urna quis
              eros. Aenean gravida lectus et cursus convallis. Donec et
              hendrerit libero.
            </Text>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.navigate('login')}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#E70100', '#DD0101', '#CA0101', '#BA0101']}
            style={styles.Btn}>
            <Text style={styles.font}>Get Started</Text>
          </LinearGradient>
        </TouchableOpacity>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  MainBox: {
    width: '85%',
    height: '85%',
    backgroundColor: Color.White,
    borderRadius: 50,
    marginTop: scale(1),
    alignItems: 'center',
  },
  text: {
    fontSize: scale(13),
    color: Color.Black,
    textAlign: 'center',
    fontFamily: Font.Lato700,
  },
  textBox: {
    paddingHorizontal: moderateScale(35),
    marginTop: scale(20),
  },
  font: {
    color: Color.White,
    fontSize: scale(15),
    textTransform: 'uppercase',
    textAlign: 'center',
    fontFamily: Font.Lato700,
  },
  Btn: {
    paddingVertical: moderateScale(15),
    paddingHorizontal: moderateScale(50),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    position: 'absolute',
    alignSelf: 'center',
    bottom: -25,
    elevation: 5,
  },
  Image: {
    marginTop: scale(15),
  },
});

export default Splash;