import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

import LinearGradient from 'react-native-linear-gradient';
import {COLORS, FONTS} from '../constants';

const CustomButton = ({text, buttonContainerStyle, colors, onPress}) => {
  if (colors.length > 0) {
    return (
      <TouchableOpacity onPress={onPress}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={colors}
          style={{...buttonContainerStyle}}>
          <Text style={styles.textColor}>{text}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity onPress={onPress} style={{...buttonContainerStyle}}>
        <Text style={styles.textLight}>{text}</Text>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  textColor: {
    textAlign: 'center',
    color: COLORS.white,
    ...FONTS.h3,
  },
  textLight: {
    textAlign: 'center',
    color: COLORS.white,
    ...FONTS.h3,
  },
});

export default CustomButton;
