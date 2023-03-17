import React, {useEffect} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {blueColor, cyanColor} from '../../core/themeColor';
import {SplashScreenNavigationProp, SplashScreenRouteProp} from '../../Router';
import {vh, vw} from '../../core/helpers/sizeHelper';

type Props = {
  navigation: SplashScreenNavigationProp;
  route: SplashScreenRouteProp;
};

const SplashScreen: React.FC<Props> = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainScreen', {});
    }, 2000);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <LinearGradient
          colors={[cyanColor, blueColor, cyanColor]}
          start={{x: 0.5, y: -0.2}}
          end={{x: 0.5, y: 1.2}}
          style={styles.gradient}
        />

        <Image
          source={require('../../../assets/logo_splash_screen_white.png')}
          style={styles.logo}
        />

        <Text style={styles.text}>
          PINTU Technical Assessment - By Ridwan Faturrahman
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    position: 'relative',
  },
  gradient: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  logo: {
    width: vw(60),
    resizeMode: 'contain',
  },
  text: {
    bottom: vh(5),
    color: 'white',
    position: 'absolute',
    left: vw(10),
    right: vw(10),
    textAlign: 'center',
  },
});

export default SplashScreen;
