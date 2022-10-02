import React from 'react';
import {View, StyleSheet, StatusBar, ImageBackground, Text} from 'react-native';

import {images, COLORS, SIZES, FONTS} from '../constants';
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from '../components/CustomButton';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.headerContainer}>
        <ImageBackground
          source={images.loginBackground}
          style={styles.imageBackground}
          resizeMode="cover">
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            colors={[COLORS.transparent, COLORS.black]}
            style={styles.gradient}>
            <Text style={styles.font}>Cooking a Delicious Food Easily</Text>
          </LinearGradient>
        </ImageBackground>
      </View>
      <View style={styles.renderContainer}>
        <Text style={styles.text}>
          Discover more than 1200 food recipes in your hands and cooking it
          easily!
        </Text>
        <View style={styles.buttonContainer}>
          <CustomButton
            text={'Login'}
            colors={[COLORS.darkGreen, COLORS.lime]}
            buttonContainerStyle={styles.loginButton}
            onPress={() => navigation.replace('Home')}
          />
          <CustomButton
            text={'Sign Up'}
            colors={[]}
            buttonContainerStyle={styles.signupButton}
            onPress={() => navigation.replace('Home')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  headerContainer: {
    height: SIZES.height > 700 ? '65%' : '60%',
  },
  font: {
    width: '80%',
    color: COLORS.white,
    ...FONTS.largeTitle,
    lineHeight: 45,
  },
  gradient: {
    height: 200,
    justifyContent: 'flex-end',
    paddingHorizontal: SIZES.padding,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  renderContainer: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
  },
  text: {
    marginTop: SIZES.radius,
    width: '70%',
    color: COLORS.gray,
    ...FONTS.body3,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  loginButton: {
    paddingVertical: 18,
    borderRadius: 20,
  },
  signupButton: {
    marginTop: SIZES.radius,
    paddingVertical: 18,
    borderRadius: 20,
    borderColor: COLORS.darkLime,
    borderWidth: 1,
  },
});

export default Login;
